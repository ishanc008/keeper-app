const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const noteRouter = require("./Routes/noteRoute")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI

app.use(cors());
app.use(express.json());
app.disable('etag');

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connected successfully");
})

app.use("/notes",noteRouter)

app.listen(port,()=>console.log(`Server running at ${port}`));