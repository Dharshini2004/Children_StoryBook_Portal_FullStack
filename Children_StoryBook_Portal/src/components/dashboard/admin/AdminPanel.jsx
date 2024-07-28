import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import admindata from './admindata';
import BarChart from "../BarChart";
import Table from "./Table";

const AdminPanel = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <Grid container spacing={3} sx={{marginTop:"100px"}}>
      <Grid item xs={12}>
        <Typography variant="h4">Admin Dashboard</Typography>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">New Visits</Typography>
            <Typography variant="h6">57,820</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Purchases</Typography>
            <Typography variant="h6">$89,745</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Active Users</Typography>
            <Typography variant="h6">178,391</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Returned</Typography>
            <Typography variant="h6">32,592</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Acquisition Channels</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={admindata.acquisition}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {admindata.acquisition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Users by Country</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart/>
              {/* <ComposableMap>
                <Geographies geography="/path/to/your-geojson-file.json">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography key={geo.rsmKey} geography={geo} />
                    ))
                  }
                </Geographies>
              </ComposableMap> */}
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Table/>
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
