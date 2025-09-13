import React, { useState } from "react";
import { X } from "lucide-react";

const NasConfiguration = () => {
  const [selectedNas, setSelectedNas] = useState("NAS_1 [10.10.1.1]");
  const [services, setServices] = useState([
    { name: "Telnet", port: 23, enabled: true },
    { name: "Ftp", port: 21, enabled: true },
    { name: "www", port: 80, enabled: true },
    { name: "ssh", port: 22, enabled: true },
    { name: "www-ssl", port: 443, enabled: true },
    { name: "api", port: 8728, enabled: true },
    { name: "Winbox", port: 8291, enabled: true },
    { name: "api_ssl", port: 8729, enabled: true },
  ]);

  const removeService = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  const handlePortChange = (index, value) => {
    const updated = [...services];
    updated[index].port = value;
    setServices(updated);
  };

  const handleApply = () => {
    console.log("Applied NAS Config:", { selectedNas, services });
    alert("Configuration Applied!");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Nas Configuration</h2>
        <select
          value={selectedNas}
          onChange={(e) => setSelectedNas(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option>NAS_1 [10.10.1.1]</option>
          <option>NAS_2 [10.10.1.2]</option>
        </select>
      </div>

        <div className="mb-4 text-lg font-semibold" >
            <h3>IP Service</h3>
        </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 w-60 gap-4">
        {services.map((srv, i) => (
          <div
            key={i}
            className="relative border border-sky-400 rounded-md px-2 py-3"
          >
            {/* Floating label */}
            <label className="absolute -top-2 left-3 bg-white px-1 text-sky-500 text-sm">
              {srv.name}
            </label>

            {/* Input and Remove Button */}
            <div className="flex items-center ">
              <input
                type="number"
                value={srv.port}
                onChange={(e) => handlePortChange(i, e.target.value)}
                className="flex-1 outline-none text-gray-700 text-lg bg-transparent w-40"
              />
              <button
                onClick={() => removeService(i)}
                className="text-sky-500 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Apply button */}
      <button
        onClick={handleApply}
        className="mt-6 px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
      >
        APPLY
      </button>
    </div>
  );
};

export default NasConfiguration;
