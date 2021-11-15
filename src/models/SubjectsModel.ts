import mongoose, { Schema, Document } from "mongoose";

export interface ISubject {
    institution_id: string,
    submission_year: Number,
    name: string,
    academic_papers: number,
    students_total: number,
    student_rating: number
}

const SubjectSchema: Schema = new Schema({
    institution_id: { type: String, required: true },
    submission_year: { type: Number, required: true },
    name: { type: String, required: true },
    academic_papers: { type: Number, required: true },
    students_total: { type: Number, required: true },
    student_rating: { type: Number, required: true }
});

const SubjectModel = mongoose.model<ISubject>("Subject", SubjectSchema);
export default SubjectModel;

// Here I have denormalized the submission and institution data (institution_id and submission year) into subject data, to make the reads more efficient. 
// Update or Insert happens every year. while read happens frequently. Therefore, denormalization makes sense here.