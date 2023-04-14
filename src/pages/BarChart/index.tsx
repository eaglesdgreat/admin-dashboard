import { Box } from "@mui/material";
import Header from "components/Header";
import BarComponent from "components/BarChart";

const BarChart = () => {
  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      </Box>

      <Box height="75vh">
        <BarComponent isDashboard={false} />
      </Box>
    </Box>
  );
};

export default BarChart;
