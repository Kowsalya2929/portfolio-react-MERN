import mongoose from "mongoose";
import { Project } from "../models/projModel.js"

export const getProjects = async(req,res) =>{
    try{
        const getted = await Project.find();
        res.status(200).json({success: true,data: getted})
    }catch(err){
        console.log(`Get all projects error : ${err.message}`)
        res.status(500).json({success: false,message: 'Internal Server Error'})
    }
}

export const postProject = async(req,res) =>{
    try{
        const {projName,projSourceCode,projHostLink,projImg} = req.body;
        if(!projName || !projSourceCode || !projHostLink){
            return res.status(400).json({success: false,message: 'All fields are required'})
        }
        const posted = await Project.create({projName,projHostLink,projSourceCode,projImg})
        res.status(200).json({success: true,message: 'Project created', data: posted})
    }catch(err){
        console.log(`Post project error : ${err.message}`)
        res.status(500).json({success: false,message: 'Internal Server Error'})
    }
}


export const deleteProject = async(req,res) =>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({success: false,message: 'Invalid ID'})
        }
        const deleted = await Project.findByIdAndDelete(req.params.id)
        res.status(200).json({success: true,message: 'Project Deleted',data: deleted})
    }catch(err){
        console.log(`Delete project error : ${err.message}`)
        res.status(500).json({success: false,message: 'Internal Server Error'})
    }
}