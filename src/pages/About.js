import { Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import profile from '../images/flower1contact.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        p: { xs: 2, sm: 4 } ,
        height:{md:'80.5vh',xs:'auto'},
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column-reverse', md: 'row' },my:{xs:2,md:6.2} }} 
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={profile}
            alt="Kowsalya Photo"
            sx={{
              width: { xs: '90%', sm: 350 },
              height: 'auto',
              borderRadius: '10%',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
              animation:'h7 1s ease-in-out',
              '@keyframes h7':{
                '0%':{
                  transform:'translateY(20%)'
                }
              }
            }}
          />
        </Grid>


        <Grid item xs={12} md={6}>
        <Typography
            variant="h4"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              fontSize: { xs: '2rem', sm: '2.7rem' },
              fontWeight:'bold',
              position:'relative',
              right:{md:300,xs:0},
              animation:'a1 1s ease-in-out',
              '@keyframes a1':{
                '0%':{
                  transform:'translateY(-100%)'
                }
              }
            }}
          >About {" "}
          <span 
            style={{
              color: '#ed4b82',
            }}>
            Me
          </span>
          </Typography>

          <Typography 
            variant="h4" 
            sx={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              mt:3,
              fontWeight:'bold',
              position:'relative',
              right:{xs:0,md:230},
              animation: 'a2 1s ease-in-out',
              '@keyframes a2':{
                '0%':{
                  transform:'translateX(40%)'
                }
              }
            }}>
            Full Stack Developer
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{
              px: { xs: 2, sm: 4 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              mt:4,
              position:'relative',
              right:{xs:0,md:70},
              textAlign:'justify',
              animation:'a3 1s ease-in-out',
              '@keyframes a3':{
                '0%':{
                  transform:'translateY(50%)'
                }
              }
            }}>
            I look forward to associating myself with an organization where I can share, contribute, 
            and upgrade my knowledge for personal growth, career advancement, and organizational development.
          </Typography>  

          <Box sx={{ mt: 3 }} component={Link} to='/'>
            <Button
              variant="contained"
              target="_blank"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                padding: { xs: '8px 16px', sm: '10px 20px' },
                borderRadius: '25px',
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor:'pink',
                color: 'black',
                position:'relative',
                right:{xs:0,md:100},
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
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>  
      </Grid>
    </Box>
  );
};

export default About;
