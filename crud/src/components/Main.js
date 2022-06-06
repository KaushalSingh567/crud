import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import { handleEdit, handleDelete } from "../redux/actions";

export default function Main() {
  const [openEdit, setOpenEdit] = useState(false);
  const [editedValue, setEditedValue] = useState({
    id: "",
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const { rows } = useSelector((store) => store.userReducer);

  const changeValue = (e) => {
    const { name, value } = e.target;
    setEditedValue({
      ...editedValue,
      [name]: value,
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "yellow" }}>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstname}
                </TableCell>
                <TableCell align="right">{row.lastname}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => {
                      setOpenEdit(true);
                      setEditedValue(row);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => dispatch(handleDelete(row.id))}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openEdit ? (
        <div className="editModel">
          <input
            type="text"
            value={editedValue.firstname}
            name="firstname"
            placeholder="enter first name"
            onChange={(e) => changeValue(e)}
          />
          <input
            type="text"
            value={editedValue.lastname}
            name="lastname"
            placeholder="enter last name"
            onChange={(e) => changeValue(e)}
          />
          <input
            type="text"
            value={editedValue.age}
            name="age"
            placeholder="enter age"
            onChange={(e) => changeValue(e)}
          />
          <input
            type="text"
            value={editedValue.gender}
            name="gender"
            placeholder="enter gender"
            onChange={(e) => changeValue(e)}
          />
          <Button
            variant="contained"
            onClick={() => dispatch(handleEdit(editedValue))}
          >
            Edit
          </Button>
        </div>
      ) : null}
    </>
  );
}
