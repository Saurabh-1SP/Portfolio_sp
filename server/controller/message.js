import nodemailer from 'nodemailer'
import mailgen from 'mailgen'

import Message from "../models/message.js";

const createMessage = async (req,res) => {

    const {name, email, message} = req.body;

    let config = {
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_EMAIL,
            pass: process.env.GOOGLE_PASS,
        }
    }

    let transporter = nodemailer.createTransport(config);

    let mailGenrator = new mailgen({
        theme: 'default',
        product: {
            name: 'Saurabh Pasi',
            link: 'https://sp-port.netlify.app/'
        }
    })

    let response = {
        body: {
            name: 'S.P',
            intro: `You got a message from ${name} and his email address is ${email}`,
            outro: [`${message}`,'Lets FUCKING GOoOOOOOOOO:::::!!!!!!!!']
        }
    }

    let mail = mailGenrator.generate(response)

    let Mail = {
        from: 'shivnarendranarendra@gmail.com',
        to: 'saurabhpasi.sp@gmail.com',
        subject: 'Someone contacted you on your portfolio site',
        html: mail
    }

    transporter.sendMail(Mail).then(
        async () => {
            try {
                const newMessage = await Message.create({
                    name,
                    email,
                    message
                })
                res.status(201).json({ sucess: true, data:newMessage});
        
            } catch (error) {
                res.status(500).json({ sucess: false, message: error});
            }
        }
    )



}

export default createMessage;