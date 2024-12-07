import mongoose from "mongoose";

// Define schema for the enquiry form data
const enquirySchema = new mongoose.Schema({
  creditSocietyName: { type: String, required: true },
  contactNo: { type: String, required: true },
  contactPerson: { type: String, required: true },
  noOfBranch: { type: String, required: true },
  demoDate: { type: Date, required: true },
  demoTime: { type: String, required: true },
  existingSoftware: { type: String, required: true },
  softwareVendor: { type: String },
  tentativePersons: { type: String, required: true },
  signatory: { type: String, required: true },
  categories: {
    chairmen: { type: Boolean, default: false },
    director: { type: Boolean, default: false },
    gm: { type: Boolean, default: false },
    manager: { type: Boolean, default: false },
    other: { type: Boolean, default: false }
  },
  complianceModules: {
    cbs: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    documentVerification: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    digitalBoardMeeting: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    eAffidavit: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    customerRepository: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    cibil: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    hrms: {
      use: { type: Boolean, default: false },
      time: { type: String }
    }
  },
  interestedProducts: {
    mobileBanking: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    utilityPayments: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    eStatement: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    MissCallAlerts: {
      use: { type: Boolean, default: false },
      time: { type: String }
    },
    KioskPassbook: {
      use: { type: Boolean, default: false },
      time: { type: String }
    }
  }
});

// Create the model
const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
