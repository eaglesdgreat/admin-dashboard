import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "theme";
import { mockDataInvoices } from "data/mockData";
import { ReactElement } from "react";


const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columnList: Array<GridColDef> = [
    {field: "id", headerName: "ID"},
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name__column--cell"},
    {field: "email", headerName: "Email", flex: 1},
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row: { cost } }): ReactElement => (
        <Typography color={colors.greenAccent[500]}>
          ${cost}
        </Typography>
      )
    },
    {field: "phone", headerName: "Phone No", flex: 1},
    {field: "date", headerName: "Date", flex: 1},
  ]

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Invoice Balances"
          subTitle="Lists of Invoice Balances"
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columnList}
        />
      </Box>
    </Box>
  )
}

export default Invoices;
