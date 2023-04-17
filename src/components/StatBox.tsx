import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "theme";
import { FC } from "react";
import ProgressCircle from "./ProgressCircle";
import { IStatBoxProps } from "types";


const StatBox: FC<IStatBoxProps> = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column" gap="5px">
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: `${colors.grey[100]}` }}
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: `${colors.greenAccent[500]}` }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="5px">
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: `${colors.greenAccent[600]}` }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StatBox;
