const express=require('express')
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// firstName ,middleName,lastName ,dob, email,phoneNumber,occupation,company, password 
var userSchema=new Schema({
    firstName:{
        type: String,
        required: true,
        unique: true
    }, 
    middleName:{
       type:String,
       required:function(){
        return this.middleName? true : false 
       },
       unique: true
    },
    lastName:{
        type: String,
        required: true,
        unique: true

    },
    dob:{
        type:Number,
        required:function(){
         return this.dob? true : false 
        },
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        
    },
    occupation:{
        type:String,
        required:function(){
         return this.occupation? true : false 
        },
       
    },
    company:{
        type:String,
        required:function(){
         return this.company? true : false 
        },
     
    },
    password:{
        type: String,
        required: true,
        minlength:6
    }   

});
module.exports=mongoose.model('User',userSchema)