import { Box, Card, CardContent, CardHeader, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Profile = () => {
    return (
        <>
            <Grid container spacing={2} m={2}>
                <Grid Item xs={4}>
                    <Card elevation={'none'}>
                        <Typography variant="h6" m={2}>Tauheed Khan</Typography>
                        <Box m={4}>
                            <Stack direction="row" spacing={2} mb={1}>
                                <EmailIcon sx={{ color: "gray" }} fontSize="small" />
                                <Typography variant="body2">tauheed0110@gmail.com</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2} mb={1}>
                                <PhoneAndroidIcon sx={{ color: "gray" }} fontSize="small" />
                                <Typography variant="body2">+91 9161056365</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2} mb={1}>
                                <LocationOnIcon sx={{ color: "gray" }} fontSize="small" />
                                <Typography variant="body2">Intoyathok Gonda</Typography>
                            </Stack>
                        </Box>
                    </Card>
                </Grid>
                <Grid Item xs={7.5} ml={2}>
                    <Card elevation={'none'}>
                        <Typography variant="h6" m={2}>About me</Typography>
                        <Typography variant="body2" m={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum perferendis laborum molestiae incidunt consequatur eveniet impedit aliquam sint quaerat sed placeat beatae quibusdam delectus ratione accusantium ad natus aliquid.</Typography>
                        <Typography variant="h6" m={2}>Details</Typography>
                        <Box m={2} width="400px" ml={4}>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx = {{fontSize: "14px", fontWeight: "600", color:"gray"}}>Full Name</Typography>
                                <Typography gutterBottom sx = {{fontSize: "14px"}}>Mohd Tauheed Khan</Typography>
                            </Stack>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx = {{fontSize: "14px", fontWeight: "600", color:"gray"}}>Father Name</Typography>
                                <Typography gutterBottom sx = {{fontSize: "14px"}}>Mohd Mubeen Khan</Typography>
                            </Stack>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx = {{fontSize: "14px", fontWeight: "600", color:"gray"}}>Address</Typography>
                                <Typography gutterBottom sx = {{fontSize: "14px"}}>Intoyathok, gonda, uttar pradesh</Typography>
                            </Stack>
                            <Stack direction={"row"} justifyContent={'space-between'}>
                                <Typography sx = {{fontSize: "14px", fontWeight: "600", color:"gray"}}>Zip code</Typography>
                                <Typography sx = {{fontSize: "14px"}}>271202</Typography>
                            </Stack>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Profile;