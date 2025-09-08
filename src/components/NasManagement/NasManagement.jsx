import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Nas from "./nas";
import NasConfiguration from "./nasConfiguration";

const NasManagement = () => {
  return (
    <Routes>
      {/* Redirect base /nas to /nas/list */}
      <Route path="/" element={<Navigate to="/nas-mgmt/config" replace />} />
      
      {/* NAS Configuration */}
      <Route path="/config" element={<NasConfiguration />} />

      {/* NAS List */}
      <Route path="/nas" element={<Nas />} />

      

      {/* Future routes */}
      <Route path="/interface" element={<div>Interface Settings Coming Soon...</div>} />
      <Route path="/ip-address" element={<div>IP Address Settings Coming Soon...</div>} />
      <Route path="/firewall" element={<div>Firewall Settings Coming Soon...</div>} />
      <Route path="/queue" element={<div>Queue Config Coming Soon...</div>} />
      <Route path="/route" element={<div>Route Config Coming Soon...</div>} />
      <Route path="/dhcp-server" element={<div>DHCP Server Settings...</div>} />
      <Route path="/ip-pool" element={<div>IP Pool Settings...</div>} />
      <Route path="/hotspot-server" element={<div>Hotspot Server Settings...</div>} />
      <Route path="/hotspot-profile" element={<div>Hotspot Profile Settings...</div>} />
      <Route path="/pppoe-server" element={<div>PPPoE Server Settings...</div>} />
      <Route path="/pppoe-profile" element={<div>PPPoE Profile Settings...</div>} />
      <Route path="/masquerade" element={<div>Masquerade Settings...</div>} />
    </Routes>
  );
};

export default NasManagement;
