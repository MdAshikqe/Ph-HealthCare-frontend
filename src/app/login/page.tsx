"use client"
import assets from "@/assets";
import { userLogin } from "@/Service/Action/userLogin";
import { Box, Button, Container, Grid2, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type Inputs = {
  email: string
  password: string
}
const LoginPage=()=>{
    const router=useRouter()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> =async (data) =>{
    try {
        const res= await userLogin(data)
        if(res?.success){
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={2} >
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            size="small"
                            fullWidth={true}
                            {...register("email")}
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <TextField 
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined" 
                            size="small"
                            fullWidth={true}
                            {...register("password")}
                            />


                            </Box>
                    </Grid2>
                </Grid2>
                <Typography component="p" textAlign="end" mb={1} sx={{textDecoration:'underline'}}>Forgate Password?</Typography>
                 <Button type="submit" fullWidth={true} sx={{mt:2}}>Login</Button>          
            </form>
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