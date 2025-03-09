import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import p1 from '../images/my-flower.png'
import p2 from '../images/expanding-cards.png'
import p3 from '../images/fd-rate.png'
import p4 from '../images/copy-clip.png'
import p5 from '../images/current-time.png'
import p6 from '../images/ctof.png'
import p7 from '../images/currency.png'
import p8 from '../images/resume-b.png'
import p9 from '../images/counter.png'
import p10 from '../images/color.png'
import p11 from '../images/e-com.png'
import p12 from '../images/form.png'
import p13 from '../images/ran-u-js.png'
import p14 from '../images/text-speech.png'
import p15 from '../images/student-p.png'
import p16 from '../images/trip.png'
import p17 from '../images/study-mbbs.png'
import p18 from '../images/cat-1.png'
import p19 from '../images/cafe-menu.png'
import p20 from '../images/root.png'
import p21 from '../images/mark.png'
import p22 from '../images/form2.png'
import p23 from '../images/rothko.png'
import p24 from '../images/lesson-lpan.png'
import p25 from '../images/cat2.png'
import p26 from '../images/auth.png'
import p27 from '../images/nutri.png'
import p28 from '../images/land.png'
import p29 from '../images/meme.png'
import p30 from '../images/ran-u-2.png'
import p31 from '../images/weather1.png'
import p32 from '../images/p-old.png'
import p33 from '../images/movie.png'
import p34 from '../images/crpto.png'
import p35 from '../images/spacex.png'
import p36 from '../images/todo.png'
import p37 from '../images/no-img.png'
import p38 from '../images/dictionary.png'
import p39 from '../images/jwt.png'
import p40 from '../images/notes.png'
import p41 from '../images/weather2.png'
import { GitHub, Kitesurfing } from '@mui/icons-material'

const Projects = () => {

  const projectItems = [
    {name: "Weather-app-mern", img: p41, GitUrl: 'https://github.com/Kowsalya2929/weather-app-mern', siteUrl: ''},
    {name: "Notes-app-mern", img: p40, GitUrl: 'https://github.com/Kowsalya2929/Notes-app-mern', siteUrl: ''},
    {name: "Auth-JWT-mongoDB", img: p39, GitUrl: 'https://github.com/Kowsalya2929/Auth-JWT-mongoDB', siteUrl: ''},
    {name: "Dictionary-app", img: p38, GitUrl: 'https://github.com/Kowsalya2929/Dictionary-app', siteUrl: 'https://stellular-donut-67c305.netlify.app/'},
    {name: "News-aggregator", img: p37, GitUrl: 'https://github.com/Kowsalya2929/News-Aggregator', siteUrl: ''},
    {name: "mern-todo-app", img: p36, GitUrl: 'https://github.com/Kowsalya2929/mern-todo-app', siteUrl: ''},
    {name: "SpaceX-Launch-Tracker-app", img: p35, GitUrl: 'https://github.com/Kowsalya2929/SpaceX-Launch-Tracker-app', siteUrl: 'https://endearing-pie-8ed7bd.netlify.app/'},
    {name: "Cryptocurrency-app", img: p34, GitUrl: 'https://github.com/Kowsalya2929/Crypto-Tracker-app', siteUrl: 'https://ornate-crisp-2d86a7.netlify.app/'},
    {name: "Movie-Search-App", img: p33, GitUrl: 'https://github.com/Kowsalya2929/Movie-Search-App', siteUrl: 'https://unrivaled-croissant-12a287.netlify.app/'},
    {name: "my-portfolio-old", img: p32, GitUrl: 'https://github.com/Kowsalya2929/My-portfolio', siteUrl: 'https://kowsalya2929.github.io/My-portfolio/'},
    {name: "Weather-app", img: p31, GitUrl: 'https://github.com/Kowsalya2929/Weather-App', siteUrl: 'https://calm-faloodeh-80c402.netlify.app/'},
    {name: "RandomUser-Profile", img: p30, GitUrl: 'https://github.com/Kowsalya2929/Random-user-profile', siteUrl: 'https://keen-chebakia-45fe7f.netlify.app/'},
    {name: "MemeVerse-App", img: p29, GitUrl: 'https://github.com/Kowsalya2929/MemeVerse-App', siteUrl: 'https://stellar-tulumba-845840.netlify.app/'},
    {name: "Landing-page", img: p28, GitUrl: 'https://github.com/Kowsalya2929/Landing-page', siteUrl: 'https://kowsalya2929.github.io/Landing-page/'},
    {name: "Nutrition-label", img: p27, GitUrl: 'https://github.com/Kowsalya2929/Nutrition-label', siteUrl: 'https://kowsalya2929.github.io/Nutrition-label/'},
    {name: "Authentication-firebase", img: p26, GitUrl: 'https://github.com/Kowsalya2929/Authentication-firebase', siteUrl: 'https://web-sign-in-log-in-out.web.app/'},
    {name: "cat-photos-gallery", img: p25, GitUrl: 'https://github.com/Kowsalya2929/cat-photos-gallery', siteUrl: 'https://kowsalya2929.github.io/cat-photos-gallery/'},
    {name: "lesson-planner-app", img: p24, GitUrl: 'https://github.com/Kowsalya2929/lesson-planner-app', siteUrl: 'https://frolicking-dragon-a65c10.netlify.app/'},
    {name: "Rothko-painting", img: p23, GitUrl: 'https://github.com/Kowsalya2929/Rothko-painting', siteUrl: 'https://kowsalya2929.github.io/Rothko-painting/'},
    {name: "Registration-Form", img: p22, GitUrl: 'https://github.com/Kowsalya2929/register-form-css', siteUrl: 'https://kowsalya2929.github.io/register-form-css/'},
    {name: "Marker-Color", img: p21, GitUrl: 'https://github.com/Kowsalya2929/marker', siteUrl: 'https://kowsalya2929.github.io/marker/'},
    {name: "animation-image-root", img: p20, GitUrl: 'https://github.com/Kowsalya2929/animation-image-root', siteUrl: 'https://kowsalya2929.github.io/animation-image-root/'},
    {name: "coffee-shop-menu", img: p19, GitUrl: 'https://github.com/Kowsalya2929/coffee-shop-menu', siteUrl: 'https://kowsalya2929.github.io/coffee-shop-menu/'},
    {name: "cat-app", img: p18, GitUrl: 'https://github.com/Kowsalya2929/cat-app', siteUrl: 'https://kowsalya2929.github.io/cat-app/'},    
    {name: "Study-mbbs-abroad-app", img: p17, GitUrl: 'https://github.com/Kowsalya2929/Study-mbbs-abroad-app', siteUrl: 'https://inquisitive-tapioca-2231ca.netlify.app/'},
    {name: "Trip-Website", img: p16, GitUrl: 'https://github.com/Kowsalya2929/Trip-Website', siteUrl: 'https://magical-starburst-765d2d.netlify.app/'},
    {name: "StudentForm-react", img: p15, GitUrl: 'https://github.com/Kowsalya2929/StudentForm-react', siteUrl: 'https://quiet-paletas-f93e9b.netlify.app/'},
    {name: "Text-to-speech", img: p14, GitUrl: 'https://github.com/Kowsalya2929/Text-to-speech', siteUrl: 'https://kowsalya2929.github.io/Text-to-speech/'},
    {name: "Random-user-generator", img: p13, GitUrl: 'https://github.com/Kowsalya2929/Random-user-generator', siteUrl: 'https://kowsalya2929.github.io/Random-user-generator/'},
    {name: "Login-form-JS", img: p12, GitUrl: 'https://github.com/Kowsalya2929/Login-form-JS', siteUrl: 'https://kowsalya2929.github.io/Login-form-JS/'},
    {name: "E-commerce-react", img: p11, GitUrl: 'https://github.com/Kowsalya2929/e-commerce-react', siteUrl: 'https://kowsalya2929.github.io/e-commerce-react/'},
    {name: "Color-square-app", img: p10, GitUrl: 'https://github.com/Kowsalya2929/Color-square-app', siteUrl: 'https://kowsalya2929.github.io/Color-square-app/'},
    {name: "Counter-app", img: p9, GitUrl: 'https://github.com/Kowsalya2929/Counter-app', siteUrl: 'https://kowsalya2929.github.io/Counter-app/'},
    {name: "Resume-Basic", img: p8, GitUrl: 'https://github.com/Kowsalya2929/Resume-Basic', siteUrl: 'https://kowsalya2929.github.io/Resume-Basic/'},
    {name: "Currency-converter", img: p7, GitUrl: 'https://github.com/Kowsalya2929/Currency-converter', siteUrl: 'https://kowsalya2929.github.io/Currency-converter/'},
    {name: "celcius-to-fahrenheit", img: p6, GitUrl: 'https://github.com/Kowsalya2929/celcius-to-fahrenheit', siteUrl: 'https://kowsalya2929.github.io/celcius-to-fahrenheit/'},
    {name: "Digital-Clock-Current-Time", img: p5, GitUrl: 'https://github.com/Kowsalya2929/Digital-Clock-Current-Time', siteUrl: 'https://kowsalya2929.github.io/Digital-Clock-Current-Time/'},
    {name: "Copy-to-Clipboard", img: p4, GitUrl: 'https://github.com/Kowsalya2929/Copy-to-Clipboard', siteUrl: 'https://kowsalya2929.github.io/Copy-to-Clipboard/'},
    {name: "FD-Rate-Calculater", img: p3, GitUrl: 'https://github.com/Kowsalya2929/FD-Rate-Calculater', siteUrl: 'https://kowsalya2929.github.io/FD-Rate-Calculater/'},
    {name: "Expanding-Cards", img: p2, GitUrl: 'https://github.com/Kowsalya2929/Expanding-Cards', siteUrl: 'https://kowsalya2929.github.io/Expanding-Cards/'},
    {name: "MyFlower-Website", img: p1, GitUrl: 'https://github.com/Kowsalya2929/MyFlower-Website', siteUrl: 'https://kowsalya2929.github.io/MyFlower-Website/'},
  ]
  return (
    <Box sx={{p:3}}>
      <Typography
        variant="h4"
        sx={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          fontSize: { xs: '1.5rem', sm: '1.8rem' },
          mb:3,
          textAlign:'center',
          animation: 'c1 1s ease-in-out',
          '@keyframes c1':{
            '0%':{
              transform:'translateY(-50%)'
            }
          },
          color: '#ed4b82'
        }}        
      > 
        Projects 
      </Typography>
      <Grid container spacing={5}>
      {projectItems.map((p,i)=>(
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <Card elevation={7} sx={{borderRadius:'20px'}}>
          <CardContent>
            <CardMedia
              component='img'
              alt={p.name}
              image={p.img}
              sx={{
                height:300,
                borderRadius:'20px'
              }}
            />
            
            <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',mt:3}}>
            <IconButton sx={{backgroundColor:'pink',color:'black',"&:hover":{backgroundColor:'black',color:'white'}}} onClick={()=>window.open(p.GitUrl,'_blank')}>
              <GitHub />
            </IconButton>
            <Typography variant='h6'>
              {p.name}
            </Typography>
            <IconButton sx={{backgroundColor:'pink',color:'black',"&:hover":{backgroundColor:'black',color:'white'}}} onClick={()=>window.open(p.siteUrl,'_blank')}>
              <Kitesurfing />
            </IconButton>
            </Box>
          </CardContent> 
        </Card>
        </Grid>
      ))}
      </Grid>
    </Box>
  )
}

export default Projects