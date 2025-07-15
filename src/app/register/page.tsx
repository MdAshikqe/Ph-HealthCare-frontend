"use client"
import assets from "@/assets";
import { registerPatient } from "@/Service/Action/registerPatient";
import { userLogin } from "@/Service/Action/userLogin";
import { storeUserInfo } from "@/Service/authService";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Container, Grid2, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast} from "sonner";

type Inputs = {
  password:string
patient:{
  name: string
  email: string
  contactNumber:string
  address:string
    }
}

const RegisterPage=()=>{
    const router=useRouter();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> =async (values) => {
    const data=modifyPayload(values)
    try {
        const res= await registerPatient(data)
        if(res?.success){
            const result= await userLogin({password:values.password,email:values.patient.email})
                    if(result?.data?.accessToken){
                            storeUserInfo(result?.data?.accessToken)

                        router.push("/")
                    }
            
        }
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    // console.log(data)
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
                        <Typography variant="h5" component="h4" fontWeight={600} mt={1}>Patient Register</Typography>
                    </Box>
                </Stack>
                    <Box sx={{my:2}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={2} >
                    <Grid2 size={12}>
                            <Box>
                            <TextField 
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined" 
                            size="small"
                            fullWidth={true}
                            {...register("patient.name")}
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            size="small"
                            fullWidth={true}
                            {...register("patient.email")}
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
                    <Grid2 size={6}>
                            <Box>
                            <TextField 
                            id="outlined-basic" 
                            label="Contruct Number" 
                            variant="outlined" 
                            size="small"
                            fullWidth={true}
                            {...register("patient.contactNumber")}
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6}>
                            <Box>
                            <TextField 
                            id="outlined-basic" 
                            label="Address" 
                            variant="outlined" 
                            size="small"
                            fullWidth={true}
                            {...register("patient.address")}
                            />
                            </Box>
                    </Grid2>

                    <Grid2 size={12}>
                            
                           <Button type="submit" fullWidth={true} sx={{mt:5}}>Register</Button>

                    </Grid2>
                </Grid2>
                        </form>
                    </Box>
                    <Typography>
                        Do you already have a account ? <Link href="/login" >
                        <Typography component="span" color="blue">Please login</Typography>
                        </Link>
                    </Typography>
                    
                </Box>
                
            </Stack>
        </Container>
    )
}

export default RegisterPage;