import { Box, Card, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const MyAccount = () => {
    return (
        <>
            <Grid container>
                <Grid Item xs={7}>
                    <Typography ml={2} sx={{ paddingTop: "20px", paddingBottom: "20px" }} variant='h6' size="small">Mohd Tauheed Khan</Typography>
                    <Card elevation={'none'}>
                        <Typography variant="body2" m={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum perferendis laborum molestiae incidunt consequatur eveniet impedit aliquam sint quaerat sed placeat beatae quibusdam delectus ratione accusantium ad natus aliquid.</Typography>
                        <Typography variant="body2" m={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum perferendis laborum molestiae incidunt consequatur eveniet impedit aliquam sint quaerat sed placeat beatae quibusdam delectus ratione accusantium ad natus aliquid.</Typography>
                        <Typography variant="h6" m={2}>Details</Typography>
                        <Box m={2} width="400px" ml={4}>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Full Name</Typography>
                                <Typography gutterBottom sx={{ fontSize: "14px" }}>Mohd Tauheed Khan</Typography>
                            </Stack>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Father Name</Typography>
                                <Typography gutterBottom sx={{ fontSize: "14px" }}>Mohd Mubeen Khan</Typography>
                            </Stack>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Address</Typography>
                                <Typography gutterBottom sx={{ fontSize: "14px" }}>Intoyathok, gonda, uttar pradesh</Typography>
                            </Stack>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Zip code</Typography>
                                <Typography sx={{ fontSize: "14px" }}>271202</Typography>
                            </Stack>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default MyAccount;