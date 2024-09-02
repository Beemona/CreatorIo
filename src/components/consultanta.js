import * as React from 'react';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const HighlightedTextPink = styled('span')({
  color: '#D92898',
});

const HighlightedTextPurple = styled('span')({
  color: '#6B126B', 
});

const LightButton = styled(Button)({
  color: '#B7472A',
  backgroundColor: "#FFF2E5",
  fontFamily: 'Poppins',
  textTransform: 'none',
  width: '28.2vh',
  height: '8.3vh',
  fontSize: '2.4vh',
  fontWeight: '600',
  borderRadius: '0',
  justifyContent: 'center',
  '&:hover': {
    color: '#FFF2E5',
    backgroundColor: "#6B126B",
    borderWidth: '0.3vh',
  },
});

const DarkButton = styled(Button)({
  color: '#B7472A',
  backgroundColor: "#FFD5AB",
  fontFamily: 'Poppins',
  textTransform: 'none',
  width: '28.2vh',
  height: '8.3vh',
  fontSize: '2.4vh',
  fontWeight: '600',
  borderRadius: '0',
  justifyContent: 'center',
  '&:hover': {
    color: '#FFF2E5',
    backgroundColor: "#D92898",
    borderWidth: '0.3vh',
  },
});


const HighlightedTypography = ({ text, highlights, highlightColor = 'purple' }) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
  const parts = text.split(regex);
  const HighlightedText =  highlightColor === 'purple' ? HighlightedTextPurple : HighlightedTextPink;


  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mb: 2,
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '3.6vh',
        color: '#3C3E42',
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
const ThreeContainers =  ({ title1, title2, title3, text1, text2, text3 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '70vh', // Adjust as needed
        pt: 4,
        pb: 0,
        pr: 4,
        pl: 4
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10, // Space between containers
        }}
      >
        <Box
          sx={{
            width: '47.2vh', // Fixed width, ensure it's correct
            padding: 2,
            background: 'linear-gradient(to bottom, #FFE0B5, #F9ECDB)', // Gradient from top to bottom
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center vertically
            height: '44.6vh', // Fixed height to demonstrate vertical centering
            overflow: 'auto', // Allows scrolling if content overflows
          }}
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              mb: 2,
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '3.2vh',
              color: '#2CBBAA',
              textDecoration: 'none',
              whiteSpace: 'normal',
              pb: 5,
            }}
          >
            {title1}
          </Typography>
          <Typography
            variant="h6"
            component="a"
            sx={{
              mb: 2,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '2vh',
              color: '#48B2FF',
              textDecoration: 'none',
              ml: 5,
              mr: 5,
              whiteSpace: 'normal', // Allows text to wrap normally
            }}
          >
            {text1}
          </Typography>
        </Box>

        <Box
          sx={{
            width: '47.2vh', // Fixed width, ensure it's correct
            padding: 2,
            background: 'linear-gradient(to bottom, #FFE0B5, #F9ECDB)', // Gradient from top to bottom
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center vertically
            height: '44.6vh', // Fixed height to demonstrate vertical centering
            overflow: 'auto', // Allows scrolling if content overflows
          }}
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              mb: 2,
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '3.2vh',
              color: '#2CBBAA',
              textDecoration: 'none',
              whiteSpace: 'normal',
              pb: 5,
            }}
          >
            {title2}
          </Typography>
          <Typography
            variant="h6"
            component="a"
            sx={{
              mb: 2,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '2vh',
              color: '#48B2FF',
              textDecoration: 'none',
              ml: 5,
              mr: 5,
              whiteSpace: 'normal', // Allows text to wrap normally
            }}
          >
            {text2}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '47.2vh', // Fixed width, ensure it's correct
            padding: 2,
            background: 'linear-gradient(to bottom, #FFE0B5, #F9ECDB)', // Gradient from top to bottom
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center vertically
            height: '44.6vh', // Fixed height to demonstrate vertical centering
            overflow: 'auto', // Allows scrolling if content overflows
          }}
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              mb: 2,
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '3.2vh',
              color: '#2CBBAA',
              textDecoration: 'none',
              whiteSpace: 'normal',
              pb: 5,
            }}
          >
            {title3}
          </Typography>
          <Typography
            variant="h6"
            component="a"
            sx={{
              mb: 2,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '2vh',
              color: '#48B2FF',
              textDecoration: 'none',
              ml: 5,
              mr: 5,
              whiteSpace: 'normal', // Allows text to wrap normally
            }}
          >
            {text3}
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};


const SectionContainer = ({ title, highlights, text }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 10,
        textAlign: 'center',
      }}
    >
      <HighlightedTypography text={title} highlights={highlights} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mb: 2,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '2vh',
          color: '#3C3E42',
          textDecoration: 'none',
          ml: 10,
          mr: 10,
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Container>
  );
};
const SectionContainerBox = ({ title, highlights, text }) => {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 6,
          textAlign: 'center',
        }}
      >
        <HighlightedTypography text={title} highlights={highlights} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mb: 2,
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '2vh',
            color: '#3C3E42',
            textDecoration: 'none',
            ml: 10,
            mr: 10,
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Container>
    );
  };
const ScheduleButton = styled(Button)({
  color: '#F663F1',
  fontFamily: 'Poppins',
  borderColor: '#F663F1',
  textTransform: 'none',
  borderWidth: '0.3vh',
  borderRadius: '1.4vh', // Add rounded corners
  width: '35.4vh',
  height: '7.2vh',
  fontSize: '2.4vh',
  fontWeight: '600',
  '&:hover': {
    color: '#B7472A',
    borderColor: '#B7472A',
    borderWidth: '0.3vh',
  },
});


const Consultanta = () => {
  const navigate = useNavigate();

  const coachingRedirect = () => {
    navigate('/');
  };

  const reconectareRedirect= () => {
    navigate('/reconectare');
  };

  const bookingRedirect = () => {
    navigate('/calendar')
  }
    return (
      <div className="App">
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '86vh',
            backgroundImage: 'url(/consultanta-main-img.png)',
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
            <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '9.6vh',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
Consultanță
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mb: 2,
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '3.4vh',
                    color: '#D92898',
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
                  justifyContent: 'right',
                  alignItems: 'flex-end', // Align to the left
                  textAlign: 'right', // Align text to the left
                   // Add some margin to separate the two containers
                  pt: 10
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mb: 2,
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '3.6vh',
                    color: '#D92898',
                    textDecoration: 'none',

                  }}
                >
                 Leadershipul înseamnă rezolvarea problemelor.
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mb: 2,
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '3vh',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    textAlign: 'right',
                  }}
                >
                   Ești gata să devii lider?
                </Typography>
              </Container>
            </Container>
          </Box>
        </Box>  
        <Box sx={{ bgcolor: '#FFD5AB', width: '100%', height: '6.4vh' }} /> 
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            height: '10vh', // Adjust height as needed, e.g., full viewport height
            pt: 0
          }}>
    
  </Box>
  
        <SectionContainer
          title="Expertiză în Managementul Proiectelor"
          highlights={['Expertiză în Managementul Proiectelor']}
          highlightColor='pink'
          text="Pe parcursul celor peste 12 ani de activitate, am gestionat proiecte de diferite dimensiuni și complexități, adaptându-ma cu <br/> succes la nevoile specifice ale fiecărui client.<br/><br/> Metodologia robustă de management al proiectelor, folosind Agile, asigură livrarea la timp, respectarea bugetului și <br/> îndeplinirea standardelor de calitate."
        />
        <SectionContainer
          title="Optimizarea Agile"
          highlights={['Optimizarea Agile']}
          highlightColor='pink'
          text="Prin analiza detaliată și reingineria proceselor de business, ajut organizațiile să își optimizeze operațiunile, să reducă costurile <br/> și să îmbunătățească eficiența. <br/><br/> Abordarea sistematică identifică și implementează cele mai bune practici pentru a crea procese agile și sustenabile."
        />
        <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignItems: 'center', // Align to the left
                textAlign: 'center', // Align text to the left
                bgcolor: '#FFE0B5',
                width: '100%',
                height: '100vh',
                mt: 20,
                mb: 12,  
                }}>
                <SectionContainerBox
          title="Structură și Logică"
          highlights={['Structură și Logică']}
          highlightColor='purple'
          text="Experiența acumulată mi-a format o abordare metodică și rațională, esențială pentru succesul în IT."
        />
         <SectionContainerBox
          title="Expertiză Diversificată"
          highlights={['Expertiză Diversificată']}
          highlightColor='purple'
          text=" Parcursul meu profesional îmbină dezvoltarea tehnică cu managementul și analiza, oferindu-mi o perspectivă <br/> completă asupra proiectelor IT."
        />
        <SectionContainerBox
          title="Rezultate Concrete"
          highlights={['Rezultate Concrete']}
          highlightColor='purple'
          text=" Am demonstrat capacitatea de a livra proiecte de succes, adaptându-mă rapid la cerințele și provocările specifice <br/> fiecărui proiect."
        />
         <Typography
        variant="h3"
        noWrap
        component="a"
        sx={{
          mb: 2,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '3.2vh',
          color: '#6B126B',
          textDecoration: 'none',
          ml: 10,
          mr: 10,
          pt:5,
          pb:6,
          fontStyle: "italic"
        }}
      >
Vă invit să descoperiți cum pot contribui la succesul proiectelor dumneavoastră <br/> prin experiența și cunoștințele mele în domeniul IT.        </Typography>
                <ScheduleButton 
                sx={{
                  color: '#6B126B',
                  borderColor: '#6B126B',
                  '&:hover': {
                    color: '#D92898',
                    borderColor: '#D92898'},
                }} 
                variant="outlined">Dezvoltă-te cu mine!</ScheduleButton>
              </Box>
              <Box>
  <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        noWrap
        component="a"
        sx={{
          mb: 2,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '3.2vh',
          color: '#6B126B',
          textDecoration: 'none',
          ml: 10,
          mr: 10,
          pt: 10,
        }}
      >
        Cu peste 25  ani de experiență în IT si peste 12 ani in managementul proiectelor și procesele de <br/> business, ofer expertiză și soluții personalizate pentru a sprijini companiile în atingerea <br/> obiectivelor lor strategice.
        </Typography>
    </Container>
  </Box>

  <Box>
  <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        noWrap
        component="a"
        sx={{
          mb: 2,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '3.2vh',
          color: '#D92898',
          textDecoration: 'none',
          ml: 10,
          mr: 10,
          pt: 14,
          pb: 20,
        }}
      >
        Angajamentul meu față de excelență și inovație ne permite să transformăm provocările în <br/> oportunități de creștere și dezvoltare.</Typography>
    </Container>
  </Box>
              <Box 
  sx={{ 
    bgcolor: '#FFD5AB', 
    maxWidth: '100%', 
    height: '17.5vh',  
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', // Center items vertically
    pr: 9, 
    pl: 9 
  }}
>
  {/* Left side: Texts */}
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', // Center the text box vertically within this box
      justifyContent: 'center', // Center items vertically within this box
      height: '100%' // Ensure the text box takes full height of the parent box
    }}
  >
     <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start' // Align text to the left within this box
      }}
    >
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mb: 0,
        mt: 3,
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '2.4vh',
        color: '#EB9788',
        textDecoration: 'none',
      }}
    >
      Nu ai găsit ce căutai?
    </Typography>
    <HighlightedTypography
      variant="body1"
      noWrap
      component="a"
      sx={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '3.2vh',
        letterSpacing: '0.10em',
        color: '#DB8530',
        textDecoration: 'none',
      }}
      text="Descoperă întreaga gamă de servicii TU CREATOR:"
      highlights={['TU CREATOR:']}
      highlightColor="purple"
    />  
</Box>
  </Box>

  {/* Right side: Buttons */}
  <Box 
    sx={{ 
      display: 'flex', 
      gap: 8, 
      alignItems: 'center' // Center buttons vertically within this box
    }}
  >
    <LightButton 
      variant="contained" 
      color="primary" 
      sx={{ display: 'none' }}
    >
      Button 1
    </LightButton>
    <LightButton variant="contained" color="primary"onClick={reconectareRedirect}>Reconectare</LightButton>
    <LightButton variant="contained" color="primary" onClick={coachingRedirect}>Coaching</LightButton>
  </Box>
</Box>
<Box 
  sx={{ 
    bgcolor: '#FFF2E5', 
    maxWidth: '100%', 
    height: '17.5vh',  
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', // Center items vertically
    pr: 9, 
    pl: 9 
  }}
>
  {/* Left side: Texts */}
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', // Center the text box vertically within this box
      justifyContent: 'center', // Center items vertically within this box
      height: '100%' // Ensure the text box takes full height of the parent box
    }}
  >
     <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start' // Align text to the left within this box
      }}
    >
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mb: 0,
        mt: 3,
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '2.4vh',
        color: '#EB9788',
        textDecoration: 'none',
      }}
    >
      De asemenea,
    </Typography>
    <HighlightedTypography
      variant="body1"
      noWrap
      component="a"
      sx={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '3.2vh',
        letterSpacing: '0.10em',
        color: '#DB8530',
        textDecoration: 'none',
      }}
      text="Nu uita să explorezi universul EU CREATOR:"
      highlights={['EU CREATOR:']}
      highlightColor="pink"
    />  
</Box>
  </Box>

  {/* Right side: Buttons */}
  <Box 
    sx={{ 
      display: 'flex', 
      gap: 8, 
      alignItems: 'center' // Center buttons vertically within this box
    }}
  >
    <DarkButton variant="contained" color="primary" >Joaca vieții</DarkButton>
    <DarkButton variant="contained" color="primary">Ateliere</DarkButton>
    <DarkButton variant="contained" color="primary">De-ale gurii</DarkButton>
  </Box>
</Box>
<Box  
  sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center' ,
        justifyContent: 'center',
        backgroundColor: '#FFD5AB',
        height: '22vh',
      }}
    >
      <WhatsAppIcon href='#' sx={{ fontSize: '5.7vh',  mt:10,}}></WhatsAppIcon>
      <LinkedInIcon href='#' sx={{ fontSize: '5.7vh', mt:10,}}></LinkedInIcon>
      <InstagramIcon href='#' sx={{ fontSize: '5.7vh', mt:10,}}></InstagramIcon>
    </Box>
      </div>
    );
}

export default Consultanta;