// src/components/nas/Nas.jsx
import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import DataTable from "../ui/datatable";
import { getNas } from "../../services/api"; // ✅ import API

const Nas = () => {
  const [nasList, setNasList] = useState([]);

  // ✅ Fetch NAS from backend
  useEffect(() => {
    const fetchNas = async () => {
      try {
        const res = await getNas();
        setNasList(res.data);
      } catch (err) {
        console.error("Failed to fetch NAS:", err);
      }
    };
    fetchNas();
  }, []);

  const handleEdit = (nas) => {
    console.log("Edit NAS:", nas);
  };

  const handleDelete = (nas) => {
    setNasList(nasList.filter((item) => item.id !== nas.id));
  };

  const handleAddNas = () => {
    alert("Add new NAS clicked");
  };

  // ✅ Columns must match backend fields
  const columns = [
    { key: "nasName", label: "NAS Name" },
    { key: "nasIp", label: "IP Address" },
    { key: "nasType", label: "Type" },
    { key: "zoneName", label: "Zone" },
  ];

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
