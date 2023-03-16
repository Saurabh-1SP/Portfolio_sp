import Skill from '../models/Skill.js'

const createSkill = async (req,res) =>{
    try {
        const {name,image} = req.body;

    const newPost = await Skill.create({
        name,
        image
    })
    // console.log(newPost)

    res.status(201).json({ sucess: true, data:newPost});
    } catch (error) {
        // alert('ghs');
        res.status(500).json({sucess:false, message:'its the problem with the postroutes'})
    }
}

const getSkill = async (req,res) => {
    try {
        const allSkill = await Skill.find({})

        res.status(200).json({success: true, data: allSkill})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export {
    createSkill,
    getSkill,
}