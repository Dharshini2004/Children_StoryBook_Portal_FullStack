import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import UserTable from './UserTable';
import { Box } from '@mui/material';

const dummyData = {
  favoriteGenres: [
    { name: 'Fantasy', value: 400 },
    { name: 'Adventure', value: 300 },
    { name: 'Sci-Fi', value: 300 },
    { name: 'Mystery', value: 200 },
  ],
  readingProgress: [
    { month: 'Jan', pages: 400 },
    { month: 'Feb', pages: 500 },
    { month: 'Mar', pages: 600 },
    { month: 'Apr', pages: 700 },
    { month: 'May', pages: 800 },
    { month: 'Jun', pages: 900 },
  ],
  feed: [
    { avatar: 'https://www.freepik.com/premium-ai-image/copywriter-digital-avatar-generative-ai_65666101.htm#query=png%20avatars&position=31&from_view=keyword&track=ais_user&uuid=47868961-fa21-4671-8e3c-f648820f0a27', name: 'Alice', message: 'Loved the new story about dragons!' },
    { avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg', name: 'Bob', message: 'Finished reading the space adventure series.' },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UserPanel = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">User Dashboard</Typography>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Favorite Genres</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dummyData.favoriteGenres}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dummyData.favoriteGenres.map((entry, index) => (
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
            <Typography variant="h6">Reading Progress</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={dummyData.readingProgress}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pages" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
      <Typography variant="h6" sx={{maxWidth: "60%",
                margin: "0 auto",
                textAlign: "center"}}>
                    Your Bucket List!</Typography>
                    <Box sx={{maxWidth: "60%",
                margin: "0 auto",
                padding: "2rem",
                textAlign: "center"}}>
                        <UserTable />

                    </Box>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">Feed</Typography>
            {dummyData.feed.map((item, index) => (
              <Grid container spacing={2} key={index} alignItems="center">
                <Grid item padding={5}>
                  <Avatar src={item.avatar} />
                </Grid>
                <Grid item padding={5}>
                  <Typography variant="body1"><b>{item.name}</b>: {item.message}</Typography>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default UserPanel;
