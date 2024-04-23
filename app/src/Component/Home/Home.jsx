import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Grid, Stack } from "@mui/material";
import Sidenav from "../Sidenav";
import Typography from '@mui/material/Typography';
import Navbar from "../Navbar";
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../../dash.css'
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from "../../chart/BarChart";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CountUp from 'react-countup';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Box height={45} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box sx={{ padding: "20px", marginTop: "12px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction={'row'}>
                                <Card className="blueCard" sx={{ minWidth: 345, minHeight: 152 }} elevation={"none"}>
                                    <CardContent>
                                        <div>
                                            <PaymentIcon sx={{ color: "white" }} />
                                        </div>
                                        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                            $<CountUp delay={0.2} end={500} duration={0.6}/>
                                        </Typography>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>
                                            Total Earning
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="greenCard" sx={{ minWidth: 345, minHeight: 152 }} elevation={"none"}>
                                    <CardContent>
                                        <div>
                                            <ShoppingBagIcon sx={{ color: "white" }} />
                                        </div>
                                        <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                            $<CountUp delay={0.2} end={900} duration={0.6}/>
                                        </Typography>
                                        <Typography gutterBottom variant="body" sx={{ color: "#ccd1d1" }}>
                                            Total Order
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1}>
                                <Card sx={{ minWidth: 345, padding: "12px" }} className="greenCard" elevation={"none"}>
                                    <Stack direction={'row'}>
                                        <div className="store-icon white-icon">
                                            <StorefrontIcon />
                                        </div>
                                        <div>
                                            <span className="priceTitle">$200</span>
                                            <br />
                                            <span className="priceSubTitle">Total Income</span>
                                        </div>
                                    </Stack>
                                </Card>
                                <Card sx={{ minWidth: 345, padding: "12px" }} elevation={"none"}>
                                    <Stack direction={'row'}>
                                        <div className="store-icon">
                                            <StorefrontIcon />
                                        </div>
                                        <div>
                                            <span>$200</span>
                                            <br />
                                            <span>Total Income</span>
                                        </div>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }} elevation={"none"}>
                                <BarChart />
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <Typography variant="h6" sx={{paddingLeft:"12px"}}>Product List</Typography>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography>Product 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Product 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Product 3</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Product 4</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home;