import { Request, Response } from "express";
import InstitutionModel from "../models/InstitutionModel";
import SubjectModel from "../models/SubjectsModel";
import SubmissionModel from "../models/SubmissionModel";

export const find = (req: Request, res: Response) => {

  InstitutionModel.find((err: any, data: any) => {

    if (err) {

      res.send(err);
      
    } else {

      res.send(data);

    }

  });

};

export const findOne = (req: Request, res: Response) => {

  InstitutionModel.findOne({slug: req.params.slug}, (err: any, item: any) => {

    if (err) {

      res.send(err);

    } else if (item) {

      res.send(item);

    } else {

      res.status(404).send("Not Found");

    }

  });

};

export const getsubmissions = (req: Request, res: Response) => {

  SubmissionModel.find({institution_id: req.params.slug}, function (err: any, data: any) {

    if (err) {

      res.send(err);

    } else {

      res.send(data);

    }
  });

};

export const getSubjects = (req: Request, res: Response) => {

  SubjectModel.aggregate([

    { 
      $match:
      {
        institution_id: req.params.slug
      }
    },
    {
      $group:
      {
        _id: { name: "$name" },
        student_ratings: { $push:  { year: "$year", rating: "$student_rating" } }
      }
    }
  ], function (err:any, data: any) {

    if (err) {

      res.send(err);

    } else {

      res.send(data);

    }
    
  });

};