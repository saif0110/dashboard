import { Box, Grid, Typography } from "@mui/material";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import ListTabs from "./ListTabs";
const Settings = () => {
    return (
        <div>
            <Navbar />
            <Box height={45} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Grid container sx={{margin: "20px", marginTop: "50px"}}>
                    <ListTabs />
                </Grid>
            </Box>
        </div>
    )
}

export default Settings;