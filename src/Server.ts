import express, { Application, Request, Response, NextFunction } from "express";
import APIRoutes from './routes/Index';
import debug from "debug";
import { Database } from "./Database";

export class Server
{
    public app: Application;
    private _port: number;
    private _database: Database; 

    constructor(port:number, dbConnectionString: string) {
        this._port = port;
        this.app = express();
        this._database = new Database(dbConnectionString);
    }

    configureMiddleware(): void {

        this.app.use(express.urlencoded({extended: true}));

        this.app.use(express.json());

        this.app.use('/api', APIRoutes);

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            const err: any = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        this.configureErrorHandlers();

    }

    configureErrorHandlers(): void {

        if (this.app.get('env') === 'development') {

            this.app.use((err: any, req: Request, res: Response, next: NextFunction) => { 
                res.status(err[ 'status' ] || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });
        }

        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    start(): void {

        this._database.start();

        this.configureMiddleware();

        this.app.listen(this._port,  () => {
            debug(`Express server listening on port ${this._port}`);
        });
    }
}