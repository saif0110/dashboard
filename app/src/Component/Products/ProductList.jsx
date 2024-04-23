import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Autocomplete, Button, Divider, Stack, TextField, Typography, Box } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { db } from '../../firebase-config';
import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import Modal from '@mui/material/Modal';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { useDispatch, useSelector } from 'react-redux';
import { setRows } from '../../store/actions';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function ProductList() {
    const rows = useSelector(state => state.rows);
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // Add product popupstates
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    // set user data
    const [userData, setUserData] = useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    // firebase setup code
    const empCollectionRef = collection(db, "products");

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        const userData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        dispatch(setRows(userData));
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "Warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                deleteApi(id)
            }
        })
    }
    const deleteApi = async (id) => {
        const userDoc = doc(db, "products", id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted", "Record has been deleted", "success");
        getUsers();
    }
    const filterData = (v) => {
        if (v) {
            dispatch(setRows([v]));
        } else {
            getUsers();
        }
    }

    // handle edit user logic here
    const editUser = (id, name, price, category) => {
        const data = {
            id: id,
            name: name,
            price: price,
            category: category,
        }
        handleEditOpen();
        setUserData(data)
    }

    return (
        <>
            <div>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AddProduct closeEvent={handleClose} />
                    </Box>
                </Modal>
                <Modal
                    open={editOpen}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <EditProduct closeEvent={handleEditClose} user={userData} />
                    </Box>
                </Modal>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Typography gutterBottom variant='h6' sx={{ paddingg: "12px" }}>ProductList: </Typography>
                <Divider />
                <Stack direction="row" spacing={2} mt={2} mb={2}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        sx={{ width: 300 }}
                        onChange={(e, v) => filterData(v)}
                        getOptionLabel={(rows) => rows.name || ""}
                        renderInput={(params) => <TextField {...params} size="small" label="Search Products" />}
                    />
                    <Typography variant='h6' sx={{ flexGrow: 1 }}></Typography>
                    <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>Add Product</Button>
                </Stack>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align="left"
                                    style={{ minWidth: "100px", fontWeight: "600" }}
                                >
                                    Name
                                </TableCell>
                                <TableCell
                                    align="left"
                                    style={{ minWidth: "100px", fontWeight: "600" }}
                                >
                                    Price
                                </TableCell>
                                <TableCell
                                    align="left"
                                    style={{ minWidth: "100px", fontWeight: "600" }}
                                >
                                    Category
                                </TableCell>
                                <TableCell
                                    align="left"
                                    style={{ minWidth: "100px", fontWeight: "600" }}
                                >
                                    Date
                                </TableCell>
                                <TableCell
                                    align="left"
                                    style={{ minWidth: "100px", fontWeight: "600" }}
                                >
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell key={rows.id} align="left">
                                                {row.name}
                                            </TableCell>
                                            <TableCell key={rows.id} align="left">
                                                {row.price}
                                            </TableCell>
                                            <TableCell key={rows.id} align="left">
                                                {row.category}
                                            </TableCell>
                                            <TableCell key={rows.id} align="left">
                                                {row.date}
                                            </TableCell>
                                            <TableCell key={rows.id} align="left">
                                                {/* place here edit icon and delete icon */}
                                                <Stack direction="row" spacing={2}>
                                                    <EditIcon
                                                        sx={{
                                                            color: "blue",
                                                            fontSize: "20px",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={() => { editUser(row.id, row.name, row.price, row.category) }}
                                                    />
                                                    <DeleteIcon
                                                        sx={{
                                                            color: "red",
                                                            fontSize: "20px",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={() => { deleteUser(row.id) }}
                                                    />
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}