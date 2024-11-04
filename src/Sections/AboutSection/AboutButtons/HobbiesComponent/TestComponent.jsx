import React from 'react';
import { Box } from '@mui/material';

const HorizontalScroll = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',         // enables horizontal scrolling
        whiteSpace: 'nowrap',      // keeps children on one line
        padding: 2,
      }}
    >
      {/* Example child elements */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 200,          // minimum width for each child
            height: 150,
            bgcolor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 1,                  // margin between items
          }}
        >
          Item {index + 1}
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScroll;
