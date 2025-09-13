// src/components/complaints-management/CloseComplaint.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import DataTable from "../ui/datatable";
import { PrimaryButton } from "../ui/button";

const CloseComplaint = ({ showHeader = true }) => {
    // Sample complaints data
    const [complaints] = useState([
        {
            id: 4,
            username: "mazhar",
            creationDate: "2025-07-15 00:22:16",
            type: "Lagging internet",
            zone: "admin",
        },
        {
            id: 1,
            username: "qazi",
            creationDate: "2025-05-28 05:13:47",
            type: "Internet Not Working",
            zone: "admin",
        },
    ]);

    // Define table columns
    const columns = [
        {
            key: "id",
            label: "Id",
        },
        {
            key: "username",
            label: "User name",
            render: (value) => (
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                    {value}
                </span>
            ),
        },
        {
            key: "creationDate",
            label: "Creation Date",
            type: "date",
        },
        {
            key: "type",
            label: "Type",
        },
        {
            key: "zone",
            label: "Zone",
        },
    ];

    // Action handlers
    const handleView = (complaint, index) => {
        console.log("View complaint:", complaint);
        // navigate to details or modal
    };

    const handleDelete = (complaint, index) => {
        console.log("Delete complaint:", complaint);
        if (window.confirm(`Are you sure you want to delete complaint "${complaint.id}"?`)) {
            // delete logic
        }
    };

    const handleEdit = (complaint, index) => {
        console.log("Edit complaint:", complaint);
        // edit logic
    };

    const handleAddComplaint = () => {
        console.log("Adding new complaint...");
        // navigate or modal open
    };

    // Toolbar actions
    const toolbar = (
        <>
            <PrimaryButton
                icon={<Plus className="w-4 h-4" />}
                onClick={handleAddComplaint}
                tooltip="Add New Complaint"
            >
                New Complaint
            </PrimaryButton>
        </>
    );

    return (
        <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
            {/* Conditional Header - only show when showHeader is true */}
            {showHeader && (
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium mb-1 text-grey-800">
                        Close Complaint
                    </h2>
                </div>
            )}

            <DataTable
                data={complaints}
                columns={columns}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
                showSelection={false}
                toolbar={toolbar}
                pageSize={10}
                headerClassName="font-semibold"
            />
        </div>
    );
};

export default CloseComplaint;