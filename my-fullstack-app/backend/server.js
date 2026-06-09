const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

//To use the routes
app.use('/api/employees', require('./routes/employeeRoutes'));

//MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGODBURI = process.env.MONGODBURI || 'mongodb://127.0.0.1:27017/employeedb';

mongoose.connect(MONGODBURI)
.then( () =>{
    console.log(`Connected to MongoDB at: ${MONGODBURI}`);
    //Express server to listen for incoming requests
    app.listen(PORT, () => {
        console.log(`Server running on port:${PORT}`);
    });
  

})
.catch((error) =>{
    console.error('MongoDB connection failed: ',error);

});


