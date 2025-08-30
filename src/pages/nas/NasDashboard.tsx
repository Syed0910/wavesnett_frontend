import React, { useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiThermometer } from '@mdi/js';
import { Power } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const NasDashboard: React.FC = () => {
  // ----------------------
  // TODO: Replace mock state with backend API calls
  // ----------------------
  const [uptime, setUptime] = useState("7h37m8s");
  const [cpu, setCpu] = useState(33);
  const [ram, setRam] = useState(5);
  const [hdd, setHdd] = useState(0);
  const [volt, setVolt] = useState(0);
  const [temp, setTemp] = useState<number | null>(null);
  const [ppp, setPpp] = useState(68);

  // Graph data
  const [graphData, setGraphData] = useState<{ time: number; rx: number; tx: number }[]>([]);

  useEffect(() => {
    // Mock dynamic graph update
    const interval = setInterval(() => {
      setGraphData((prev) => {
        const next = [...prev, { time: Date.now(), rx: Math.random() * 10, tx: Math.random() * 10 }];
        return next.slice(-20); // keep last 20 points
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 md:p-4 lg:p-6 mx-2 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-0">NAS Dashboard</h1>
        <div className="flex items-center justify-end gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition">
            <Power className="w-5 h-5 text-red-500" />
          </button>
          <select className="border-b p-2 shadow-sm rounded bg-white focus:outline-none">
            <option>NAS_1 [10.10.1.1]</option>
            {/* <option>NAS_2 [...]</option> */}
          </select>
        </div>
      </div>
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Graph Card */}
        <div className="bg-white rounded-xl shadow p-4 w-[] col-span-1 lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">
              x86 VMware, Inc. VMware Virtual Platform{" "}
              <span className="text-gray-500">7.19.4 (stable)</span>
            </p>
            <span className="text-sm font-medium text-blue-500 cursor-pointer select-none flex items-center">
              ether5 <span className="ml-1">✏️</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-2">{uptime}</p>
          <div className="w-auto h-[210px] sm:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graphData}>
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
        <div className="flex flex-nowrap lg:flex-wrap xl:flex-nowrap gap-4 w-full max-w-xl">

  <div className="flex flex-row w-1/2 min-w-[160px] h-16 shadow rounded overflow-hidden bg-white">
    <div className="flex items-center justify-center w-1/3 bg-white">
   
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    </div>
    <div className="flex flex-col items-start justify-center w-2/3 bg-red-500 text-white pl-3 py-2">
      <span className="text-sm font-semibold leading-tight">0V</span>
      <span className="text-xs font-normal leading-tight">Volt</span>
    </div>
  </div>

  <div className="flex flex-row w-1/2 min-w-[160px] h-16 shadow rounded overflow-hidden bg-white">
    <div className="flex items-center justify-center w-1/3 bg-white">
    
     <Icon 
      path={mdiThermometer}
      size={2} // Corresponds to the 56px size you had (2.5 * 1rem, assuming 1rem = 16px)
      color="#2b7fff" // You might need to use a CSS class for color or a hex code
      className="my-custom-icon"
    />
    </div>
    <div className="flex flex-col items-start justify-center w-2/3 bg-blue-500 text-white pl-3 py-2">
      <span className="text-sm font-semibold leading-tight">undefined°C</span>
      <span className="text-xs font-normal leading-tight">temp</span>
    </div>
  </div>
        </div>

      </div>
      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 md:mt-6">
        {/* System Usage */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <p className="text-sm mb-2 font-medium">System Usage</p>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            {/* Circle background */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="50"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="transparent"
              />
              <circle
                cx="56"
                cy="56"
                r="50"
                stroke="#8b5cf6"
                strokeWidth="12"
                strokeDasharray={`${cpu * 3.14},314`}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-xs">
              <p>CPU - {cpu}%</p>
              <p>RAM - {ram}%</p>
              <p>HDD - {hdd}%</p>
            </div>
          </div>
        </div>
        {/* PPP / Hotspot Circle */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm font-medium mb-2">Hotspot</p>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
            <svg className="w-full h-full">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#10b981"
                strokeWidth="20"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-55%] text-center">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold">{ppp}</p>
              <p className="text-sm text-gray-600">PPP {ppp}</p>
            </div>
          </div>
        </div>
        {/* (OPTIONAL THIRD CARD SLOT for future expansion) */}
        <div></div>
      </div>
    </div>
  );
};

export default NasDashboard;
