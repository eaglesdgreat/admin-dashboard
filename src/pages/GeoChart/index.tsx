import { Box } from "@mui/material";
import Header from "components/Header";
import GeoComponent from "components/GeoChart";
import { useTheme } from "@mui/material/styles";
import { tokens } from "theme";


const GeoChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Geo Chart" subTitle="Simple Geo Chart" />
      </Box>

      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeoComponent isDashboard={false} />
      </Box>
    </Box>
  );
};

export default GeoChart;
