import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewBaseTopupPlan = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        planName: "",
        data: "",
        unit: "MB",
        expDate: ""
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // TODO: Save API call
    };

    return (
        <div className="w-full h-screen bg-white p-6 pt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                New Base Topup Plan
            </h2>
 
            <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
                {/* Plan Name */}
                <input
                    type="text"
                    placeholder="Plan Name"
                    value={formData.planName}
                    onChange={(e) => handleChange("planName", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Data + Unit */}
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Data"
                        value={formData.data}
                        onChange={(e) => handleChange("data", e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={formData.unit}
                        onChange={(e) => handleChange("unit", e.target.value)}
                        className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>MB</option>
                        <option>GB</option>
                    </select>
                </div>

                {/* Exp Date */}
                <DatePicker
                
                    selected={formData.expDate ? new Date(formData.expDate) : null}
                    onChange={(date) => handleChange("expDate", date)}
                    placeholderText="Exp. Date"
                    className="w-200 px-3 py-2 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
                    dateFormat="dd-MM-yyyy"
                />

                {/* Actions */}
                <div className="flex space-x-4 pt-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-cyan-500 text-white rounded-md 
                       hover:bg-cyan-600 transition"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border border-gray-400 rounded-md 
                       hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewBaseTopupPlan;
