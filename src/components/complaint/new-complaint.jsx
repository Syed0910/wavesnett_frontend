// src/components/complaints-management/NewComplaint.jsx
import React from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";

const NewComplaint = () => {
  return (
    <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
      <Typography variant="h6" className="font-semibold mb-4">
       New Complaint
      </Typography>

      {/* Zone */}
      <TextField
        select
        label="Zone"
        fullWidth
        size="small"
        margin="normal"
        value="admin"
      >
        <MenuItem value="admin">admin</MenuItem>
      </TextField>

      {/* User name */}
      <TextField select label="User name" size="small" fullWidth margin="normal" />
       

      {/* Type */}
      <TextField select label="Type" size="small"fullWidth margin="normal">
         <MenuItem value="Enter Type">Internet Not Working</MenuItem>
        <MenuItem value="Enter Type">Lagging internet</MenuItem>
        <MenuItem value="Enter Type">Connectivity issue</MenuItem>
      </TextField>
      

      {/* Assign Operator */}
      <TextField select label="Assign Operator" size="small" fullWidth margin="normal" />

      {/* Resolve Time */}
      <TextField
        select label="Resolve Time"
        fullWidth
        size="small"
        margin="normal"
        
      />

      {/* Date Note */}
      <Typography variant="body2" className="mt-2 fs-2px text-gray-400">
        Date &amp; Time: <b>05 Sept 2025 10:30:30</b>, Time Only: <b>24 Hours</b>
      </Typography>

      {/* Complaint Message */}
      <TextField
        label="Complaint Message"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />

      {/* Buttons */}
      <Box className="flex gap-4 mt-4">
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="inherit">
          Cancel
        </Button>
      </Box>
    </div>
  );
};

export default NewComplaint;