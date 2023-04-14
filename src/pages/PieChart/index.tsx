import { Box } from "@mui/material";
import Header from "components/Header";
import PieComponent from "components/PieChart";

const PieChart = () => {
  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      </Box>

      <Box height="75vh">
        <PieComponent isDashboard={false} />
      </Box>
    </Box>
  );
};

export default PieChart;
