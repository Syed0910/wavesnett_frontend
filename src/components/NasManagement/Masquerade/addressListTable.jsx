// src/components/Masquerade/addressListTable.jsx
import DataTable from "../../ui/datatable";

const AddressListTable = ({ onEdit, onDelete, onView }) => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "ip", label: "IP" },
  ];

  const sampleData = [
    { id: 1, name: "10.10.10.0/24", ip: "10.10.10.0/24" },
    { id: 2, name: "10.10.50.0/24", ip: "10.10.50.0/24" },
    { id: 3, name: "10.10.20.0/24", ip: "10.10.20.0/24" },
    { id: 4, name: "10.10.30.0/24", ip: "10.10.30.0/24" },
    { id: 5, name: "10.10.40.0/24", ip: "10.10.40.0/24" },
  ];

  return (
    <DataTable
      title="Address List"
      data={sampleData}
      columns={columns}
      onEdit={onEdit}
      onDelete={onDelete}
      onView={onView}
      showSelection={false}
      pageSize={10}
      searchPlaceholder="Search Address List..."
    />
  );
};

export default AddressListTable;
