import { Box, Button, Card, CardActions, CardContent, Container,Grid2,Typography } from "@mui/material";
// import Grid from '@mui/material/Grid';
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TopRatedDoctor=async()=>{
    const res=await fetch("http://localhost:3000/api/v1/doctor?sortBy=averageRating&sortOrder=desc&page=1&limit=3");
    const {data:doctors}= await res.json();
    // console.log(data)
    return (
            <Box sx={{
                my:10,
                py:30,
                backgroundColor:"rgba(20,20,20,0.1)",
                clipPath:"polygon(0 0, 100% 25%,100% 100%,0 75%)",
            }}>
                <Box sx={{
                    textAlign:"center"
                }}>
                    <Typography variant="h4" component="h1" fontWeight={700}>Our Top Rated Doctors</Typography>
                    <Typography component="p" fontSize={18} fontWeight={400} sx={{mt:"4px"}}>Acess to expart physicians and surgeons, advanced technologies</Typography>
                    <Typography component="p" fontSize={18} fontWeight={400}>and top-quality surgery facilities right here</Typography>
                </Box>
                <Container sx={{margin:"30px auto"}}>
                    <Grid2 container spacing={2}>
                        {doctors?.map((doctor:any)=>(
                            <Grid2 size={4} key={doctor.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                <Box>
                                    <Image src={doctor?.profilePhoto} alt="doctor" width={500} height={100}/>
                                </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctor?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {doctor?.qualification}, {doctor?.designaton}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',py:2,alignItems:"center" }}>
                <LocationOnIcon/> {doctor?.address}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent:"space-between",
        px:2,
      }}>
        <Button>Book Now</Button>
        <Button variant="outlined">View Profile</Button>
      </CardActions>
    </Card>
                                
                            </Grid2>
                        ))}
                    </Grid2>
                     <Box sx={{
                        textAlign:"center",
                     }}>
                        <Button sx={{marginTop:"20px"}} variant="outlined">View All</Button>
                     </Box>
                </Container>
                
            </Box>
    )
}

export default TopRatedDoctor;