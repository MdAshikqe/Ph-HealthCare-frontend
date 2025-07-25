"use client"
import AuthButton from "@/components/UI/AuthButton/AuthButton";
import { Box,Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";


const Navbar=()=>{
const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false })
    return (
        <Container>
            <Stack py={2} direction="row" justifyContent={"space-between"} alignItems="center">
                <Typography variant="h4" fontWeight={600} component={Link} href="/">
                    P<Box component="span" color="primary.main">H</Box> Health Care
                    </Typography>

            <Stack direction="row" justifyContent="space-between" gap={4}>
                <Typography component={Link} href="/consultation">Consultation</Typography>
                <Typography component={Link} href="/health-Plans">Health Plans</Typography>
                <Typography component={Link} href="/medicine">Medicine</Typography>
                <Typography component={Link} href="/diagnostics">Diagnostics</Typography>
                <Typography component={Link} href="/ngos">NGOs</Typography>
            </Stack>
                <AuthButton></AuthButton>
            </Stack>

        </Container>
    )
}
export default Navbar;