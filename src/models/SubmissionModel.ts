import mongoose, { Schema, Document } from "mongoose";

export interface ISubmission extends Document {
    institution_id: string,
    year: number,
    students_total: number,
    undergraduates_total: number,
    postgraduates_total: number,
    staff_total: number,
    academic_papers: number,
    institution_income: number
}

const SubmissionSchema: Schema = new Schema({
    institution_id:  { type: String, required: true },
    year: { type: Number, required: true },
    students_total: { type: Number, required: true },
    undergraduates_total: { type: Number, required: true },
    postgraduates_total: { type: Number, required: true },
    staff_total: { type: Number, required: true },
    academic_papers: { type: Number, required: true },
    institution_income: { type: Number, required: true }
});

const SubmissionModel = mongoose.model<ISubmission>("Submission", SubmissionSchema);
export default SubmissionModel;