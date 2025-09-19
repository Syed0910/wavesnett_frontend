import React, { useState } from "react";
import {useNavigate} from "react-router-dom";


const NewVoucher = () => {
  
  const navigate = useNavigate();

  const [zone, setZone] = useState("admin");
  const [plan, setPlan] = useState("");
  const [voucherCount, setVoucherCount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Zone:", zone, "Plan:", plan, "No. of Voucher:", voucherCount);
   
  };

  return (
    <div className="w-full h-screen bg-white p-6 pt-0">
      <h2 className="text-xl font-semibold mb-4">New Voucher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Zone */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Zone</label>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="admin">admin</option>
            <option value="zone1">Bharat</option>
            
          </select>
        </div>

        {/* Plan */}
        <div>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Select Plan</option>
            <option value="plan1">Plan 1</option>
            <option value="plan2">Plan 2</option>
          </select>
        </div>

        {/* No. of Voucher */}
        <div>
          <input
            type="number"
            placeholder="No. of Voucher"
            value={voucherCount}
            onChange={(e) => setVoucherCount(e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-1 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={() => navigate("/vouchers")}
            className="px-4 py-1 border rounded-md hover:bg-gray-100"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewVoucher;
