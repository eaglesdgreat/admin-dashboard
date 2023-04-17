import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { tokens } from "theme";
import { MenuOutlined } from "@mui/icons-material";
import { ListItem } from "types";
import Item from "scenes/Sidebar/components/Item";
import { listItem } from "scenes/Sidebar/components/sidebarList";
import "styles/scenes/sidebar/index.css";
import { useLocation } from "react-router-dom";


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar } = useProSidebar();
  const location = useLocation();
  
  const currentLocation = listItem.find((current: ListItem) => location.pathname === current.to) as ListItem;

  const [isCollapse, setIsCollapse] = useState(false);
  const [selected, setSelected] = useState<string>(currentLocation.title)

  return (
    <Box height="100vh">
      <ProSidebar
        style={{ height: "100%" }}
        backgroundColor={`${colors.primary[400]} !important`}
      >
        <Menu>
          <MenuItem
            icon={isCollapse ? <MenuOutlined /> : undefined}
            onClick={() => {
              setIsCollapse(!isCollapse)
              collapseSidebar();
            }}
            style={{
              padding: isCollapse ? "10px 0 20px 25%" : 0,
              color: colors.grey[100],
              background: "transparent",
              textAlign: "center"
            }}
          >
            {
              !isCollapse && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding="0 5%"
                >
                  <IconButton>
                    <MenuOutlined />
                  </IconButton>
                  {" "}
                  <Typography variant="h3" style={{ color: colors.grey[100] }}>
                    Admin
                  </Typography>
                </Box>
              )
            }
          </MenuItem>

          {
            !isCollapse && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    className="profile__user"
                    src={'../../assets/user.png'}
                  />
                </Box>

                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ mt: "10px" }}
                  >
                    Eagles
                  </Typography>

                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Emmanuel
                  </Typography>
                </Box>
              </Box>
            )
          }

          <Box paddingLeft={isCollapse ? undefined : "10%"}>
            {
              listItem.map((itm: ListItem) => (
                <>
                  <Item
                    key={itm.to}
                    title={itm.title}
                    icon={itm.icon}
                    to={itm.to}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  {
                    itm.headText && (
                      <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                      >
                        {itm.headText}
                      </Typography>
                    )
                  }
                </>
              ))
            }
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar;
