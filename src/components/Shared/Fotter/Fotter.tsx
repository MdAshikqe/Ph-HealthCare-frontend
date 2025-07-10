import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png"
import instagram from "@/assets/landing_page/instagram.png"
import twitter from "@/assets/landing_page/twitter.png"
import linkedin from "@/assets/landing_page/linkedin.png"

const Fotter=()=>{
    return (
        <Box bgcolor="rgb(17,26,34)" py={5}>
            <Container >
            <Stack direction="row" justifyContent="center" gap={4}>
                <Typography color="#fff" component={Link} href="/consultation">Consultation</Typography>
                <Typography color="#fff" component={Link} href="/health-Plans">Health Plans</Typography>
                <Typography color="#fff" component={Link} href="/medicine">Medicine</Typography>
                <Typography color="#fff" component={Link} href="/diagnostics">Diagnostics</Typography>
                <Typography color="#fff" component={Link} href="/ngos">NGOs</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" gap={2} py={3}>
                <Link target="_blank" href="https://www.facebook.com/"><Image src={facebookIcon} alt="facebook" width={30} height={30}></Image></Link>
                <Image src={instagram} alt="facebook" width={30} height={30}></Image>
                <Image src={twitter} alt="facebook" width={30} height={30}></Image>
                <Image src={linkedin} alt="facebook" width={30} height={30}></Image>
            </Stack>
            <div className="border-b-[1px] border-dashed">
            </div>
            <Stack direction="row" justifyContent="space-between" gap={2} py={3} >
                <Typography color="#fff" component='p'>
                    &copy; 2025 PH HealthCare.All Right Reserved
                </Typography>
                 <Typography  color="#fff" variant="h4" fontWeight={600} component={Link} href="/">
                        P<Box component="span" color="primary.main">H</Box> Health Care
                </Typography>

                <Typography color="#fff" component='p'>
                    Privacy Policy!{""} Terms & Conditions
                </Typography>
            </Stack>
            </Container>
        </Box>
    )
}

export default Fotter;