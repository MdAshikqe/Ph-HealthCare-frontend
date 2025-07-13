import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import femaleDoctorImg from "@/assets/how-it-works-img.png"
import doctorIcon from "@/assets/icons/doctor-icon.png";
import appoinmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";
import searchIcon from "@/assets/icons/search-icon.png";

const HowItWork=()=>{
    return (
        <Container>
            <Box sx={{my:10}}>
            <Box>/
            <Typography color="primary" component="p" fontWeight={200} sx={{mb:1}}>
                How It Works
            </Typography>
            <Typography  variant="h4" component="h1" fontWeight={600}>
                        4 Easy Steps To Get Your Solution
            </Typography>
            <Typography color="primary.body1" component="p" fontWeight={200} sx={{mt:1}}>
                 Access to expert physicians and surgeons, advanced technologies
            </Typography>
            <Typography color="primary.body1" component="p" fontWeight={200}>
                 and top-quality surgery facilities right here.
            </Typography>
            </Box>
                <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                            <Box>
                                <Image src={femaleDoctorImg} alt="doctor img female" width={400}/>
                            </Box>
                    </Grid2>
                    <Grid2 size={6}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                <Box sx={{
                                    backgroundColor:"#fff",
                                    border:"1px solid lightgray",
                                    borderRadius:"10px",
                                    padding:"10px",
                                    ":hover":{
                                        border:"1px solid blue"
                                    }
                                }}>
                                    <Box>
                                        <Image src={doctorIcon} alt="doctor icons"></Image>
                                    </Box>
                                <Typography variant="h6" component="h2" fontWeight={600} sx={{mt:1}}>
                                    Check Doctor Profile
                                </Typography>
                                <Typography color="primary.body1" component="p" sx={{mt:1}}>
                                    Dolor sit amet consectetur. Scelerisque in eu mauris
                                    volutpat Ornare .
                                </Typography>

                                </Box>
                            </Grid2>
                            <Grid2 size={6}>
                                <Box sx={{
                                    backgroundColor:"#fff",
                                    border:"1px solid lightgray",
                                    borderRadius:"10px",
                                    padding:"10px",
                                    "&:hover":{
                                        border:"1px solid blue"
                                    }
                                }}>
                                    <Box>
                                        <Image src={searchIcon} alt="search doctor"></Image>
                                    </Box>
                                <Typography variant="h6" component="h2" fontWeight={600} sx={{mt:1}}>
                                    Search Doctor
                                </Typography>
                                <Typography color="primary.body1" component="p" sx={{mt:1}}>
                                    Dolor sit amet consectetur. Scelerisque in eu mauris
                                    volutpat Ornare .
                                </Typography>

                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                                                <Box sx={{
                                    backgroundColor:"#fff",
                                    border:"1px solid lightgray",
                                    borderRadius:"10px",
                                    padding:"10px",
                                    mt:2,
                                    ":hover":{
                                        border:"1px solid blue"
                                    }
                                }}>
                                    <Box>
                                        <Image src={appoinmentIcon} alt="appoinment icons"></Image>
                                    </Box>
                                <Typography variant="h6" component="h2" fontWeight={600} sx={{mt:1}}>
                                    Schedule Appoinment
                                </Typography>
                                <Typography color="primary.body1" component="p" sx={{mt:1}}>
                                    Dolor sit amet consectetur. Scelerisque in eu mauris
                                    volutpat Ornare .
                                </Typography>

                                </Box>
                            </Grid2>
                            <Grid2 size={6}>
                                                                <Box sx={{
                                    backgroundColor:"#fff",
                                    border:"1px solid lightgray",
                                    borderRadius:"10px",
                                    padding:"10px",
                                    mt:2,
                                    ":hover":{
                                        border:"1px solid blue"
                                    }
                                }}>
                                    <Box>
                                        <Image src={charityIcon} alt="charity icons"></Image>
                                    </Box>
                                <Typography variant="h6" component="h2" fontWeight={600} sx={{mt:1}}>
                                    Get Your Solution
                                </Typography>
                                <Typography color="primary.body1" component="p" sx={{mt:1}}>
                                    Dolor sit amet consectetur. Scelerisque in eu mauris
                                    volutpat Ornare .
                                </Typography>

                                </Box>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    )
}

export default HowItWork;