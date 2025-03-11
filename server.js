const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const errorHandler = require("./middleware/errorMiddleware");
dotEnv.config();

const app = express();
const PORT = process.env.PORT || 8080;


// Middleware
app.use(express.json());


app.listen(PORT, () => {
    console.log('server started..');
});
  

// Database Connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> 
    console.log("DB Connected..."))
.catch((err)=> 
    console.error("DB Connection Failed..."));

// Routes
const userRoutes = require("./routers/userRoutes");
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

