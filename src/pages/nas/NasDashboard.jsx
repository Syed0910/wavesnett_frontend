import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import { mdiThermometer } from "@mdi/js";
import { Power } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -80 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, y: -40, transition: { type: "spring", duration: 0.4 } },
};

const toastVariants = {
  hidden: { y: -50, opacity: 0, scale: 0.85 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", duration: 0.4 } },
  exit: { y: -50, opacity: 0, scale: 0.85, transition: { type: "spring", duration: 0.3 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.24, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const NasDashboard = () => {
  // Mock states
  const [uptime, setUptime] = useState("7h37m8s");
  const [cpu, setCpu] = useState(33);
  const [ram, setRam] = useState(55);
  const [hdd, setHdd] = useState(80);
  const [volt, setVolt] = useState(0);
  const [temp, setTemp] = useState(null);
  const [ppp, setPpp] = useState(68);

  const [graphData, setGraphData] = useState([]);

  // Modals
  const [isPowerModalOpen, setIsPowerModalOpen] = useState(false);
  const [isInterfaceModalOpen, setIsInterfaceModalOpen] = useState(false);

  // Interface modal state
  const [etherName, setEtherName] = useState("ether5");
  const [selectedInterface, setSelectedInterface] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setGraphData((prev) => {
        const next = [
          ...prev,
          {
            time: Date.now(),
            rx: Math.random() * 10,
            tx: Math.random() * 10,
          },
        ];
        return next.slice(-20);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleInterfaceSubmit = () => {
    if (!selectedInterface) {
      setError("Interface selection is compulsory");
      return;
    }
    setEtherName(selectedInterface);
    setIsInterfaceModalOpen(false);
    setError("");
    setSuccessMessage(`Graph interface changed successfully to ${selectedInterface}`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="p-2 md:p-4 lg:p-6 mx-2 flex flex-col gap-4 relative">
      {/* Success Toast */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-0">
          NAS Dashboard
        </h1>
        <div className="flex items-center justify-end gap-3">
          <button
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition"
            onClick={() => setIsPowerModalOpen(true)}
          >
            <Power className="w-5 h-5 text-red-500" />
          </button>
          <select className="border-b p-2 shadow-sm rounded bg-white focus:outline-none">
            <option>NAS_1 [10.10.1.1]</option>
          </select>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Graph Card */}
        <div className="bg-white rounded-xl shadow p-4 col-span-1 lg:col-span-2 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">
              x86 VMware, Inc. VMware Virtual Platform{" "}
              <span className="text-gray-500">7.19.4 (stable)</span>
            </p>
            <button
              onClick={() => setIsInterfaceModalOpen(true)}
              className="text-sm font-medium text-blue-500 cursor-pointer select-none flex items-center"
            >
              {etherName} <span className="ml-1">✏️</span>
            </button>
          </div>

          {/* Uptime */}
          <p className="text-xs text-gray-500 mb-2">{uptime}</p>

          {/* Responsive Chart */}
          <div className="w-full h-[210px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={graphData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <XAxis dataKey="time" tick={false} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rx" stroke="#0077ff" name="RX" />
                <Line type="monotone" dataKey="tx" stroke="#ff6600" name="TX" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Status Cards */}
        <div className="flex flex-row lg:flex-col xl:flex-row gap-4 w-full max-w-xl">
  {/* Volt Button */}
  <button
    onClick={() => console.log(`${volt}V clicked`)}
    className="flex flex-row w-1/2 min-w-[160px] h-16 shadow rounded overflow-hidden bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
  >
    <div className="flex items-center justify-center w-1/3 bg-white">
      <svg
        className="w-8 h-8 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>
    <div className="flex flex-col items-start justify-center w-2/3 bg-red-500 text-white pl-3 py-2">
      <span className="text-sm font-semibold leading-tight">{volt}V</span>
      <span className="text-xs font-normal leading-tight">Volt</span>
    </div>
  </button>

  {/* Temp Button */}
  <button
    onClick={() => console.log(`${temp}°C clicked`)}
    className="flex flex-row w-1/2 min-w-[160px] h-16 shadow rounded overflow-hidden bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <div className="flex items-center justify-center w-1/3 bg-white">
      <Icon path={mdiThermometer} size={2} color="#2b7fff" />
    </div>
    <div className="flex flex-col items-start justify-center w-2/3 bg-blue-500 text-white pl-3 py-2">
      <span className="text-sm font-semibold leading-tight">
        {temp !== null ? `${temp}°C` : "undefined°C"}
      </span>
      <span className="text-xs font-normal leading-tight">Temp</span>
    </div>
  </button>
</div>

      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 md:mt-6">
        {/* System Usage */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-6 w-full">
          <p className="text-sm font-medium mb-2">System Usage</p>
          {/* CPU */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-medium w-16">CPU</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "34%", backgroundColor: "#7570b3" }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium w-10">34%</span>
          </div>
          {/* RAM */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-medium w-16">RAM</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "5%", backgroundColor: "#d95f02" }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium w-10">5%</span>
          </div>
          {/* HDD */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-medium w-16">HDD</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "0%", backgroundColor: "#1b9e77" }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium w-10">0%</span>
          </div>
        </div>

        {/* PPP / Hotspot Circle */}
        <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center group relative">
          <p class="text-sm font-medium mb-2">Hotspot</p>
          <div class="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
        
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="40" stroke="#10b981" stroke-width="15" fill="transparent"></circle>
            </svg>
            

            <div class="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p class="text-sm text-gray-600">Total</p>
              <p class="text-2xl font-bold">84</p>
              <p class="text-sm text-gray-600">PPP 84</p>
            </div>
            

            <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:flex bg-gray-800 text-white text-xs rounded px-2 py-1 items-center">
              PPP: 84
            <div class="w-2 h-2 bg-gray-800 rotate-45 ml-[-4px]"></div>
            </div>
          </div>
      </div>

        <div></div>
      </div>

      {/* Power Modal */}
      <AnimatePresence>
        {isPowerModalOpen && (
          <>
            {/* Light Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black z-40 pointer-events-none"
           style={{ backgroundColor: "rgba(255, 0, 0, 0.9)" }}
            />
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 top-16 transform -translate-x-1/2 z-50 flex items-start justify-center w-full"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 w-[440px] max-w-xl z-50">
                <h2 className="text-lg font-semibold mb-4">Power Options</h2>
                <div className="flex flex-col gap-2">
                  <button className="w-full py-2 rounded bg-red-500 text-white hover:bg-red-600">
                    Shutdown
                  </button>
                  <button className="w-full py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600">
                    Restart
                  </button>
                  <button
                    className="w-full py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
                    onClick={() => setIsPowerModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Interface Modal */}
      <AnimatePresence>
        {isInterfaceModalOpen && (
          <>
            {/* Light Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black z-40 pointer-events-none"
              style={{ backgroundColor: "rgba(0,0,0,0.10)" }}
            />
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 top-16 transform -translate-x-1/2 z-50 flex items-start justify-center w-full"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 w-[440px] max-w-xl z-50">
                <h2 className="text-lg font-semibold mb-4">Select an Interface</h2>
                <select
                  value={selectedInterface}
                  onChange={(e) => setSelectedInterface(e.target.value)}
                  className="w-full border rounded-lg p-2 mb-2"
                >
                  <option value="">-- Select Interface --</option>
                  <option value="aggregate">Aggregate</option>
                  <option value="ether1">Ether 1</option>
                  <option value="ether2">Ether 2</option>
                  <option value="ether3">Ether 3</option>
                  <option value="ether4">Ether 4</option>
                  <option value="ether5">Ether 5</option>
                </select>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setIsInterfaceModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleInterfaceSubmit}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NasDashboard;
