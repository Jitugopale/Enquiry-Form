import React, { useState } from 'react';
import axios from 'axios';

const DemoRequestForm = () => {
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
        complianceModule: '',
        interestedProduct: ''
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
            const response = await axios.post('/send-email', formData, {
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

export default DemoRequestForm;
