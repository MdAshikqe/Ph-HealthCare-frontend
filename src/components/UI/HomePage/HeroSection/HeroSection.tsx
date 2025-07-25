import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets"

const HeroSection=()=>{
    return (
            <Container sx={{display:"flex",direction:"row",my:16}}>
             <Box sx={{
                    flex:1,
                    position:"relative",
                }}>
                   <Box sx={{
                    position:"absolute",
                    width:"700px",
                    top:"-90px",
                    left:"-120px"
                   }}>
                    <Image src={assets.svgs.grid} alt="grid" width={600} height={600}/>
                </Box>
                <Typography variant="h3" component="h1" fontWeight={600}>Healthier Hearts</Typography>
                <Typography variant="h3" component="h1" fontWeight={600}>Come From</Typography>
                <Typography variant="h3" component="h1" fontWeight={600} color="primary.main">Preventive Care</Typography>
                <Typography variant="h6" component="p" fontWeight={400} sx={{my:4}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facilis dolore fuga sequi architecto eum aut atque doloribus aperiam exercitationem natus quo odio officiis doloremque cumque sed explicabo enim officia nam error.</Typography>
              <Box sx={{display:"flex", gap:2}}>
                <Button>MAKE APPOINMENT</Button>
                <Button variant="outlined" sx={{left:"10px"}}>CONTUCT US</Button>
              </Box>

             </Box>
                <Box sx={{
                    p:1,
                    flex:1,
                    display:"flex",
                    justifyContent:"center",
                    position:"relative",
                    mt:0
                }}>
                    <Box sx={{
                        position:"absolute",
                        left:"200px",
                        top:"-30px"
                    }}>
                        <Image src={assets.svgs.arrow} alt="arrow" height={100} width={100}></Image>
                    </Box>
                    <Box sx={{display:"flex",gap:2}}>
                            <Box mt={5}>
                                <Image src={assets.images.doctor1} width={240} height={380} alt="doctor1"></Image>
                            </Box>
                            <Box>
                                 <Image src={assets.images.doctor2} width={240} height={300} alt="doctor2"></Image>
                            </Box>

                            <Box sx={{
                                position:"absolute",
                                top:"220px",
                                left:"150px"
                                }}>
                                <Image src={assets.images.doctor3} height={240} width={240} alt="doctor3"></Image>
                            </Box> 
                            <Box sx={{
                                position:"absolute",
                                bottom:"-50px",
                                right:0,
                                zIndex:"-1"
                                }}>
                                <Image src={assets.images.stethoscope} height={180} width={180} alt="stethoscope"></Image>
                            </Box> 
                    </Box>
                </Box>

            </Container>
    )
}
export default HeroSection;