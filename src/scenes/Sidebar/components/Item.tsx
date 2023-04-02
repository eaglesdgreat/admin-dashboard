import { IMenuItemProps } from "types";
import { FC, ReactElement } from "react";
import { MenuItem } from "react-pro-sidebar";
import { useTheme } from '@mui/material/styles';
import { tokens } from "theme";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Item: FC<IMenuItemProps> = ({title, to, icon, selected, setSelected}): ReactElement => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "" : colors.grey[100],
        background: "transparent",
      }}
      className={"pro__side--bar"+(selected === title ? " active" : "")}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>
        {title}
      </Typography>
    </MenuItem>
  )
}

export default Item;
