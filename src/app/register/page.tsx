"use client"
import assets from "@/assets";
import PHForms from "@/components/Forms/PHForms";
import PHInput from "@/components/Forms/PHInput";
import { registerPatient } from "@/Service/Action/registerPatient";
import { userLogin } from "@/Service/Action/userLogin";
import { storeUserInfo } from "@/Service/authService";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid2, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler} from "react-hook-form";
import { toast} from "sonner";
import z from "zod";

const zodValidationRegister=z.object({
    password:z.string().min(6,"Please enter at least 6 charastics"),
    patient:z.object({
    name:z.string().min(1,"Please enter your name"),
    email:z.string().email("Please enter a valid email address"),
    contactNumber:z.string().regex(/^\d{11}$/, "Please provide a valid phone number!"),
    address:z.string().min(1,"Pleasee enter your address")
    })
})

const RegisterPage=()=>{
    const router=useRouter();
  const handleRegister: SubmitHandler<FieldValues> =async (values) => {
    const data=modifyPayload(values)
    try {
        const res= await registerPatient(data)
        if(res?.success){
            const result= await userLogin({password:values.password,email:values.patient.email})
                    if(result?.data?.accessToken){
                        toast(res?.message)
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
            <PHForms 
            onSubmit={handleRegister} resolver={zodResolver(zodValidationRegister)}
            defaultValues={{
                password:"",
                patient:{
                    name:"",
                    email:"",
                    contactNumber:"",
                    address:""
                }
            }}
            >
                <Grid2 container spacing={2} >
                    <Grid2 size={12}>
                            <Box>
                            <PHInput 
                            name="patient.name"
                            label="Name" 
                            fullWidth={true}
                             
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <PHInput 
                            name="patient.email"
                            type="email"
                            label="Email" 
                            fullWidth={true}
                             
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6} sx={{py:1}}>
                            <Box>
                            <PHInput 
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth={true}
                             
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6}>
                            <Box>
                            <PHInput
                            name="patient.contactNumber" 
                            label="Contruct Number" 
                            type="number"
                            fullWidth={true}
                             
                            />
                            </Box>
                    </Grid2>
                    <Grid2 size={6}>
                            <Box>
                            <PHInput
                            name="patient.address" 
                            label="Address" 
                            fullWidth={true}
                            
                            />
                            </Box>
                    </Grid2>
                </Grid2>
                    <Button type="submit" fullWidth={true} sx={{mt:5}}>Register</Button>
            </PHForms>

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