import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box sx={{display:'flex',height:'89.2vh',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <Typography variant='h4' sx={{color:'red',fontSize:{xs:30,md:40}}}>
      Page Not Found
    </Typography>
    <Typography variant='h6' sx={{mt:3,fontSize:{xs:15,md:20}}}>
      Please go to {" "}
      <Link to={'/'} style={{color:'#ed4b82'}}>Home page</Link>
    </Typography>
    </Box>
  )
}

export default NotFound