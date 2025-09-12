import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/VpnKey";

const ChangePassword = () => {
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrent: false,
    showNew: false,
    showConfirm: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit change password logic here
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        mt: 2,
        boxShadow: 2,
        borderRadius: 2,
        bgcolor: "#fff",
      }}
    >
      <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
        Change Password
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type={values.showCurrent ? "text" : "password"}
          label="Current Password"
          variant="outlined"
          value={values.currentPassword}
          onChange={handleChange("currentPassword")}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword("showCurrent")}
                  edge="end"
                  size="large"
                >
                  <KeyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          type={values.showNew ? "text" : "password"}
          label="New Password"
          variant="outlined"
          value={values.newPassword}
          onChange={handleChange("newPassword")}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword("showNew")}
                  edge="end"
                  size="large"
                >
                  <KeyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          type={values.showConfirm ? "text" : "password"}
          label="Confirm New Password"
          variant="outlined"
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword("showConfirm")}
                  edge="end"
                  size="large"
                >
                  {values.showConfirm ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "#00bcd4", color: "#fff" }}
          >
            SUBMIT
          </Button>
          <Button type="button" variant="outlined">
            CANCEL
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ChangePassword;
