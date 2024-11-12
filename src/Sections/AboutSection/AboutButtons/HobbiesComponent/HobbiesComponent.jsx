import { Grid2, Box, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Import motion from framer-motion
import hobbies from '../../../../Data/hobbies.json';

const HobbiesComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Grid2 container pb={9} justifyContent={"center"}>
      <Grid2
        container
        py={3} px={{ xs: 2, sm: 3, md: 5 }}
        bgcolor={"#333333"} borderRadius={3}
        alignContent={"center"} alignItems={"center"}
        spacing={{ xs: 1.5, sm: 3, md: 5 }}
      >
        {hobbies.map((hobby, index) => (
        // <AnimatePresence>
          (expandedIndex === null || expandedIndex === index) && (
            <motion.div
              initial={{ opacity: 1, x: 0 }} // Starting state
              animate={{ opacity: 1, x: "0%" }} // Animate to this state
              exit={{ opacity: 0, x: -20 }} // Exit state
              transition={{ duration: 10 }} // Duration of transition
            >
              <HobbiesIcon
                // key={index}
                hobby={hobby}
                isExpanded={expandedIndex === index}
                onExpand={() => handleExpand(index)}
              />
            </motion.div>
          )
        // </AnimatePresence>
        ))}
      </Grid2>
    </Grid2>
  );
};

const HobbiesIcon = ({ hobby, isExpanded, onExpand }) => {
  return (
    <Tooltip title={hobby.name} placement="top" arrow>
      <motion.div
        onClick={onExpand}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        // initial={{ opacity: 1, x: "100%" }} // Starting state
        // animate={{
        //   x: isExpanded ? "0%" : 0, // Slide to the end if expanded
        // }}
        // transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: 0 }}  // Start position at its current location
          animate={{
            x: isExpanded ? "0%" : "0%",  // Move to left end when expanded
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}  // Smooth transition
        >
          <Box
            sx={{
              p: { xs: 1.5, sm: 1.5, md: 1.7, lg: 2 },
              bgcolor: "#00000f",
              borderRadius: 2,
              cursor: "pointer",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: !isExpanded ? "scale(1.05)" : "none",
              },
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.75rem" },
                transition: "transform 0.4s ease",
                transform: isExpanded ? "none" : "scale(1)",
                pr: isExpanded ? 0 : 0,
              }}
            >
              {hobby.emoji}
            </Box>
          </Box>
        </motion.div>
        
        {isExpanded && (
          <motion.div
            style={{ marginLeft: "16px" }}
            initial={{ opacity: 0 }} // Initial state for the description
            animate={{
              opacity: 1, // Fade-in the text when expanded
            }}
            transition={{ duration: 0.5, delay: 0.3 }} // Delay for smooth appearance
          >
            <Typography
              variant="body1"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              }}
            >
              {hobby.description}
            </Typography>
          </motion.div>
        )}
      </motion.div>
    </Tooltip>
  );
};

export default HobbiesComponent;
