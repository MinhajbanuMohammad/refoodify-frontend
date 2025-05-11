import { Router } from "express";
const router = Router();
import Contact from "../models/Contact";

router.post("/", async (req, res) => {
  console.log("POST /api/contact called"); // ✅ Console log to verify route hit

  try {
    const { name, email, address, message } = req.body;

    const newContact = new Contact({ name, email, address, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
