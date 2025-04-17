import {Contact} from '../models/contactModel.js'

export const postContact = async(req,res)=>{
    try{
        const {firstName,lastName,email,sub,msg} = req.body;
        if(!firstName || !lastName || !email || !sub || !msg){
            res.status(400).json({success: false,message: 'Please fill all fields'})
        }
        const posted = await Contact.create({firstName,lastName,email,sub,msg})
        res.status(201).json({success: true,message: 'Contact sended successfully',data: posted})
    }catch(err){
        console.log(`Post Error : ${err.message}`)
        res.status(400).json({success: false,message: 'Internal Server Error'})
    }
}