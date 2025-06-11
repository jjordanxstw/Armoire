const express = require("express");
const dotenv = require("dotenv");

//Load env variables
dotenv.config({ path: "./config/config.env" });

//Route files
const clothes = require("./routes/clothes");

const app = express();

//Body parser
app.use(express.json());

app.use('/api/v1/clothes', clothes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handle unhandled promise rejections
process.on('unhandledRejection',(err ,promise)=>{
     console.log(`Error: ${err.message}`);
     //Close server & exit process
     server.close(()=>process.exit(1));
});