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
  color: '#48B2FF',
});

const HighlightedTextGreen = styled('span')({
  color: '#2FCD4C', 
});

const HighlightedTextAqua = styled('span')({
  color: '#318FD3', 
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
    backgroundColor: "#318FD3",
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
    backgroundColor: "#2FCD4C",
    borderWidth: '0.3vh',
  },
});


const HighlightedTypography = ({ text, highlights, highlightColor = 'green' }) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
  const parts = text.split(regex);
  const HighlightedText =  highlightColor === 'green' ? HighlightedTextGreen : HighlightedTextAqua;


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
        color: '#2CBBAA',
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
              color: '#3C3E42',
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
              color: '#3C3E42',
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
              color: '#3C3E42',
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


const Reconectare = () => {
  const navigate = useNavigate();

  const coachingRedirect = () => {
    navigate('/');
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
            backgroundImage: 'url(/reconectare-main-page.png)',
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
                    color: '#FFE0B5',
                    textDecoration: 'none',
                    textShadow: '4px 4px 4px #0E3923',
                  }}
                >
Reconectare
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
                    color: '#FFFFFF',
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            height: '20vh', // Adjust height as needed, e.g., full viewport height
            pt: 10
          }}>
    <Box
      component="img"
      src="/reconectare-title.svg"
      alt="First Page"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '50%',
      }}
    />
  </Box>
        <SectionContainer
          title="Descoperă Puterea Respirației Conștiente"
          highlights={['']}
          text="Te-ai gândit vreodată cât de profundă poate fi puterea unui simplu respirație? Descoperă tehnicile de respirație conștientă care </br> îți vor transforma viața, reducând stresul, îmbunătățindu-ți sănătatea și aducându-ți o stare de bine pe care nu ai mai </br> experimentat-o până acum."
        />
        <SectionContainer
          title="Ce Vei Experimenta"
          highlights={['']}
          text="Implicarea activă în tehnici de respirație conștientă nu înseamnă doar a respira; înseamnă a trăi fiecare inspirație și expirație </br> cu o conștientizare deplină. Îți vei simți corpul relaxându-se, mintea liniștindu-se și vei descoperi o nouă conexiune cu tine însuți."
        />
        <ThreeContainers 
        title1='Respirația Profundă' 
        text1='Învață cum să respiri profund, utilizând întreaga capacitate a plămânilor, pentru a aduce mai mult oxigen în corpul tău și a elimina toxinele.'
        title2='Respirația Alternativă' 
        text2='O tehnică ce aduce echilibru și armonie între emisferele cerebrale, perfectă pentru momentele de dezechilibru emoțional.'
        title3='Respirația 4-7-8' 
        text3='O metodă simplă și eficientă pentru relaxare rapidă, ideală înainte de culcare pentru a asigura un somn profund și odihnitor.'
        />
        <SectionContainer
          title="Cum Poți Începe"
          highlights={['']}
          text="Nu trebuie să fii un expert pentru a beneficia de tehnicile de respirație conștientă. Tot ce ai nevoie este puțin timp și dorința de a </br> explora ceva nou. Începe cu câteva minute pe zi și observă cum se schimbă starea ta de bine."
        />
        <SectionContainer
          title="Alege Să Trăiești Conștient"
          highlights={['']}
          text="Transformă-ți viața cu puterea respirației conștiente. Nu lăsa stresul și agitația să îți dicteze starea de bine. Respirația conștientă </br> este cheia pentru o viață mai echilibrată, mai fericită și mai sănătoasă. Începe acum și descoperă beneficiile unei practici </br> simple dar extrem de eficiente."
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
                height: '80vh',
                mt: 20,
                mb: 12,  
                backgroundImage: `url('/meditation-left.png'), url('/meditation-right.png')`,
                backgroundPosition: 'left center, right center',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundSize: 'auto, auto',
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
                   color: '#318FD3',
                   textDecoration: 'none',
                   ml: 10,
                   mr: 10,
                   pb: 9
                 }}>
                  Meditație
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
Descoperă meditațiile care îți vor transforma complet percepția, implicând <br/> toate simțurile tale: mirosul, gustul, auzul, văzul și atingerea. 
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
Nu este vorba doar despre a sta și a observa – te vei mișca, vei simți și vei <br/> experimenta viața în moduri noi și profunde. 
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
Permite-ți să trăiești fiecare moment cu intensitate și să descoperi o <br/> conexiune mai profundă cu tine însuți și lumea din jur.
                </Typography>
                <ScheduleButton 
                sx={{
                  color: '#3C3E42',
                  borderColor: '#3C3E42',
                  '&:hover': {
                    color: '#318FD3',
                    borderColor: '#318FD3'},
                }} 
                variant="outlined">Dezvoltă-te cu mine!</ScheduleButton>
              </Box>
              <SectionContainer
          title="Ești gata să intri în lumea reconectării?"
          highlights={['']}
          text="Nu trebuie să fii un expert pentru a beneficia de tehnicile de respirație conștientă. Tot ce ai nevoie este puțin timp și dorința de a </br> explora ceva nou. Începe cu câteva minute pe zi și observă cum se schimbă starea ta de bine."
        />
        <ScheduleButton 
                sx={{
                  color: '#3C3E42',
                  borderColor: '#3C3E42',
                  '&:hover': {
                    color: '#318FD3',
                    borderColor: '#318FD3'},
                }} 
                variant="outlined">Progreamează-te!</ScheduleButton>
         <SectionContainer
          title="Nou! Începe relaxarea cu un RETREAT!"
          highlights={['Nou!', 'RETREAT']}
          highlightColor='green'
          text="Nu trebuie să fii un expert pentru a beneficia de tehnicile de respirație conștientă. Tot ce ai nevoie este puțin timp și dorința de a </br> explora ceva nou. Începe cu câteva minute pe zi și observă cum se schimbă starea ta de bine."
        />
        <ScheduleButton 
                sx={{
                  color: '#2FCD4C',
                  borderColor: '#2FCD4C',
                  '&:hover': {
                    color: '#2CBBAA',
                    borderColor: '#2CBBAA'},
                }} 
                variant="outlined">Retreat CreatorIO</ScheduleButton>
                <Box 
  sx={{ 
    height: '10vh',  
  }}
  
></Box>
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
        color: '#3C3E42',
        textDecoration: 'none',
      }}
      text="Descoperă întreaga gamă de servicii TU CREATOR:"
      highlights={['TU CREATOR:']}
      highlightColor="aqua"
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
    <LightButton variant="contained" color="primary">Consultanță</LightButton>
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
        color: '#3C3E42',
        textDecoration: 'none',
      }}
      text="Nu uita să explorezi universul EU CREATOR:"
      highlights={['EU CREATOR:']}
      highlightColor="green"
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

export default Reconectare;