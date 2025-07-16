"use client"
import assets from "@/assets";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import { userLogin } from "@/Service/Action/userLogin";
import { storeUserInfo } from "@/Service/authService";
import { Box, Button, Container, Grid2, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginPage=()=>{
    const router=useRouter()
  const handleLogin =async (data:FieldValues) =>{
    try {
        const res= await userLogin(data)
        if(res?.data?.accessToken){
            if(res?.data?.accessToken){
                storeUserInfo(res?.data?.accessToken)
            }
            toast(res?.message)
            router.push("/")
        }
    } catch (error) {
        console.log(error)
    }
  }
    return (
                <Container>
            <Stack sx={{
                height:"100vh",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Box sx={{
                    maxWidth:"600px",
                    width:"100%",
                    boxShadow:1,
                    borderRadius:1,
                    padding:4,
                    textAlign:"center"
                }}>
                <Stack sx={{
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Box>
                        <Image src={assets.svgs.logo} alt="logo"/>
                    </Box>
                    <Box>
                        <Typography variant="h5" component="h4" fontWeight={600} mt={1}>
                            Login PH HealthCare
                        </Typography>
                    </Box>
                </Stack>
                    <Box sx={{my:2}}>
            <PHForms onSubmit={handleLogin}>
                <Grid2 container spacing={2} >
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <PHInput 
                            name="email"
                            type="email"
                            label="Email" 
                            fullWidth={true}
                             required={true}
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <PHInput
                            name="password"
                            type="password" 
                            label="Password" 
                            fullWidth={true}
                             required={true}
                            />


                            </Box>
                    </Grid2>
                </Grid2>
                <Typography component="p" textAlign="end" mb={1} sx={{textDecoration:'underline'}}>Forgate Password?</Typography>
                 <Button type="submit" fullWidth={true} sx={{mt:2}}>Login</Button>          
            </PHForms>
                    </Box>
                    <Typography>
                        Don&apos;t have have an account ? <Link href="/register" >
                        <Typography component="span" color="blue">Create an account</Typography>
                        </Link>
                    </Typography>
                    
                </Box>
                
            </Stack>
        </Container>
    )
}
export default LoginPage;