import { Box } from "@mui/material";
import Header from "components/Header";
import LineComponent from "components/LineChart";

const LineChart = () => {
  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Line Chart" subTitle="Simple Line Chart" />
      </Box>

      <Box height="75vh">
        <LineComponent isDashboard={false} />
      </Box>
    </Box>
  );
};

export default LineChart;
