import mongoose from 'mongoose'

const SkillSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image:{type: String, required: true}
})

const Skills = mongoose.model('Skills',SkillSchema)

export default Skills