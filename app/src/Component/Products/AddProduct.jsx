import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
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
import { db } from '../../firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { setRows } from '../../store/actions';

const currencies = [
    {
        value: 'Mobile',
        label: 'Mobile',
    },
    {
        value: 'Laptop',
        label: 'Laptop',
    },
    {
        value: 'Electronics',
        label: 'Electronics',
    },
    {
        value: 'Wehicle',
        label: 'Wehicle',
    },
];

const AddProduct = ({ closeEvent }) => {
    // redux state management
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    // const [rows, setRows] = useState([]);

    // handle onchange property of these three states.

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    // firebase operations
    const empCollectionRef = collection(db, "products");

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        const userData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        dispatch(setRows(userData));
    }

    const handleSubmit = () => {
        const formData = {
            name: name,
            price: price,
            category: category,
            date: String(new Date())
        }

        addProduct(formData);
    }
    const addProduct = async (formData)=>{
        await addDoc(empCollectionRef, formData);
        closeEvent();
        Swal.fire("Added", "Record has been added", "success");
        getUsers();
    }
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h6">Add Product</Typography>
                <IconButton sx={{ position: "absolute", top: "0px", right: "0px", color: "red" }} onClick={closeEvent}>
                    <CloseIcon size="small" />
                </IconButton>
            </Box>
            <Grid container mt={2}>
                <Grid Item xs={12} mt={2} mb={2}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth size="small" value={name} onChange={handleNameChange} />
                </Grid>
                <Grid Item xs={5.5} mr={3.4}>
                    <TextField type="number" id="outlined-basic" label="Price" variant="outlined" size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={price} onChange={handlePriceChange} />
                </Grid>
                <Grid Item xs={5.5}>
                    <TextField select id="outlined-basic" label="Category" variant="outlined" size="small" fullWidth value={category} onChange={handleCategoryChange}>
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid Item xs={12} mt={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Button variant='contained' type='submit' onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddProduct;