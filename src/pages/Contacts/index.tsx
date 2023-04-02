import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "components/Header";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "theme";
import { mockDataContacts } from "data/mockData";


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columnList: Array<GridColDef> = [
    {field: "id", headerName: "ID", flex: 0.5},
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name__column--cell"},
    {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
    {field: "email", headerName: "Email", flex: 1},
    {field: "phone", headerName: "Phone", flex: 1},
    {field: "address", headerName: "Address", flex: 1},
    {field: "city", headerName: "City", flex: 1},
    {field: "zipCode", headerName: "Zip Code", flex: 1},
    {field: "registrarId", headerName: "Registrar ID", flex: 1},
  ]

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="CONTACTS INFORMATION"
          subTitle="Lists of contacts for future reference"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
         rows={mockDataContacts}
         columns={columnList}
         components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts;
