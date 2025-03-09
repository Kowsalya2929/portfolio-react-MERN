import React from "react";
import { Box, Typography, Container, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import fsd from '../assets/fsd.pdf'
import github from '../assets/github.pdf'
import react from '../assets/reactjs.pdf'
import jwt from '../assets/jwt.pdf'
import reactiq1 from '../assets/riq1.pdf'
import reactiq2 from '../assets/riq2.pdf'

const educationData = [
  { school: "Kulathupalayam Govt Higher Secondary School", date: "2018-2019", degree: "10th SSLC", percentage: "76.4%" },
  { school: "Kulathupalayam Govt Higher Secondary School", date: "2020-2021", degree: "12th HSC", percentage: "85.315%" },
  { school: "Sri Krishna Adithya College of Arts and Science", date: "2021-2024", degree: "B.Sc. Computer Science", percentage: "84.34%" },
];

const certificationsData = [
  {
    title: "30 Days Full Stack Development Bootcamp",
    date: "Oct 16 to Nov 25, 2024",
    projects: [
      "Portfolio using JS",
      "Form Validation in JS",
      "Language Translator",
      "Text to Speech",
      "Random User Generator",
      "Fetch API Data",
    ],
  },
  {
    title: "21 Days React.js Masterclass",
    date: "Dec 04 to Dec 30, 2024",
    projects: [
      "Simple E-commerce-web",
      "Simple CRUD Social-media-web",
    ],
  },
];

const certificateLinks = [
  { title: "30 Days MasterClass in Full Stack Development", link: fsd, date: "Oct 16 to Nov 25, 2024" },
  { title: "1 hour Webinar in Advanced Branching Strategies in GitHub", link: github ,date: "Nov 17th 2024" },
  { title: "2 hour BooTcamp in Scalable User Authentication System with Node.js and JWT", link: jwt ,date: "Dec 22th 2024"},
  { title: "21 Days MasterClass in React.js", link: react ,date: "Dec 04th to Dec 30th  2024"},
  { title: "React Advanced Interview Questions by CodeChef", link: reactiq1 ,date: "31st Jan 2025"},
  { title: "React Interview Questions by CodeChef", link: reactiq2 ,date: "18th Feb 2025"}, 
];

const Education = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", color: "#ed4b82", textShadow: "1px 1px 2px rgba(0,0,0,0.2)", mb: 4 }}>
          Education
        </Typography>
      </motion.div>
      {educationData.map((edu, index) => (
        <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
          <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#ed4b82", fontWeight: "bold" }}>{edu.date}</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{edu.degree} - {edu.percentage}</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>{edu.school}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", color: "#ed4b82", mt: 5, mb: 3 }}>
          E-Certifications with Projects List
        </Typography>
      </motion.div>
      {certificationsData.map((cert, index) => (
        <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
          <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#ed4b82", fontWeight: "bold" }}>{cert.title}</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "gray" }}>{cert.date}</Typography>
              <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                {cert.projects.map((project, idx) => (
                  <Typography key={idx} component="li" variant="body2" sx={{ color: "black" }}>{project}</Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", color: "#ed4b82", mt: 5, mb: 3 }}>
          View E-Certificates
        </Typography>
      </motion.div>
      {certificateLinks.map((cert, index) => (
        <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
          <Card sx={{ mb: 2, borderRadius: 3, boxShadow: 3, overflow: "hidden", textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>{cert.title}</Typography>
              <Typography variant="body2" sx={{color:'gray',my:1}}>Date : {cert.date}</Typography>
              <Button variant="contained" color="primary" href={cert.link} target="_blank" sx={{ mt: 1 }}>
                View Certificate
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Container>
  );
};

export default Education;