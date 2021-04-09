const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const noteRouter = require("./Routes/noteRoute")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin-ishan:1234@cluster0.kqhih.mongodb.net/keeperAppDB?retryWrites=true&w=majority",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connected successfully");
})

app.use("/notes",noteRouter)

app.listen(port,()=>console.log(`Server running at ${port}`));