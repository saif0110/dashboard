import { Card, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const currencies = [
    {
        value: 'Super Admin',
        label: 'Super Admin',
    },
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'User',
        label: 'User',
    },
];

const PersonalDetail = () => {
    return (
        <>
            <Grid container spacing={2}>
                {/* left grid */}
                <Grid Item xs={6}>
                    <Card elevation="none">
                        <Typography sx={{ paddingTop: "20px", paddingBottom: "20px" }} variant='h6' size="small">Personal Information</Typography>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField id="outlined-basic" fullWidth label="Name" variant="outlined" value="Mohd Tauheed Khan" size="small" />
                            <TextField id="outlined-basic" fullWidth label="Location" variant="outlined" value="India" size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField fullWidth id="fullWidth" multiline minRows={5} value="Bio" size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField select label="User Type" value="Super Admin" size="small">
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Card>
                </Grid>
                {/* right grid */}
                <Grid Item xs={6}>
                    <Card elevation="none" sx={{marginLeft:"20px"}}>
                        <Typography sx={{ paddingTop: "20px", paddingBottom: "20px" }} variant='h6' size="small">Contact Information</Typography>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField id="outlined-basic" fullWidth label="Phone" variant="outlined" value="9161056365" size="small" />
                            <TextField id="outlined-basic" fullWidth label="Email" variant="outlined" value="tauheed0110@gmail.com" size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField fullWidth id="fullWidth" label="Profile url" value="https://codingmstr.com" size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField fullWidth id="fullWidth" multiline minRows={5} value="Address" size="small" />
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default PersonalDetail;