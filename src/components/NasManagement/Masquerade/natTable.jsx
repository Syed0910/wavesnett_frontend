// src/components/Masquerade/natTable.jsx
import DataTable from "../../ui/datatable";

const NatTable = ({ onEdit, onDelete, onView }) => {
  const columns = [
    { key: "chain", label: "Chain" },
    { key: "action", label: "Actions" },
    { key: "dstAddress", label: "Destination Address" },
    { key: "srcAddressList", label: "Source AddressList" },
    { key: "packets", label: "Packets" },
    { key: "disabled", label: "Disabled", render: (v) => (v ? "true" : "false") },
    { key: "comment", label: "Comment" },
  ];

  const sampleData = [
    { id: 1, chain: "srcnat", action: "src-nat", dstAddress: "", srcAddressList: "", packets: "229.95MB", disabled: false, comment: "" },
    { id: 2, chain: "srcnat", action: "masquerade", dstAddress: "", srcAddressList: "", packets: "0Bps", disabled: true, comment: "" },
    { id: 3, chain: "srcnat", action: "masquerade", dstAddress: "", srcAddressList: "", packets: "0Bps", disabled: false, comment: "" },
    { id: 4, chain: "srcnat", action: "masquerade", dstAddress: "", srcAddressList: "", packets: "28.53KB", disabled: false, comment: "" },
    { id: 5, chain: "srcnat", action: "masquerade", dstAddress: "", srcAddressList: "", packets: "0Bps", disabled: false, comment: "" },
    { id: 6, chain: "srcnat", action: "masquerade", dstAddress: "", srcAddressList: "masquerade_pool", packets: "143.29KB", disabled: false, comment: "" },
    { id: 7, chain: "srcnat", action: "masquerade", dstAddress: "", srcAddressList: "expired_pool", packets: "582Bytes", disabled: false, comment: "expired" },
  ];

  return (
    <DataTable
      title="NAT Rules"
      data={sampleData}
      columns={columns}
      onEdit={onEdit}
      onDelete={onDelete}
      onView={onView}
      showSelection={false}
      pageSize={10}
      searchPlaceholder="Search NAT rules..."
    />
  );
};

export default NatTable;
