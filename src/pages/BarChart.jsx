import * as React from "react";
import { BarChart } from "@mui/x-charts";
import {
  Card,
  Typography,
  Box,
  Button,
  Grid,
  LinearProgress,
} from "@mui/material";

// 🔹 Icons
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

// 🔹 Reusable Dashboard Card with optional Icon
function DashboardCard({
  title,
  subtitle,
  value,
  chartData,
  showViewButton = false,
  color = "#32cbe3", // default cyan
  icon = null,
  progressData = null,
  stats = [],
}) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        width: 350,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header with Icon + Title */}
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        {icon && (
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#00C4CC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
            }}
          >
            {icon}
          </Box>
        )}
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
      </Box>

      {/* Subtitle */}
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}

      {/* Progress Bar (for Online / Active Users) */}
      {progressData && (
        <>
          <LinearProgress
            value={progressData.value}
            variant="determinate"
            sx={{ height: 6, borderRadius: 5, my: 1 }}
            color="info"
          />
          <Typography variant="caption" color="text.secondary">
            {progressData.label}
          </Typography>
        </>
      )}

      {/* Stats Row */}
      {stats.length > 0 && (
        <Grid container mt={2}>
          {stats.map((s, i) => (
            <Grid
              key={i}
              item
              xs={12 / stats.length}
              textAlign="center"
              sx={{ borderRight: i < stats.length - 1 ? "1px solid #eee" : "none" }}
            >
              <Typography variant="h6">{s.value}</Typography>
              <Typography variant="caption" color="text.secondary">
                {s.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Chart (for other cards) */}
      {chartData && (
        <Box mt={1}>
          <BarChart
            xAxis={[{ scaleType: "band", data: chartData.labels }]}
            series={[{ data: chartData.values, color }]}
            width={280}
            height={100}
          />
        </Box>
      )}

      {showViewButton && (
        <Button size="small" variant="outlined" color="info" sx={{ mt: 1 }}>
          VIEW
        </Button>
      )}
    </Card>
  );
}

// 🔹 License Details Card (unchanged)
function LicenseDetailsCard() {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        width: "100%",
        p: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#00C4CC",
              color: "white",
              fontSize: 12,
              textAlign: "center",
              lineHeight: "20px",
            }}
          >
            ⓘ
          </span>
          License Details
        </Typography>

        <Button
          size="small"
          variant="outlined"
          sx={{
            borderRadius: 5,
            borderColor: "#00C4CC",
            color: "#00C4CC",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: 600,
          }}
        >
          RENEW LICENSE!
        </Button>
      </Box>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={6}>
          <Typography variant="body2">User Limit</Typography>
          <LinearProgress
            value={(94 / 1000) * 100}
            variant="determinate"
            sx={{ height: 6, borderRadius: 5, bgcolor: "#e0f2f1" }}
            color="info"
          />
          <Typography variant="caption">94/1000 User</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">Nas Limit</Typography>
          <LinearProgress
            value={100}
            variant="determinate"
            sx={{ height: 6, borderRadius: 5, bgcolor: "#e0f2f1" }}
            color="info"
          />
          <Typography variant="caption">1 NAS</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">Validity</Typography>
          <LinearProgress
            value={(10 / 30) * 100}
            variant="determinate"
            sx={{ height: 6, borderRadius: 5, bgcolor: "#e0f2f1" }}
            color="info"
          />
          <Typography variant="caption">10D 3H / 1 Month</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">OLT Limit</Typography>
          <LinearProgress
            value={0}
            variant="determinate"
            sx={{ height: 6, borderRadius: 5, bgcolor: "#e0f2f1" }}
            color="info"
          />
          <Typography variant="caption">0 OLT</Typography>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography variant="caption" color="text.secondary">
          Expire On 21/09/2025 16:58:27
        </Typography>
      </Box>
    </Card>
  );
}

// 🔹 Dashboard with all cards
export default function MyBarChart() {
  return (
    <div className="flex p-5">
      <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
        {/* Online Users */}
        <Grid item>
          <DashboardCard
            title="Online Users"
            subtitle="Total Users: 94"
            progressData={{ value: 93, label: "93% Online" }}
            icon={<PersonOutlineIcon />}
            stats={[
              { value: 87, label: "Online" },
              { value: 7, label: "Offline" },
            ]}
          />
        </Grid>

        {/* Active Users */}
        <Grid item>
          <DashboardCard
            title="Active Users"
            subtitle="Total Users: 94"
            progressData={{ value: 97, label: "97% Active" }}
            icon={<GroupOutlinedIcon />}
            stats={[
              { value: 91, label: "Active" },
              { value: 1, label: "Suspend" },
              { value: 2, label: "Expired" },
            ]}
          />
        </Grid>

        {/* Other Cards unchanged */}
        <Grid item>
          <DashboardCard
            title="New Connections"
            subtitle="Monthly"
            value="31"
            chartData={{ labels: ["W1", "W2", "W3", "W4"], values: [3, 6, 8, 14] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Renewal"
            subtitle="Monthly"
            value="32"
            chartData={{ labels: ["W1", "W2", "W3", "W4"], values: [2, 5, 9, 16] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Receipt Yearly"
            subtitle="Today"
            value="₹0.00"
            chartData={{ labels: ["Q1", "Q2", "Q3", "Q4"], values: [0, 20, 15, 18] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Receipt Monthly"
            subtitle="Total"
            value="₹50,852.82"
            chartData={{ labels: ["W1", "W2", "W3", "W4"], values: [5, 9, 13, 22] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Invoice Yearly"
            subtitle="Today"
            value="₹0.00"
            chartData={{ labels: ["Q1", "Q2", "Q3", "Q4"], values: [1, 5, 8, 12] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Invoice Monthly"
            subtitle="Total"
            value="₹63,494.00"
            chartData={{ labels: ["W1", "W2", "W3", "W4"], values: [7, 12, 20, 18] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Expiring Users"
            subtitle="Next Week"
            value="1"
            chartData={{ labels: ["Users"], values: [1] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Expired Users"
            subtitle="Last Week"
            value="3"
            chartData={{ labels: ["Users"], values: [3] }}
            showViewButton
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Complaint Status"
            subtitle="Total Open"
            value="1"
            chartData={null}
            color="#e53935"
          />
        </Grid>

        {/* License Details */}
        <Grid item xs={12}>
          <LicenseDetailsCard />
        </Grid>
      </Grid>
    </div>
  );
}
