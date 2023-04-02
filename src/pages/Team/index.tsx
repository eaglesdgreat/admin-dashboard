import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "theme";
import { mockDataTeam } from "data/mockData";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined
} from "@mui/icons-material";
import { ReactElement } from "react";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columnList: Array<GridColDef> = [
    {field: "id", headerName: "ID"},
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name__column--cell"},
    {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
    {field: "email", headerName: "Email", flex: 1},
    {field: "phone", headerName: "Phone No", flex: 1},
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }): ReactElement => {
       return (
        <Box
          width="60%"
          p="5px"
          display="flex"
          justifyContent="center"
          style={{
            background: access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700] 
          }}
          borderRadius="4px"
        >
          { access === "admin" && <AdminPanelSettingsOutlined />}
          { access === "manager" && <SecurityOutlined />}
          { access === "user" && <LockOpenOutlined />}
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {access}
          </Typography>
        </Box>
       )
      }
    },
  ]

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="MANAGE TEAM"
          subTitle="Managing the Team members"
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="100vh"
        sx={{ 
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name__column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            background: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MUiDataGrid-virtualScroller": {
            background: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            background: colors.blueAccent[700],
            borderTop: "none",
          },
        }}
      >
        <DataGrid
         rows={mockDataTeam}
         columns={columnList}
        />
      </Box>
    </Box>
  )
}

export default Team;
