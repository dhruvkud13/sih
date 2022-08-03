import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import  cors  from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();


const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("connected to DB");
      })
      .catch((err) => console.error(err));
};


app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  })


app.use("/api/auth", authRoutes);


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
      success: false,
      status: status,
      message: message,
    });
  });


app.listen(8000, () => {
    connect();
    console.log("Server on");
  });

//   gJygwWgmDpu59GA3