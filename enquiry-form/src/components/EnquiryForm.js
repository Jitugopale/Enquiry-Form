import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        creditSocietyName: '',
        contactNo: '',
        contactPerson: '',
        noOfBranch: '',
        demoDate: '',
        demoTime: '',
        existingSoftware: '',
        softwareVendor: '',
        tentativePersons: '',
        categories: {
            chairmen: false,
            director: false,
            gm: false,
            manager: false,
            other: false,
        },
        signatory: '',
        complianceModules: {
            cbs: {
                use: false,
                time: '',
            },
            documentVerification: {
                use: false,
                time: '',
            },
            digitalBoardMeeting: {
                use: false,
                time: '',
            },
            eAffidavit: {
                use: false,
                time: '',
            },
            customerRepository: {
                use: false,
                time: '',
            },
            cibil: {
                use: false,
                time: '',
            },
            hrms: {
                use: false,
                time: '',
            },
            // Initialize other modules similarly
        },
        interestedProducts: {  // <-- Initialize interestedProducts with an empty object
            mobileBanking: { use: false, time: '' },
            utilityPayments: { use: false, time: '' },
            eStatement: { use: false, time: '' },
            MissCallAlerts: { use: false, time: '' },
            KioskPassbook: { use: false, time: '' }
        }
    });
    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                categories: { ...formData.categories, [name]: checked }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/enquiry', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        
            if (response.status === 200) {
                alert('Form submitted successfully');
            } else {
                alert('Error submitting the form');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('Error submitting the form');
        }
        
    };

    return (
        <div className="container mt-5">
            <div className="card p-4">
                <div className="form-header">
                    <h2>In-so-Tech Pvt. Ltd.</h2>
                    <p>Demo Request Form for Credit Society</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="creditSocietyName" className="form-label">Credit Society Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="creditSocietyName"
                                name="creditSocietyName"
                                value={formData.creditSocietyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="contactNo" className="form-label">Contact No.</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactNo"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="contactPerson" className="form-label">Contact Person</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactPerson"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="noOfBranch" className="form-label">No of Branch</label>
                            <input
                                type="text"
                                className="form-control"
                                id="noOfBranch"
                                name="noOfBranch"
                                value={formData.noOfBranch}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="demoDate" className="form-label">Demo Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="demoDate"
                                name="demoDate"
                                value={formData.demoDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="demoTime" className="form-label">Time</label>
                            <input
                                type="time"
                                className="form-control"
                                id="demoTime"
                                name="demoTime"
                                value={formData.demoTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="existingSoftware" className="form-label">Existing Software (Y/N)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="existingSoftware"
                                name="existingSoftware"
                                value={formData.existingSoftware}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="softwareVendor" className="form-label">Name of the Software Vendor</label>
                            <input
                                type="text"
                                className="form-control"
                                id="softwareVendor"
                                name="softwareVendor"
                                value={formData.softwareVendor}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    

                      {/* Interested Product for Demo */}
                      <h5>Interested Product for Demo</h5>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>1. Digital Banking</th>
                                <th>Use (Y/N)</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mobile Banking Apps (Android)</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.mobileBanking.use"
                                        checked={formData.interestedProducts.mobileBanking.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.mobileBanking.time"
                                        checked={formData.interestedProducts.mobileBanking.time === '15-20 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            interestedProducts: {
                                                ...formData.interestedProducts,
                                                mobileBanking: { ...formData.interestedProducts.mobileBanking, time: '15-20 min' }
                                            }
                                        })}
                                    /> 15-20 min
                                </td>
                            </tr>
                            <tr>
                                <td>Utility Payments (BBPS)</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.utilityPayments.use"
                                        checked={formData.interestedProducts.utilityPayments.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.utilityPayments.time"
                                        checked={formData.interestedProducts.utilityPayments.time === '05-10 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            interestedProducts: {
                                                ...formData.interestedProducts,
                                                utilityPayments: { ...formData.interestedProducts.utilityPayments, time: '05-10 min' }
                                            }
                                        })}
                                    /> 05-10 min
                                </td>
                            </tr>
                            {/* Add */}


                            <tr>
                                <td>e-Statement</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.eStatement.use"
                                        checked={formData.interestedProducts.eStatement.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.eStatement.time"
                                        checked={formData.interestedProducts.eStatement.time === '02-05 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            interestedProducts: {
                                                ...formData.interestedProducts,
                                                utilityPayments: { ...formData.interestedProducts.eStatement, time: '05-10 min' }
                                            }
                                        })}
                                    /> 02-05 min
                                </td>
                            </tr>
                            <tr>
                                <td>Miss Call Alerts</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.MissCallAlerts.use"
                                        checked={formData.interestedProducts.MissCallAlerts.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.MissCallAlerts.time"
                                        checked={formData.interestedProducts.MissCallAlerts.time === '05-10 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            interestedProducts: {
                                                ...formData.interestedProducts,
                                                utilityPayments: { ...formData.interestedProducts.MissCallAlerts, time: '05-10 min' }
                                            }
                                        })}
                                    /> 05-10 min
                                </td>
                            </tr>
                            <tr>
                                <td>Kiosk Passbook Printing - Cheque book Issue</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.KioskPassbook.use"
                                        checked={formData.interestedProducts.KioskPassbook.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="interestedProducts.KioskPassbook.time"
                                        checked={formData.interestedProducts.KioskPassbook.time === '05-10 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            interestedProducts: {
                                                ...formData.interestedProducts,
                                                utilityPayments: { ...formData.interestedProducts.KioskPassbook, time: '05-10 min' }
                                            }
                                        })}
                                    /> 05-10 min
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>

                     

                     {/* Compliance & Add-on Module */}
                    <h5>Compliance & Add-on Module</h5>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Module</th>
                                <th>Use (Y/N)</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CBS</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.cbs.use"
                                        checked={formData.complianceModules.cbs.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.cbs.time"
                                        checked={formData.complianceModules.cbs.time === '03-04 hr'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                cbs: { ...formData.complianceModules.cbs, time: '03-04 hr' }
                                            }
                                        })}
                                    /> 03-04 hr
                                </td>
                            </tr>
                            <tr>
                                <td>Document verification (Aadhar card, Pan card, License, RC)</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.documentVerification.use"
                                        checked={formData.complianceModules.documentVerification.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.documentVerification.time"
                                        checked={formData.complianceModules.documentVerification.time === '15-20 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                documentVerification: { ...formData.complianceModules.documentVerification, time: '15-20 min' }
                                            }
                                        })}
                                    /> 15-20 min
                                </td>
                            </tr>
                            <tr>
                                <td>Digital Board Meeting Management</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.digitalBoardMeeting.use"
                                        checked={formData.complianceModules.digitalBoardMeeting.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.digitalBoardMeeting.time"
                                        checked={formData.complianceModules.digitalBoardMeeting.time === '15-20 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                digitalBoardMeeting: { ...formData.complianceModules.digitalBoardMeeting, time: '15-20 min' }
                                            }
                                        })}
                                    /> 15-20 min
                                </td>
                            </tr>
                            <tr>
                                <td>e-Affidavit</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.eAffidavit.use"
                                        checked={formData.complianceModules.eAffidavit.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.eAffidavit.time"
                                        checked={formData.complianceModules.eAffidavit.time === '10-15 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                eAffidavit: { ...formData.complianceModules.eAffidavit, time: '10-15 min' }
                                            }
                                        })}
                                    /> 10-15 min
                                </td>
                            </tr>
                            <tr>
                                <td>Your Customer Repository</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.customerRepository.use"
                                        checked={formData.complianceModules.customerRepository.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.customerRepository.time"
                                        checked={formData.complianceModules.customerRepository.time === '10-15 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                customerRepository: { ...formData.complianceModules.customerRepository, time: '10-15 min' }
                                            }
                                        })}
                                    /> 10-15 min
                                </td>
                            </tr>
                            <tr>
                                <td>CIBIL</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.cibil.use"
                                        checked={formData.complianceModules.cibil.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.cibil.time"
                                        checked={formData.complianceModules.cibil.time === '15-20 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                cibil: { ...formData.complianceModules.cibil, time: '15-20 min' }
                                            }
                                        })}
                                    /> 15-20 min
                                </td>
                            </tr>
                            <tr>
                                <td>HRMS (Payroll, Attendance, Leave)</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.hrms.use"
                                        checked={formData.complianceModules.hrms.use}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="complianceModules.hrms.time"
                                        checked={formData.complianceModules.hrms.time === '15-20 min'}
                                        onChange={() => setFormData({
                                            ...formData,
                                            complianceModules: {
                                                ...formData.complianceModules,
                                                hrms: { ...formData.complianceModules.hrms, time: '15-20 min' }
                                            }
                                        })}
                                    /> 15-20 min
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    
                    <div className="row mb-3">
                        <label htmlFor="tentativePersons" className="form-label">How many Tentative Persons planning to attend</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tentativePersons"
                            name="tentativePersons"
                            value={formData.tentativePersons}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row mb-3 categories">
                        <label className="form-label">Categories:</label>
                        {['chairmen', 'director', 'gm', 'manager', 'other'].map((category) => (
                            <div className="col-md-2" key={category}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={category}
                                        name={category}
                                        checked={formData.categories[category]}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="complianceModule" className="form-label">Compliance & Add-on Module</label>
                            <input
                                type="text"
                                className="form-control"
                                id="complianceModule"
                                name="complianceModule"
                                value={formData.complianceModule}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="interestedProduct" className="form-label">Interested Product for Demo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="interestedProduct"
                                name="interestedProduct"
                                value={formData.interestedProduct}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="footer">
                        <label htmlFor="signatory" className="form-label">Authorised Signatory</label>
                        <input
                            type="text"
                            className="form-control"
                            id="signatory"
                            name="signatory"
                            value={formData.signatory}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="text-center mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
