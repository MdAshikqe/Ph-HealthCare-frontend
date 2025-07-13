import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Speacialist=async()=>{
    const res= await fetch("http://localhost:3000/api/v1/specialties",{
        next:{
            revalidate:30
        }
    });
    const {data:speaciaties}= await res.json();
    return(
        <Container>
            <Box sx={{
                margin:"100px 0px",
                textAlign:"center"
            }}>
                <Box >
                    <Typography variant="h4" fontWeight={600}>Explore Treatment Across Specialties</Typography>
                    <Typography component="p" fontWeight={300} fontSize={18}>Experienced Doctors Across All Specialties</Typography>
                </Box>
                <Stack direction="row" gap={4} mt={5}>
                       {speaciaties.map((speaciaty:any)=>(
                            <Box key={speaciaty?.id} sx={{
                                flex:1,
                                width:"150px",
                                backgroundColor:"rgba(245,245,245,1)",
                                border:"1px solid rgba(250,250,250,1)",
                                borderRadius:"5px",
                                textAlign:"center",
                                padding:"40px 15px",
                                "& img":{
                                    margin:"0 auto",
                                    width:"50px",
                                    height:"50px"
                                },
                                "&:hover":{
                                    border:"1px solid blue",
                                    borderRadius:"10px"
                                }
                            }}>
                                <Image src={speaciaty?.icon} width={100} height={100} alt="icons"></Image>
                                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>{speaciaty?.title}</Typography>
                            </Box>
                       ))}
                </Stack>
                <Button variant="outlined" sx={{
                    marginTop:"20px"
                }}>View All</Button>
            </Box>
        </Container>
    )
}

export default Speacialist;