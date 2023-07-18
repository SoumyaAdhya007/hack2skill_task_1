import "./App.css";
import { useState, useEffect } from "react";

import getListData from "./service/api";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
const TableCont = styled(TableContainer)`
  width: 98%;
  margin: auto;
`;
const TableBox = styled(Table)`
  width: 100%;
  background-color: #2675ff;
`;
const TableHeadCell = styled(TableCell)`
  color: #fff;
  font-weight: bold;
`;
const TableBodyCell = styled(TableCell)`
  color: #fff;
  font-weight: bold;
`;
const TableBodyRow = styled(TableRow)`
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#5e3b5a" : "#1e231d"};
`;
const FetchBox = styled(Box)`
  width: 10%;
  margin: 50px auto;
`;
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const fetchData = async () => {
    setLoading(false);
    const data = await getListData();
    setData(data);
    setLoading(true);
  };

  return (
    <>
      <FetchBox>
        <Button onClick={() => fetchData()} variant="contained">
          Show List
        </Button>
      </FetchBox>
      <TableCont>
        <TableBox>
          <TableHead>
            <TableRow>
              <TableHeadCell>SN</TableHeadCell>
              <TableHeadCell>Team Name</TableHeadCell>
              <TableHeadCell>Full Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Number</TableHeadCell>
              <TableHeadCell>City</TableHeadCell>
              <TableHeadCell> URL </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading === true ? (
              data.map((item, i) => (
                <TableBodyRow
                  key={i}
                  index={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableBodyCell component="th" scope="row">
                    {item.Team_name}
                  </TableBodyCell>
                  <TableBodyCell align="right">{item.full_name}</TableBodyCell>
                  <TableBodyCell align="right">{item.email}</TableBodyCell>
                  <TableBodyCell align="right">{item.number}</TableBodyCell>
                  <TableBodyCell align="right">{item.city}</TableBodyCell>
                  <TableBodyCell align="right">{item.url}</TableBodyCell>
                </TableBodyRow>
              ))
            ) : loading === false ? (
              <p>Loading...</p>
            ) : null}
          </TableBody>
        </TableBox>
      </TableCont>
    </>
  );
}

export default App;
