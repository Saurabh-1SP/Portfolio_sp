import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    email: {type: 'string', required: true},
    message: {type: 'string', required: true}
})

const Message = mongoose.model('Message',messageSchema)

export default Message