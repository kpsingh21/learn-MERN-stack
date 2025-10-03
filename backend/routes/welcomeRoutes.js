import express from "express";
const router = express.Router();


// Define routes
router.get('/msg', (req, res) => {
    res.send('welcome to my era');
  });

export default router; // ← you need this to export your router
