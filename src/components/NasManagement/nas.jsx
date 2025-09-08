// src/components/nas/Nas.jsx
import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import DataTable from "../ui/datatable";

const Nas = () => {
  const [nasList, setNasList] = useState([
    {
      id: 1,
      name: "NAS_1",
      ip: "10.10.1.1",
      type: "Mikrotik",
      zone: "All",
    },
  ]);

  const handleEdit = (nas) => {
    console.log("Edit NAS:", nas);
  };

  const handleDelete = (nas) => {
    setNasList(nasList.filter((item) => item.id !== nas.id));
  };

  const handleAddNas = () => {
    alert("Add new NAS clicked");
  };

  // Columns for NAS table
  const columns = [
    { key: "name", label: "NAS Name" },
    { key: "ip", label: "IP Address" },
    { key: "type", label: "Type" },
    { key: "zone", label: "Zone" },
   
  ];

  // Toolbar (like Users page)
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleAddNas}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6">
      <DataTable
        title="NAS"
        data={nasList}
        columns={columns}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
      />
    </div>
  );
};

export default Nas;
