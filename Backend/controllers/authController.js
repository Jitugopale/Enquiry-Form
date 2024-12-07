// controllers.js
import nodemailer from "nodemailer"; // Using ES module import

export const handleEnquirySubmission = async (req, res) => {
  const { creditSocietyName, contactNo, contactPerson, demoDate, demoTime, categories, signatory } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "jiteshgopale26@gmail.com", // Use environment variables for security
      pass: process.env.EMAIL_PASS || "gaxohvmyinvnieoi", // Use environment variables for security
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use environment variables for security
    to: "jiteshgopale18307@gmail.com",
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
};
