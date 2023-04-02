import { Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { tokens } from "theme";
import { IHeaderProps } from "types";
import { FC } from "react";


const Header: FC<IHeaderProps> = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
      >
        {subTitle}
      </Typography>
    </Box>
  )
}

export default Header;
