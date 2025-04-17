import React, { useState } from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import useContactStore from '../store/contact.js'

const Contact = () => {
  const [newContact,setNewContact] = useState({firstName:"",lastName:"",email:"",sub:"",msg:""})
  const {postContact} = useContactStore()
  const handleAddContact = async(newContact)=>{
    const {success,message} = await postContact(newContact)
    if(!success){
      toast.error(message,{
        position: 'top-center',
        draggable: true,
        closeOnClick: true,
        autoClose: 3000,
        pauseOnHover: true,
        hideProgressBar: false
      })
    }else{
      toast.success(message,{
        position:'top-center',
        draggable: true,
        closeOnClick: true,
        autoClose: 3000,
        pauseOnHover: true,
        hideProgressBar: false
      })
      setNewContact({firstName:"",lastName:"",email:"",sub:"",msg:""})
    }
  }
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'89vh',width:'100%'}}>
      <ToastContainer />
      <Card elevation={5} sx={{display:'flex',flexDirection:'column',p:3,width:{xs:'auto',md:500}}}>
        <Typography
            variant="h4"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              fontSize: { xs: '1.5rem', sm: '1.8rem' },
              my:1,
              textAlign:'center',
              animation: 'c1 1s ease-in-out',
              '@keyframes c1':{
                '0%':{
                  transform:'translateY(-50%)'
                }
              }
            }}
          >Contact With {" "}
          <span 
            style={{
              color: '#ed4b82',
            }}>
            Me
          </span>
        </Typography>
    
          <TextField 
            label='First Name'
            fullWidth
            sx={{mt:2}}
            value={newContact?.firstName}
            onChange={(e)=>setNewContact({...newContact,firstName: e.target.value})}
          />
          <TextField 
            label='Last Name'
            fullWidth
            sx={{mt:2}}
            value={newContact?.lastName}
            onChange={(e)=>setNewContact({...newContact,lastName: e.target.value})}
          />
          <TextField 
            label='Email address'
            fullWidth
            sx={{mt:2}}
            value={newContact?.email}
            onChange={(e)=>setNewContact({...newContact,email: e.target.value})}
          />
          <TextField 
            label='Subject'
            fullWidth
            sx={{mt:2}}
            value={newContact?.sub}
            onChange={(e)=>setNewContact({...newContact,sub: e.target.value})}
          />
          <TextField 
            label='Your message'
            sx={{mt:2}}
            multiline
            fullWidth
            rows={3}
            value={newContact?.msg}
            onChange={(e)=>setNewContact({...newContact,msg: e.target.value})}
          />
          <Button
          onClick={()=>handleAddContact(newContact)}
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
                padding: { xs: '8px 16px', sm: '10px 20px' },
                borderRadius: '25px',
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor:'pink',
                color: 'black',
                animation:'h6 2s ease-in-out',
                '@keyframes h6':{
                  '0%':{
                    transform:'translateY(50%)'
                  },
                  '100%':{
                    transform:'translateX(0)'
                  }
                },
                mt:3
            }}>
            Submit
          </Button>
        </Card>
    </Box>
  )
}

export default Contact