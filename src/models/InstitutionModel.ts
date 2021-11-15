import mongoose, { Schema, Document } from "mongoose";

export interface IInstitution extends Document {
    name: string,
    slug: string,
    address: string,
    country: string,
    region: string
}

const InstitutionSchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: {type: String, required: true, index: { unique: true }},
    address: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true }
});

const InstitutionModel = mongoose.model<IInstitution>("Institution", InstitutionSchema);
export default InstitutionModel;