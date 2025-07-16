import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps={
    name:string;
    label?:string;
    size?:"small"|"medium";
    type?:string;
    fullWidth?:boolean;
    sx?:SxProps;
    placeholder?:string;
    required:boolean
}

const PHInput=({name,label,size="small",type="text",fullWidth,sx,placeholder,required}:TInputProps)=>{
    const {control}=useFormContext()
    return (
        <Controller
        control={control}
        name={name}
        render={({ field}) => (
            <TextField
                {...field}
                 sx={{...sx}}
                 id="outlined-basic" 
                 label={label}
                 type={type}
                 variant="outlined" 
                 size={size}
                 fullWidth={fullWidth}
                 placeholder={label}
                 required={required}
            />
        )}
      />
    )
}

export default PHInput;