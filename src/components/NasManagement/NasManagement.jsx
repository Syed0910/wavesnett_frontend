// NasManagement.jsx - Updated with correct imports and routing
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Nas from "./nas";
import NasConfiguration from "./nasConfiguration";
import Interface from "./interface";
import IpAddress from "./ip-address";
import Firewall from "./firewall";
import Queue from "./queue";
import RouteManagement from "./route";
import DHCPServer from "./dhcpServer";
import HotspotServer from "./hotspotServer";
import HotspotProfile from "./hotspotProfile"; 
import IpPool from "./ip-pool"; 
import PPPOEServer from "./pppoeServer"; 
import PPPOEProfile from "./pppoeProfile";
import Masquerade from "../NasManagement/Masquerade/masquerade";

const NasManagement = () => {
  return (
    <Routes>
      {/* Redirect base /nas-mgmt to /nas-mgmt/config */}
      <Route path="/" element={<Navigate to="/nas-mgmt/config" replace />} />

      {/* NAS Configuration */}
      <Route path="/config" element={<NasConfiguration />} />

      {/* NAS */}
      <Route path="/nas" element={<Nas />} />

      {/* Interface */}
      <Route path="/interface" element={<Interface />} />

      {/* IP Address */}
      <Route path="/ip-address" element={<IpAddress />} />

      {/* Firewall */}
      <Route path="/firewall" element={<Firewall />} />

      {/* Queue */}
      <Route path="/queue" element={<Queue />} />

      {/* Route Management */}
      <Route path="/route" element={<RouteManagement />} />

      {/* DHCP Server */}
      <Route path="/dhcpServer" element={<DHCPServer />} />

      {/* IP Pool */}
      <Route path="/ip-pool" element={<IpPool />} /> {/* ✅ use IpPool here */}

      {/* Hotspot Server */}
      <Route path="/hotspotServer" element={<HotspotServer />} />

      {/* Hotspot Profile */}
      <Route path="/hotspotProfile" element={<HotspotProfile />} />

      {/* PPPoE Server */}
      <Route path="/pppoeServer" element={<PPPOEServer />} /> 

       {/* PPPOE Profile */}
      <Route path="/pppoeProfile" element={<PPPOEProfile />} /> 

      {/* Masquerade */}
      <Route path="/masquerade" element={<Masquerade />} /> 
    </Routes>
  );
};

export default NasManagement;
