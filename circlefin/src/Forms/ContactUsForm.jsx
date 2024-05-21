import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        inquiryType: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    }

    return (
        <form className="mt-8" onSubmit={handleSubmit}>
            <div className=" gap-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-[25rem] px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-semibold">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-[25rem] px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber" className="block text-lg font-semibold">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-[25rem] px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
                    />
                </div>
                <div>
                    <label htmlFor="inquiryType" className="block text-lg font-semibold">Type of Inquiry</label>
                    <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-[25rem] px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
                    >
                        <option value="">Select an option</option>
                        <option value="general">General</option>
                        <option value="investor">Prospective Investor</option>
                        <option value="borrower">Prospective Borrower</option>
                        <option value="complaint">Complaint</option>
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <label htmlFor="message" className="block text-lg font-semibold">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-[25rem] px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
                ></textarea>
            </div>
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-[25rem] px-6 py-3 text-lg font-semibold text-white bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactUsForm;
