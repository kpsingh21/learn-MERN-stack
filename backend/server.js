import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import welcomeRoutes from './routes/welcomeRoutes.js';
import studentRoutes from './routes/studentRoutes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("API running"));
app.use('/api', welcomeRoutes);
app.use("/api/students", studentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
