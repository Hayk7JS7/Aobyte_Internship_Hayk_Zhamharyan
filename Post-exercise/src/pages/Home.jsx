import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';

const Home = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/posts');
    }, 2000);

    return () => {
      clearTimeout(timer);
      setShowMessage(false);
    };
  }, [navigate]);

return (
    <Box sx={{marginTop: '8rem', textAlign: 'center'}}>
        <Typography variant="h3">
            {showMessage && 'Under Construction'}
        </Typography>
        <ConstructionIcon fontSize='large' color='main' />
    </Box>
)
};

export default Home;
