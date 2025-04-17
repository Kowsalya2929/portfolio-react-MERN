import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const hoverEffect = {
  scale: 1.1,
  transition: { duration: 0.3 }
};

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'HTML5', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", link: "https://tailwindcss.com/" },
        { name: "jQuery", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg", link: "https://jquery.com/" },
        { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", link: "https://reactjs.org/" },
        { name: "Redux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg", link: "https://redux.js.org/" },
        { name: "MUI", logo: "https://mui.com/static/logo.png", link: "https://mui.com/" }
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", link: "https://nodejs.org/" },
        { name: 'Express.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', link: 'https://expressjs.com/' }      
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", link: "https://www.mongodb.com/" },
        { name: "Mongoose", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", link: "https://mongoosejs.com/" },
        { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", link: "https://www.mysql.com/" }
      ],
    },
    {
      category: "Web Services",
      items: [
        { name: "JSON/REST", logo: "https://www.vectorlogo.zone/logos/json/json-icon.svg", link: "https://www.json.org/json-en.html" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", link: "https://www.postman.com/" },
        { name: "Web API", logo: "https://www.vectorlogo.zone/logos/w3c/w3c-icon.svg", link: "https://developer.mozilla.org/en-US/docs/Web/API" },
        {name: "Canva",logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",link: "https://www.canva.com/"}
      ],
    },
  ];

  return (
    <Box sx={{ px:4,pt:4, textAlign: "center" }} component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      {/* Title Animation */}
      <Typography
        variant="h4"
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          fontSize: { xs: "1.8rem", sm: "2rem" },
          fontWeight: "bold",
          color: "#ed4b82",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        Skills
      </Typography>

      <Typography
        variant="body2"
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          mb: 4,
        }}
      >
        Here are the technologies I'm proficient in:
      </Typography>

      {/* Skills Grid */}
      {skills.map((skillCategory, index) => (
        <Box key={index} sx={{ mb: 4 }} component={motion.div} variants={containerVariants}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            {skillCategory.category}
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {skillCategory.items.map((skill, idx) => (
              <Grid item key={idx} component={motion.div} variants={itemVariants}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <IconButton 
                    component={motion.div} 
                    whileHover={hoverEffect} 
                    sx={{ 
                      p: 1, 
                      borderRadius: "8px", 
                      transition: "transform 0.3s ease-in-out", 
                      "&:hover": { bgcolor: "rgba(237,75,130,0.1)" } 
                    }}
                    aria-label={skill.name}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      width="40px" 
                      height="40px" 
                      loading="lazy" 
                      style={{ borderRadius: "4px" }} 
                    />
                  </IconButton>
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
