import React from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
const Contact = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'89vh',width:'100%'}}>
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
          />
          <TextField 
            label='Last Name'
            fullWidth
            sx={{mt:2}}
          />
          <TextField 
            label='Email address'
            fullWidth
            sx={{mt:2}}
          />
          <TextField 
            label='Subject'
            fullWidth
            sx={{mt:2}}
          />
          <TextField 
            label='Your message'
            sx={{mt:2}}
            multiline
            fullWidth
            rows={3}
          />
          <Button
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