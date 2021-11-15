import request from "supertest";
import { Application } from "express";
import { expect } from "chai";
import Config from "../Config";
import { Server } from "../Server";

const server = new Server(Config.Port, Config.MongoURI);
server.start();
const app: Application = server.app;

describe("GET /api", function () {
    it("server instantiated without error", function (done) {

        request(app).get("/api").end(function (err, res) {
            
            expect(res.status).to.equal(200);
            done();

        });

    });
});

describe("GET /api/institutions", function () {
    it("should return a list of institutions", function (done) {

        request(app).get("/api/institutions").end(function (err, res) {
            
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            done();

        });

    });

});

describe("GET /api/institutions/:id", function () {
   
    it("should return one institution record", function (done) {

        request(app).get("/api/institutions/psu").end(function (err, res) {
            
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            done();

        });

    });

    it("should return 404 if institution does not exist with that slug", function (done) {

        request(app).get("/api/institutions/non-existing").end(function (err, res) {
            
            expect(res.status).to.equal(404);
            done();

        });

    });

});

describe("GET /api/institutions/:slug/submissions", function () {
   
    it("should return the list of submissions of an institution", function (done) {

        request(app).get("/api/institutions/psu/submissions").end(function (err, res) {
            
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            done();

        });

    });

});

//An simple example of using the longitudinal (anual) submission data to generate a trend line (Line Chart) about how the ratings of subjects have changed accross time
describe("GET /api/institutions/:slug/subjects-ratings_trend", function () {
   
    it("should return the list of subjects for an institution with student rating trend line", function (done) {

        request(app).get("/api/institutions/psu/subjects-ratings_trend").end(function (err, res) {
            
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.satisfy((body: any[]) => {

                return body.length == 0 || ( (body[0]).hasOwnProperty('student_ratings')  && Array.isArray(body[0]['student_ratings']));

            });

            done();

        });

    });

});

// Time Limitation: Due to short time, I have used the main db for testing which is not a good practice. Ideally, a separate DB with seeding should be used. 
// Time Limitation: More test cases for each API endpoint is needed.

// Future: Students should be able to submit reviews for different aspects for the university the are/have been enrolled in. This can be verified using student school emails registered with T.H.E.
// possibly something like glassdoor for universities