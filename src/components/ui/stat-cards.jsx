import React from "react";
import { Clock, Package, Activity } from "lucide-react"; // Icons (you can change)


const StatCards = () => {
  const stats = [
    {
      id: 1,
      label: "Open",
      value: 1,
      color: "bg-red-700",
      icon: <Clock className="w-8 h-8 text-red-700" />,
    },
    {
      id: 2,
      label: "Pending",
      value: 0,
      color: "bg-orange-500",
      icon: <Package className="w-8 h-8 text-orange-500" />,
    },
    {
      id: 3,
      label: "In Progress",
      value: 0,
      color: "bg-blue-600",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="flex gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex w-134 h-24 rounded shadow overflow-hidden"
        >
          {/* Left white icon box */}
          <div className="flex items-center justify-center w-1/2 bg-white">
            {stat.icon}
          </div>

          {/* Right colored value box */}
          <div
            className={`flex flex-col justify-center items-start w-1/2 px-3 text-white ${stat.color}`}
          >
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
