import { Button, Card, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const ChangePassword = () => {
    return (
        <>
            <Grid container>
                <Grid Item xs={5}>
                    <Card elevation="none" sx={{ marginLeft: "20px" }}>
                        <Typography sx={{ paddingTop: "20px", paddingBottom: "20px" }} variant='h6' size="small">Change Passord</Typography>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField fullWidth id="fullWidth" label="User Name" size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField fullWidth id="fullWidth" label="Password"  size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <TextField fullWidth id="fullWidth" label="Confirm Password" size="small" />
                        </Stack>
                        <Stack direction="row" spacing={2} mb={2}>
                            <Button variant="contained">Submit</Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default ChangePassword;