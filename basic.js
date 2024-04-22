var mongoose = require('mongoose');


import  express  from 'express';
import  request  from 'express';
import { MongoClient}  from 'mongodb';

const uri = "mongodb+srv://amaredu626:Amar123@cluster0.wjekqoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);



var personSchema = mongoose.Schema({
    name:String,
    age : Number,
    nationality: String
});

var Person = mongoose.model("Person",personSchema);




async function run() {
    try{
        await client.connect();
        const db= client.db('newdatabase2');

        const collection = db.collection('posts');


        // find the documents

        const docs= await collection.findOne();
        console.log(docs);// printing in console.
        // from here i can transfer the values at required frontend places.
    }finally{
        // closing the database connection when finished or an error occurs
        await client.close();
    }
}

// function call 
run().catch(console.error);