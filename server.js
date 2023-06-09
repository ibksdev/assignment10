const { readdirSync } = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const helmet = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { error } = require("console");


// middleware

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(helmet());

//routes middlewire

readdirSync("./routes").map(r => app.use("api/v1/",require(`./routes/${r}`)));

//server
const port = process.env.PORT || 8000;

// MongoDB Connection 

mongoose
    .connect(process.env.DATABASE)
    .then(()=> {
        app.listen(port, () => {
            console.log(`Server Running on port ${port}`)
        });
    })
    .catch((error) => console.log(err));