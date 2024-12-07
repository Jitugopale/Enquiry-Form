const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint to handle form submission
app.post("/api/enquiry", async (req, res) => {
  const { creditSocietyName, contactNo, contactPerson, demoDate, demoTime, categories, signatory } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_password", // Use environment variables for security
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "recipient_email@gmail.com",
    subject: "New Enquiry Submission",
    text: `Enquiry Details:\n
           Credit Society Name: ${creditSocietyName}\n
           Contact No: ${contactNo}\n
           Contact Person: ${contactPerson}\n
           Demo Date: ${demoDate}\n
           Demo Time: ${demoTime}\n
           Categories: ${JSON.stringify(categories)}\n
           Signatory: ${signatory}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Failed to submit the form." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
