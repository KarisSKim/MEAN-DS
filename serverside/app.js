const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const Member = require('./models/member')
// connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); }); 

app.use(bodyParser.urlencoded({ extended: false }))  // parse application/x-www-form-urlencoded
app.use(bodyParser.json())  // parse application/json

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
    }
);
/*
let seq_id = '4'; //Create variable seq_id to increment on push
//Place variable members outside so it can be accessed
let members = [ 
    { "id" : 1, "firstName" : "Karis" , "lastName" : "Kim" , "email" : "skim144@students.kennesaw.edu" , "password" : "12345" }, 
    { "id" : 2, "firstName" : "Matthew" , "lastName" : "Cornwell" , "email" : "mcornwe1@students.kennesaw.edu" , "password" : "abcde" }, 
    { "id" : 3, "firstName" : "Hang" , "lastName" : "Yu" , "email" : "hyu9@students.kennesaw.edu" , "password" : "98765" },
    { "id" : 4, "firstName" : "James" , "lastName" : "Luhring" , "email" : "jluhrin1@students.kennesaw.edu" , "password" : "hijkl"}
    ];
app.get('/members', (req, res, next) => {
    //send the array as the response 
    res.json(members);
    }
); */

  //call mongoose method find (MongoDB db.Members.find())
  app.get('/members', (req, res, next) => { 
      Member.find() 
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
          console.log('Error: ${err}');
          res.status(500).json(err);
        });
  });

  //call mongoose method find (MongoDB db.Members.find())
  app.get('/memberByEmail/:email', (req, res ) => { 
    console.log("email : " + req.params.email );
    Member.findOne( {"email": req.params.email } ) 
      //if data is returned, send data as a response 
      .then(data => res.status(200).json(data))
      //if error, send internal server error
      .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  });
  
  app.post('/members', (req, res, next) => { 
    // create a new student variable and save request’s fields 
    const member = new Member({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    //send the document to the database 
    member.save()
      //in case of success
      .then(() => { console.log('Success');})
      //if error
      .catch(err => {console.log('Error:' + err);});
  });
  
/*//serve incoming post requests to /members
app.post('/members', (req, res, next) => {
    const member = req.body;
    console.log(member.firstName + " " + member.lastName + " " + member.email + " " + member.password );
    //Create push into members and increment seq_id
    members.push({"id":++seq_id,"firstName":member.firstName,"lastName":member.lastName, "email":member.email, "password":member.password});
    res.status(201).json('Post successful');  //sent an acknowledgment back to caller
  });
*/  

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/members/:id", (req, res, next) => {
    Member.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
    });
  });

//Mod12 III#9 - for update
// serve incoming put requests to /members
app.put('/members/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Member.findByIdAndUpdate(req.params.id,
      {$set: {firstName : req.body.firstName,
              lastName : req.body.lastName,
              email: req.body.email,
              password: req.body.password} }, {new:true}) 
     .then((member) => {
        if (member) { //what was updated
          console.log(member);
        } 
        else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
  } 
  else {
   console.log("please provide correct id");
  }
  
});  


//to use this middleware in other parts of the application
module.exports=app;

