import React from "react";


// MUI Imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
     Remove Paper
    </Box>
  );
}