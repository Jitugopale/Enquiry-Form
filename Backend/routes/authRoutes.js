// routes.js
import express from 'express';
import { handleEnquirySubmission } from "../controllers/authController.js";

const router = express.Router();

router.post("/enquiry", handleEnquirySubmission);

export default router;
