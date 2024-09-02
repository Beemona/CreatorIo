import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Customizable button component
const RedirectButton = styled(Button)(({ textColor, borderColor, bgColor, hoverTextColor, hoverBorderColor, hoverBgColor }) => ({
    color: textColor || '#3C3E42',
    fontFamily: 'Poppins',
    borderColor: borderColor || '#3C3E42',
    backgroundColor: bgColor || 'transparent', // Ensure default is transparen
    textTransform: 'none',
    borderWidth: '0.5vh', 
    borderStyle: 'solid', // Explicitly set border style to solid
    borderRadius: '1.4vh',
    width: '35.4vh',
    height: '7.2vh',
    fontSize: '2.4vh',
    fontWeight: '600',
    '&:hover': {
      color: hoverTextColor || '#B7472A',
      borderColor: hoverBorderColor || '#B7472A',
      backgroundColor: hoverBgColor || 'transparent',
      borderWidth: '0.5vh', 
      borderStyle: 'solid', // Ensure hover border style is solid
    },
  }));

const MainPage = ({ hideHeaderFooter }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/mainpage-img.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            width: '51.2vh',
            height: '67.7vh',
            alignItems: 'center',
            textAlign: 'center', 
            padding: '2vh', 
            backgroundColor: '#EDF5F6', 
            borderRadius: '1.4vh',
            borderStyle: 'solid',        
            borderWidth: '2vh',          
            borderColor: '#9DC9FA',
            borderBottom: '0',
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#B4A393', marginBottom: '1.5vh' }}>
            Tu Creator
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Poppins', color: '#B4A393', marginBottom: '3vh' }}>
            Descopera-te pe tine!
          </Typography>
          <RedirectButton  
            textColor="#FF6A0D" 
            borderColor="#FF6A0D" 
            hoverTextColor="#FFFFFF" 
            hoverBgColor="#FF6A0D"
            hoverBorderColor="FF6A0D"
            onClick={() => navigate('/coaching')}
          >
            Coaching
          </RedirectButton>
          <RedirectButton  
            textColor="#46C1B0" 
            borderColor="#46C1B0" 
            hoverTextColor="#FFFFFF" 
            hoverBgColor="#46C1B0"
            hoverBorderColor="#46C1B0"
            onClick={() => navigate('/reconnectare')}
          >
            Reconectare
          </RedirectButton>
          <RedirectButton  
            textColor="#6B126B" 
            borderColor="#6B126B" 
            hoverTextColor="#FFFFFF" 
            hoverBgColor="#6B126B"
            hoverBorderColor="#6B126B"
            onClick={() => navigate('/consultanta')}
          >
            Consultanta
          </RedirectButton>
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            width: '51.2vh',
            height: '67.7vh',
            alignItems: 'center',
            textAlign: 'center', 
            padding: '2vh', 
            backgroundColor: '#EDF5F6', 
            borderRadius: '1.4vh',
            borderStyle: 'solid',        
            borderWidth: '2vh',          
            borderColor: '#C1B4AE',      
            borderBottom: '0',
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#6784C7', marginBottom: '1.5vh' }}>
            Eu Creator
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Poppins', color: '#6784C7', marginBottom: '3vh' }}>
            Descopera-ma pe mine!
          </Typography>
          <RedirectButton  
            textColor="#F25858" 
            borderColor="#F25858" 
            hoverTextColor="#FFFFFF" 
            hoverBgColor="#F25858"
            hoverBorderColor="F25858"

            onClick={() => navigate('/joaca-vietii')}
          >
            Joaca Vietii
          </RedirectButton>
          <RedirectButton 
            textColor="#B4A393" 
            borderColor="#B4A393" 
            hoverTextColor="#B4A393" 
            hoverBorderColor="#B4A393"
            disabled
          >
            De-ale gurii
          </RedirectButton>
        </Box>
    </Box>
  );
};

export default MainPage;
