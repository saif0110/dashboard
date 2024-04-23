import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Grid, Stack } from "@mui/material";
import Sidenav from "../Sidenav";
import Typography from '@mui/material/Typography';
import Navbar from "../Navbar";
import '../../dash.css'
import HorizontalBarChart from "../../chart/HorizontalBarChart";
import PieChart from "../../chart/PieChart";
import GeoChart from "../../chart/GeoChart";
import CountUp from 'react-countup';
const Analytics = () => {
    return (
        <div>
            <Navbar />
            <Box height={45} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Grid container p={2} mt={3}>
                    {/* one container */}
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Stack direction={'row'} spacing={2}>
                                <Card sx={{ minWidth: 212 }} className="blueCard" elevation={"none"}>
                                    <CardContent>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Visitors</Typography>
                                        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                        <CountUp delay={0.2} end={2200} duration={0.6}/></Typography>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Since Last week</Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 212 }} className="greenCard" elevation={"none"}>
                                    <CardContent>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Visitors</Typography>
                                        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                        <CountUp delay={0.2} end={1600} duration={0.6}/></Typography>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Since Last week</Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                            <Stack direction={'row'} spacing={2} mt={2}>
                                <Card sx={{ minWidth: 212 }} className="blueCard" elevation={"none"}>
                                    <CardContent>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Visitors</Typography>
                                        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                        <CountUp delay={0.2} end={2500} duration={0.6}/>
                                        </Typography>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Since Last week</Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 212 }} className="greenCard" elevation={"none"}>
                                    <CardContent>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Visitors</Typography>
                                        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                        <CountUp delay={0.2} end={3200} duration={0.6}/>
                                        </Typography>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>Since Last week</Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={7}>
                            <Card sx={{ height: 42.5 + "vh" }} elevation={"none"}>
                                {/* put horizontal bar chart here */}
                                <HorizontalBarChart />
                            </Card>
                        </Grid>
                    </Grid>
                    {/* second container */}
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 40 + "vh" }} elevation={"none"}>
                                {/* put goegraphical chart here */}
                                <GeoChart />
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 40 + "vh" }} elevation={"none"}>
                                {/* put pie chart here */}
                                <PieChart />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Analytics;