import mongoose from "mongoose";

export class Database
{
    private _connectionString: string;

    constructor(connectionString: string) {
        this._connectionString = connectionString;
    }

    async start(): Promise<void> {
        
        await mongoose.connect(this._connectionString);

        mongoose.connection.on('error', () => {

            throw new Error(`unable to connect to database: ${this._connectionString}`);
        });
    }
}