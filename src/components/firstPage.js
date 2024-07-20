import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Define a styled span for the special word
const HighlightedText = styled('span')({
  color: '#F663F1',
});

const CustomTypography = ({ text, highlights }) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#"
      sx={{
        mb: 2,
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '36px',
        color: '#B7472A',
        textDecoration: 'none',
      }}
    >
     {parts.map((part, index) =>
        highlights.some(highlight => part.toLowerCase() === highlight.toLowerCase()) ? (
          <HighlightedText key={index}>{part}</HighlightedText>
        ) : (
          part
        )
      )}
    </Typography>
  );
};

const ScheduleButton = styled(Button)({
  color: '#F663F1',
  fontFamily: 'Poppins',
  borderColor: '#F663F1',
  textTransform: 'none',
  borderWidth: '3px',
  borderRadius: '14px', // Add rounded corners
  width: '344px',
  height: '67px',
  fontSize: '20px',
  fontWeight: '600',
  '&:hover': {
    color: '#B7472A',
    borderColor: '#B7472A',
    borderWidth: '3px',
    fontSize: '20px',
    fontWeight: '600',
  },
});
function FirstPage() {
  return (
    <div className="App">
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '86vh',
          backgroundImage: 'url(/firstPage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'flex-start', // Align to the left
            paddingLeft: '0', // Adjust the left padding to position content
            pl: 0,
            ml: 0
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left',
              alignItems: 'left',
              height: '100%',
              alignItems: 'flex-start', // Align to the left
              textAlign: 'left', // Align text to the left
              pt: 25
            }}
          >
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                alignItems: 'left',
                mb: 4,
              }}
            >
          <Box
            component="img"
            src="/Coaching.svg"
            alt="First Page"
            sx={{
              display: { xs: 'none', md: 'flex', width: '40%' },
            }}
          />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '34px',
                  color: '#FFD5AB',
                  textDecoration: 'none',
                }}
              >
                cu Mirela Iancu 
              </Typography>
            </Container>
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                alignItems: 'flex-start', // Align to the left
                textAlign: 'left', // Align text to the left
                mt: 4, // Add some margin to separate the two containers
                pt: 15
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '32px',
                  color: '#FFFFFF',
                  textDecoration: 'none'
                }}
              >
                Incepe călătoria ta către dezvoltarea personală. 
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#FFD5AB',
                  textDecoration: 'none'
                }}
              >
                 Descoperă programe de coaching personalizate, concepute să te potențeze și să te inspire.
              </Typography>
            </Container>
          </Container>
        </Box>
      </Box>  <Box sx={{ bgcolor: '#FFD5AB', width: '100%', height: '64px' }} />
      <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left
        pt: 14
      }}>
    
    <CustomTypography
      text="Descoperă-ți scopul și împlinirea"
      highlights={['scopul', 'împlinirea']}
    />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#B7759E',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10
                }}
              >
Înțelegerea scopului tău este primul pas către o viață împlinită. Acordă-ți timp pentru a reflecta asupra a ceea ce contează cu<br/>  adevărat pentru tine,identifică-ți pasiunile și aliniază-ți acțiunile cu valorile tale fundamentale.              </Typography>
              </Container>
              <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left
        pt: 14
      }}>
    
    <CustomTypography
      text="Încărcă-te cu bunătate față de tine"
      highlights={['bunătate']}
    />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#B7759E',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10
                }}
              >
                Îmbrățișează-ți personalitatea și stilul unic. Celebrează ceea ce te face diferit și exprimă-te autentic. Încrederea vine din a fi fidel <br/>propriei persoane, nu din a te conforma așteptărilor altora.
</Typography>
              </Container>
             
              <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left
        pt: 14
      }}>
    
    <CustomTypography
      text="Reclamă-ți energia"
      highlights={['energia']}
    />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#B7759E',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10
                }}
              >
Protejează-ți energia stabilind limite sănătoase și prioritizând activitățile care te revigorează. Implică-te în practici care îți refac <br/> spiritul, cum ar fi meditația, exercițiile fizice sau hobby-urile.             
</Typography> </Container>
              <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left
        pt: 14
      }}>
    
    <CustomTypography
      text="Restabilește echilibrul și pacea"
      highlights={['echilibrul', 'pacea']}
    />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#B7759E',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10
                }}
              >
Tinde spre o viață echilibrată gestionându-ți eficient timpul și asigurându-te că ai un echilibru sănătos între muncă și viața <br/> personală. Fă-ți timp pentru relaxare, relații și auto-îngrijire pentru a menține pacea interioară.     </Typography>         </Container>
     <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left
        pt: 14
      }}>
    
    <CustomTypography
      text="Construiește încrederea de neclintit"
      highlights={['încrederea']}
    />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#B7759E',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10
                }}
              >
Dezvoltă încrederea stabilindu-ți și atingând obiective mici, ieșind din zona ta de confort și învățând din experiențele tale. Ai <br/>încredere în abilitățile tale și crede în potențialul tău de a depăși provocările.</Typography>
              </Container>
              <Container
               sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
        
                alignItems: 'center', // Align to the left
                textAlign: 'center', // Align text to the left
                pt: 14
              }}>
                <CustomTypography
      text="~ Descoperă-te prin Life Coaching ~"
      highlights={['Life Coaching ~']}
    />
     <ScheduleButton variant="outlined">Hai să ne cunoaștem!</ScheduleButton>
              </Container>
              <Box sx={{ bgcolor: '#FFD5AB', width: '100%', height: '750px', mt: 16, mb: 16 }} />

             
              </div>
              
  );
}

export default FirstPage;
