import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    tags: [{type: String, required: true}],
    tech: [{type: String, required: true}],
    live: {type: String, required: true},
    github: {type: String, required: true},
    image: {type: String, required: true},
})

const Projects = mongoose.model('Projects',projectSchema)

export default Projects