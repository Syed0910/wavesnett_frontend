import React, { useState } from "react";

const CreateBulkUser = () => {
  const [zone, setZone] = useState("admin");
  const [simultaneousUse, setSimultaneousUse] = useState("1");
  const [lot, setLot] = useState("");
  const [userCount, setUserCount] = useState("");
  const [plan, setPlan] = useState("");
  const [usernamePrefix, setUsernamePrefix] = useState("");
  const [usernameLength, setUsernameLength] = useState("5");
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [registrationNotRequired, setRegistrationNotRequired] = useState(false);
  const [usernameType, setUsernameType] = useState("numeric");
  const [expiryDate, setExpiryDate] = useState("2025-09-19");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      zone,
      simultaneousUse,
      lot,
      userCount,
      plan,
      usernameType,
      usernamePrefix,
      usernameLength,
      passwordRequired,
      registrationNotRequired,
      expiryDate,
    });
  };

  const handleCancel = () => {
    // reset form
    setLot("");
    setUserCount("");
    setPlan("");
    setUsernamePrefix("");
    setUsernameLength("5");
    setPasswordRequired(false);
    setRegistrationNotRequired(false);
    setUsernameType("numeric");
    setExpiryDate("2025-09-19");
  };

  return (
    <div className="max-w-5xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Create Bulk User
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Zone */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Zone</label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
            >
              <option value="admin">admin</option>
              <option value="zone1">Zone 1</option>
              <option value="zone2">Zone 2</option>
            </select>
          </div>

          {/* Simultaneous Use */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Simultaneous Use
            </label>
            <input
              type="number"
              value={simultaneousUse}
              onChange={(e) => setSimultaneousUse(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Lot"
            value={lot}
            onChange={(e) => setLot(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
          />
          <div className="flex items-center gap-4">
            <label className="text-gray-600 text-sm">
              User name password character
            </label>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="numeric"
                name="usernameType"
                value="numeric"
                checked={usernameType === "numeric"}
                onChange={(e) => setUsernameType(e.target.value)}
              />
              <label htmlFor="numeric">Numeric</label>

              <input
                type="radio"
                id="alphanumeric"
                name="usernameType"
                value="alphanumeric"
                checked={usernameType === "alphanumeric"}
                onChange={(e) => setUsernameType(e.target.value)}
              />
              <label htmlFor="alphanumeric">Alphanumeric</label>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="No. of Users"
            value={userCount}
            onChange={(e) => setUserCount(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="Username Prefix"
            value={usernamePrefix}
            onChange={(e) => setUsernamePrefix(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Select Plan</option>
            <option value="plan1">Plan 1</option>
            <option value="plan2">Plan 2</option>
          </select>

          <input
            type="number"
            placeholder="Username Length"
            value={usernameLength}
            onChange={(e) => setUsernameLength(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400"
          />

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={passwordRequired}
                onChange={(e) => setPasswordRequired(e.target.checked)}
              />
              Password Required
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={registrationNotRequired}
                onChange={(e) => setRegistrationNotRequired(e.target.checked)}
              />
              User registration not required
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="px-5 py-2 bg-cyan-500 text-white rounded shadow hover:bg-cyan-600 transition-all duration-200"
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-all duration-200"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBulkUser;
