"use client"
import { validate } from "@/app/actions";
import { Box, Button, Modal, Stack, TextField, Typography  } from "@mui/material";

import React from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
 
    boxShadow: 24,
    p:"10px",
  };
interface NavbarProps{
    opens?:boolean;
    key?:string;
    data?:string;
    id?:string;
}
function Navbar ({opens=false , key, data,id}:NavbarProps) {
  
    
      const [open, setOpen] = React.useState( opens);
    const [task, setValue]=React.useState('' || data);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (!id) {
            try {
                const response = await fetch('http://localhost:3000/api/todo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ task }),
                });
                setOpen(false);
            } catch (error) {
                throw error;
            }
        } else {
            try {
        
                const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ task }),
                });
                setOpen(false);
            } catch (error) {
                throw error;
            }
        }
        validate();
    }
  return (
 
     <Box >
       {!opens && <Button onClick={handleOpen}>Add Data</Button> }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit} style={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'10px'}}>
         <TextField fullWidth placeholder='Enter your task'  type='text' value={task} size='small' onChange={(e)=>setValue(e.target.value)} />
         <Button type='submit' variant='contained'>{!opens? 'Add Data' : "Update Data"}</Button>
       
        </form>
        </Box>
      </Modal>
    </Box>

  )
}

export default Navbar