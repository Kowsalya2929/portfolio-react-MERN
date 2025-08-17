import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projName: {type: String, required: true},
    projSourceCode: {type: String, required: true},
    projHostLink: {type: String, required: true},
    projImg: {type: String,default: ''}
},{timestamps: true})

export const Project = mongoose.model('Project',projectSchema)