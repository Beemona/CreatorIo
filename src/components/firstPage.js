import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Define a styled span for the special word
const HighlightedTextOrange = styled('span')({
  color: '#FF6A0D',
});

const HighlightedTextPink = styled('span')({
  color: '#C95F5F', // Orange highlight color
});

const HighlightedTextBrown = styled('span')({
  color: '#B7472A', // Brown highlight color
});

const HighlightedTypography = ({ text, highlights, highlightColor = 'orange' }) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
  const parts = text.split(regex);
  const HighlightedText = highlightColor === 'pink' ? HighlightedTextPink : HighlightedTextOrange;


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
          fontWeight: 500,
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
  color: '#3C3E42',
  fontFamily: 'Poppins',
  borderColor: '#3C3E42',
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
    backgroundColor: "#FF6A0D",
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
    backgroundColor: "#C95F5F",
    borderWidth: '0.3vh',
  },
});

const FirstPage = () => {
  const navigate = useNavigate();

  const reconectareRedirect = () => {
    navigate('/reconectare');
  };

  const consultantaRedirect = () => {
    navigate('/consultanta');
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
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '3.4vh',
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
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '3.2vh',
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
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '2vh',
                  color: '#FFD5AB',
                  textDecoration: 'none'
                }}
              >
                 Descoperă programe de coaching personalizate, concepute să te potențeze și să te inspire.
              </Typography>
            </Container>
          </Container>
        </Box>
      </Box>  
      <Box sx={{ bgcolor: '#FFD5AB', width: '100%', height: '6.4vh' }} />
 
              <SectionContainer
         title="Descoperă-ți scopul și împlinirea"
         highlights={['']}
        text="Înțelegerea scopului tău este primul pas către o viață împlinită. Acordă-ți timp pentru a reflecta asupra a ceea ce contează cu<br/>  adevărat pentru tine,identifică-ți pasiunile și aliniază-ți acțiunile cu valorile tale fundamentale."
      />
              <SectionContainer
         title="Încărcă-te cu bunătate față de tine"
         highlights={['']}
        text="Îmbrățișează-ți personalitatea și stilul unic. Celebrează ceea ce te face diferit și exprimă-te autentic. Încrederea vine din a fi fidel <br/>propriei persoane, nu din a te conforma așteptărilor altora."
      />

<SectionContainer
         title="Reclamă-ți energia"
         highlights={['']}
        text="Protejează-ți energia stabilind limite sănătoase și prioritizând activitățile care te revigorează. Implică-te în practici care îți refac <br/> spiritul, cum ar fi meditația, exercițiile fizice sau hobby-urile.             "
      />
<SectionContainer
          title="Restabilește echilibrul și pacea"
          highlights={['']}
        text="Tinde spre o viață echilibrată gestionându-ți eficient timpul și asigurându-te că ai un echilibru sănătos între muncă și viața <br/> personală. Fă-ți timp pentru relaxare, relații și auto-îngrijire pentru a menține pacea interioară.     "
      />
              <SectionContainer
          title="Construiește încrederea de neclintit"
          highlights={['']}
          text="Dezvoltă încrederea stabilindu-ți și atingând obiective mici, ieșind din zona ta de confort și învățând din experiențele tale. Ai <br/>încredere în abilitățile tale și crede în potențialul tău de a depăși provocările.</Typography>"
          />
              <Container
               sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignItems: 'center', // Align to the left
                textAlign: 'center', // Align text to the left
                pt: 10
              }}>
                <HighlightedTypography
                text="~ Descoperă-te prin Life Coaching ~"
                highlights={['']}
    />
     <ScheduleButton variant="outlined" onClick={bookingRedirect}>Hai să ne cunoaștem!</ScheduleButton>
              </Container>

              <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignItems: 'center', // Align to the left
                textAlign: 'center', // Align text to the left
                bgcolor: '#FFD5AB',
                width: '100%',
                height: '75vh',
                mt: 12,
                mb: 12,  
                }}>
                <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 sx={{
                   mb: 2,
                   fontFamily: 'Poppins',
                   fontWeight: 400,
                   fontSize: '4.8vh',
                   letterSpacing: '0.20em',
                   color: '#C95F5F',
                   textDecoration: 'none',
                   ml: 10,
                   mr: 10,
                   pb: 9
                 }}>
                  Mindset Coaching
                </Typography>
                <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 sx={{
                   mb: 2,
                   fontFamily: 'Poppins',
                   fontWeight: 400,
                   fontSize: '2.4vh',
                   color: '#3C3E42',
                   textDecoration: 'none',
                   ml: 10,
                   mr: 10,
                   pb: 6
                 }}>
Împreună, ne vom confrunta cu fricile și anxietățile tale, transformându-le în oportunități de<br/> învățare și daruri pentru a te schimba în bine. 
                </Typography>
                <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 sx={{
                   mb: 2,
                   fontFamily: 'Poppins',
                   fontWeight: 400,
                   fontSize: '2.4vh',
                   color: '#3C3E42',
                   textDecoration: 'none',
                   ml: 10,
                   mr: 10,
                   pb: 6
                 }}>
                Vei crea schimbări pozitive, ceea ce înseamnă că poți trăi viața  într-un<br/> mod care să fie împlinitor, semnificativ, plin de bucurie și<br/> implinire.
                </Typography>
                <ScheduleButton 
                sx={{
                  color: '#3C3E42',
                  borderColor: '#3C3E42',
                  '&:hover': {
                    color: '#C95F5F',
                    borderColor: '#C95F5F'},
                }} 
                variant="outlined">Dezvoltă-te cu mine!</ScheduleButton>
              </Box>
              <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left

      }}>
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
                  ml: 10,
                  mr: 10
                }}
              >
Vrei să devii un lider mai bun?   
</Typography>
   <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '4.8vh',
                  color: '#FF6A0D',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10,
                  pb: 5
                }}
              >
Îmbunătățește-ți abilitățile de coach pentru conducere!   </Typography>
<Box
            component="img"
            src="/handshake-leadership.png"
            alt="First Page"
            sx={{
              display: { xs: 'none', md: 'flex', width: '11vh' },
            }}
          />
      </Container>
              <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 7,
        alignItems: 'center', // Align to the left
        textAlign: 'center', // Align text to the left

      }}>
              <HighlightedTypography
      text="Autocunoaștere"
      highlights={['Autocunoaștere']}
      highlightColor='orange'
    />
     <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mb: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '2vh',
                  color: '#3C3E42',
                  textDecoration: 'none',
                  ml: 10,
                  mr: 10
                }}
              >
   Ajută liderii să-și înțeleagă mai bine punctele forte și slăbiciunile, stilul de conducere și impactul pe care îl au asupra echipei și <br/>organizației.
   </Typography>
               </Container>

               <SectionContainer
          title="Setarea și atingerea obiectivelor"
          highlights={['Setarea și atingerea obiectivelor']}
          highlightColor='orange'
          text="Sprijină liderii în stabilirea unor obiective clare și realiste și în dezvoltarea unor planuri de acțiune pentru a le atinge."
          />
               <SectionContainer
          title="Dezvoltarea competențelor"
          highlights={['Dezvoltarea competențelor']}
          highlightColor='orange'
          text="Se concentrează pe îmbunătățirea abilităților de comunicare, delegare, gestionare a conflictelor și luare a deciziilor."
          />
               <SectionContainer
          title="Feedback și reflecție"
          highlights={['Feedback și reflecție']}
          highlightColor='orange'
          text="  Oferă un spațiu sigur pentru a primi feedback constructiv și pentru a reflecta asupra comportamentului și deciziilor anterioare.   "
          />
               <SectionContainer
          title="Sprijin și responsabilitate"
          highlights={['Sprijin și responsabilitate']}
          highlightColor='orange'
          text="Furnizează suport continuu și responsabilizare, ajutând liderii să rămână concentrați și motivați."
          />
          <ScheduleButton 
                sx={{
                  mt: 9,
                  mb: 12,
                  color: '#3C3E42',
                  borderColor: '#3C3E42',
                  '&:hover': {
                    color: '#FF6A0D',
                    borderColor: '#FF6A0D'},
                }} 
                variant="outlined">Progreamează o ședintă</ScheduleButton>
                
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
      highlightColor="brown"
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
    <LightButton variant="contained" color="primary" onClick={consultantaRedirect}>Consultanță</LightButton>
    <LightButton variant="contained" color="primary" onClick={reconectareRedirect}>Reconectare</LightButton>
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

export default FirstPage;
