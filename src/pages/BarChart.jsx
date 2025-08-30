import * as React from "react";
import { BarChart } from "@mui/x-charts";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";

// 🔹 Reusable Dashboard Card
function DashboardCard({
  title,
  subtitle,
  value,
  chartData,
  showViewButton = false,
  color = "#1976d2", // default blue
}) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        width: 320,
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        {showViewButton && (
          <Button size="small" variant="outlined">
            VIEW
          </Button>
        )}
      </Box>

      {/* Subtitle + Value */}
      <Box>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {value}
        </Typography>
      </Box>

      {/* Chart */}
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
    </Card>
  );
}

// 🔹 Dashboard Grid with All Cards
export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      {/* Row 1 */}
      <Grid item>
        <DashboardCard
          title="Online Users"
          subtitle="Total Users: 92"
          value="85 Online / 7 Offline"
          chartData={null} // no chart for this one in screenshot
        />
      </Grid>
      <Grid item>
        <DashboardCard
          title="Active Users"
          subtitle="Total Users: 92"
          value="88 Active / 1 Suspend / 3 Expired"
          chartData={null}
        />
      </Grid>
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

      {/* Row 2 */}
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
          chartData={{
            labels: ["W1", "W2", "W3", "W4"],
            values: [5, 9, 13, 22],
          }}
          showViewButton
        />
      </Grid>
      <Grid item>
        <DashboardCard
          title="Invoice Yearly"
          subtitle="Today"
          value="₹0.00"
          chartData={{
            labels: ["Q1", "Q2", "Q3", "Q4"],
            values: [1, 5, 8, 12],
          }}
          showViewButton
        />
      </Grid>
      <Grid item>
        <DashboardCard
          title="Invoice Monthly"
          subtitle="Total"
          value="₹63,494.00"
          chartData={{
            labels: ["W1", "W2", "W3", "W4"],
            values: [7, 12, 20, 18],
          }}
          showViewButton
        />
      </Grid>

      {/* Row 3 */}
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
          color="#3ee535ff" // red for complaints
        />
      </Grid>
    </Grid>
  );
}
