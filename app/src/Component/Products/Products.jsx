import { Box, Divider, Typography } from "@mui/material";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import ProductList from "./ProductList";


const Products = () => {
    return (
        <div>
            <Navbar />
            <Box height={45}/>
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box sx={{width: "100%", margin : "20px", marginTop: "40px"}}>
                    <ProductList />
                </Box>
            </Box>
        </div>
    )
}

export default Products;