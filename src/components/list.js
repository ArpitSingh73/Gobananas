import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function List({ data }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "100vh",
        marginTop: "60px",
      }}
    >
      <div style={{ maxWidth: "90%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: "rgb(3, 86, 86)",
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                <TableCell style={{ color: "white", fontWeight: "bolder" }}>
                  Name
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bolder" }}>
                  Email
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bolder" }}>
                  Phone
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bolder" }}>
                  Company
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bolder" }}>
                  City
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    {row.phone}
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    {row.company.name}
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    {row.address.city}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default List;
