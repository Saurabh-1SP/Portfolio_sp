import mongoose from "mongoose";
// import { v2 as cloudinary } from "cloudinary";

import Projects from '../models/Projects.js'

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
//  })


const createProjects = async (req,res) => {
    try {
        const {title,description,live,github,tags,image} = req.body;

    const newPost = await Projects.create({
        title,
        description,
        live,
        github,
        tags,
        image,
    })
    // console.log(newPost)

    res.status(201).json({ sucess: true, data:newPost});
    } catch (error) {
        // alert('ghs');
        res.status(500).json({sucess:false, message:'its the problem with the postroutes'})
    }
}

const getAllProjects = async (req,res) => {
    try {
        const allProjects = await Projects.find({})

        res.status(200).json({success: true, data: allProjects})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}
const getProjectDetail = async (req,res) => {
    const {id} = req.params;
    try {
        const allProjects = await Projects.find({_id: id})

        res.status(200).json({success: true, data: allProjects})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

const updateProject = async (req,res) => {
    const {id} = req.params;
    const project = req.body

    try {
        const updatePost = await Projects.findByIdAndUpdate(id,project, {new: true})

        res.status(200).json({success: true, data: updatePost})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error})
    }
}



export
{
    createProjects,
    getAllProjects,
    getProjectDetail,
    updateProject
}