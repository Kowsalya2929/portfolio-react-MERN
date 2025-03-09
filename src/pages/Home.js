import { Box, Grid, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import profile from '../images/flower1contact.png';
import CV from '../assets/KowsalyaL.pdf'
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { saveAs } from 'file-saver';

const Home = () => {
  const handleDownload=()=>{
    saveAs(CV,'KowsalyaL.pdf')
  }
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
        {/* Left Section - Text */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              mt:3,
              animation: 'h1 1s ease',
              '@keyframes h1':{
                '0%':{
                  transform: 'translateY(-250%)'
                },
                '100%':{
                  transform: 'translateX(0)'
                }
              },
              visibility:'visible',
              position:'relative',
              right:{md:'150px',xs:0},
              fontWeight:'bold'
            }}>
            Hello, It's Me
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.6rem', sm: '3rem' }, 
              fontWeight: 'bold',
              mt:4 ,
              color: '#ed4b82',
              position: 'relative',
              right:{xs:0,md:'100px'},
              animation : 'h2 1s ease-in-out',
              '@keyframes h2':{
                '0%':{
                  transform:'translateX(50%)'
                },
                '100%':{
                  transform:'translateX(0)'
                }
              },
            }}>
            Kowsalya L
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              fontSize: { xs: '1.5rem', sm: '2rem' },
              mt:3,
              fontWeight:'bold',
              position:'relative',
              right:{xs:0,md:'40px'},
              animation: 'h3 1s ease-in-out',
              '@keyframes h3':{
                '0%':{
                  transform:'translateY(-50%)'
                },
                '100%':{
                  transform:'translateX(0)'
                }
              }
            }}
          >And I'm a  {" "}
          <span 
            style={{
              color: '#ed4b82',
            }}>
            Full Stack Developer
          </span>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{
              px: { xs: 2, sm: 4 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              mt:3,
              position:'relative',
              left:{md:60,xs:0},
              textAlign:'justify',
              animation:'h4 1s ease-in-out',
              '@keyframes h4':{
                '0%':{
                  transform:'translateY(50%)'
                },
                '100%':{
                  transform:'translateX(0)'
                }
              }
            }}>
            I look forward to associating myself with an organization where I can share, contribute, 
            and upgrade my knowledge for personal growth, career advancement, and organizational development.
          </Typography>

          {/* Social Media Icons */}
          <Box 
            sx={{ 
              mt: 3, 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2, 
              flexWrap: 'wrap',
              animation:'h5 2s ease-in-out',
              '@keyframes h5':{
                '0%':{
                  transform:'translateY(50%)'
                }
              }
            }}>
            <IconButton href="https://www.linkedin.com/in/kowsalya-l-4976a3250/" target="_blank" sx={{ backgroundColor: 'rgba(185, 175, 175, 0.7)', borderRadius: '50%',color:'#0077B5'}}>
              <LinkedIn sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }} />
            </IconButton>
            <IconButton href="mailto:kowsalyal0303@gmail.com" sx={{ backgroundColor: 'rgba(185, 175, 175, 0.7)', borderRadius: '50%',color:'#A10B0D'}}>
              <Mail sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/kowsii_03" sx={{ color: '#FF69B4', backgroundColor: 'rgba(185, 175, 175, 0.7)', borderRadius: '50%' }}>
              <Instagram sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }} />
            </IconButton>
            <IconButton href="https://github.com/Kowsalya2929" sx={{ color: 'black', backgroundColor: 'rgba(185, 175, 175, 0.7)', borderRadius: '50%' }}>
              <GitHub sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }} />
            </IconButton>
          </Box>

          {/* Download CV Button */}
          <Box sx={{ mt: 3 }}>
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
                animation:'h6 2s ease-in-out',
                '@keyframes h6':{
                  '0%':{
                    transform:'translateY(50%)'
                  },
                  '100%':{
                    transform:'translateX(0)'
                  }
                }
              }}
              onClick={handleDownload}
            >
              Download CV
            </Button>
          </Box>
        </Grid>

        {/* Right Section - Image */}
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
      </Grid>
    </Box>
  );
};

export default Home;
