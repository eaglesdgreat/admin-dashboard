import TopBar from 'scenes/TopBar';
import Sidebar from 'scenes/Sidebar';
import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <TopBar />

        <Box p={2}>
          <Outlet />
        </Box>
      </main>
    </div>
  );
}

export default App;
