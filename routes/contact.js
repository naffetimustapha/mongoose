//1 require express
const express = require("express");
const Contact = require("../Models/Contact");

//2 express router
const router = express.Router()

/// routes
//*
//*@Desc:testing route
//*@path : http://localhost:4300/api/contact/test
//*@method :GET
//@data : no data 
router.get('/test',(req,res)=>{
    res.send ("hello world")
})



//*@Desc:add contact
//*@path : http://localhost:4300/api/contact/add
//*@method :post
//@data : req.body
router.post("/add",async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        const newContact = new Contact ({name,email,phone});
        await newContact.save();
        res.status(200).send({msg:"contact add  with success" ,  newContact})
    }catch(error){
        res.status(400).send({msg:"cannot add contact" , error});
    }
});



//*@Desc:get all contact
//*@path : http://localhost:4300/api/contact/all
//*@method :GET
//@data : no data
router.get('/all',async(req,res)=>{
    try{
        const listContacts = await Contact.find()
        res.status(200).send({msg:"this is the list",listContacts})
    }catch (error){
        res.status(400).send({msg:"cant get the list"})
    }
})




//*@Desc:get one contact
//*@path : http://localhost:4300/api/contact/:id
//*@method :GET
//@data : req.params._id
router.get('/:id',async(req,res)=>{
    try{
        const contactToGet=await Contact.findOne({_id:req.params.id})
        res.status(200).send ({msg:"i get the contact",contactToGet})
    }catch(error){
        res.status(400).send ({msg:"cant get the contact" , error})
    }
})



//*@Desc:delete contact
//*@path : http://localhost:4300/api/contact/:_id
//*@method :DELETE
//@data : req.params._id

router.delete('/:_id',async (req,res)=>{
    try{
        const{_id}= req.params
        await Contact.findOneAndDelete({_id})
        res.status(200).send ({msg: "this contact is deleted" ,})
    }catch (error){
        res.status(400).send ({msg:"cant delete contact", error})
    }
})



//*@Desc:edit contact
//*@path : http://localhost:4300/api/contact/:_id
//*@method :put
//@data : req.params._id & req.body


router.put("/:_id" , async (req,res)=>{
    try {
        const {id}= req.params;
        const result = await Contact.findOneAndUpdate({id},{$set:{...req.body}});
        res.status(200).send ({msg: "this contact is updated" ,})
    } catch (error) {
        res.status(400).send ({msg:"cant update this contact", error}) 
    }
})



//3 export 
module.exports = router;