import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import BinanceLogo from './Binance-Logo.svg';
import Coinbase from './Coinbase.svg';
import Forecast from './forecast.svg';
import Dog from './Dog.svg';
import Wiki from './Wikipedia-logo-v2.png';
import Google from './googlelogo_color_272x92dp.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  const container = {
    'display': 'flex', 
    'flex-direction': 'column',
    'align-items:': 'center',
    'justify-content': 'center',
    'width': '100%',
    'height': '100vh'
  }
  const container1 = {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'height': '20vh'
  }

   const linksImages = {
    [BinanceLogo]: "https://binance-docs.github.io/apidocs/spot/en/#introduction",  
    [Coinbase]: "https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-users#data-endpoints",
    [Forecast]: "http://www.7timer.info/doc.php?lang=en",
    [Dog]: "https://dog.ceo/dog-api/",
    [Wiki]: "https://www.wikipedia.org/",
    [Google]: "https://www.google.com/"
   }
    const keys = Object.keys(linksImages)
  return (
  <React.Fragment>
    <div style={container}>
    <div style={container1}>
      <h1>Portifolio Grid 4</h1>
      <div>This Grid shows the items pages</div>
    </div>
    <Box sx={{ flexGrow: 1, alignContent: 'center'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.isArray(keys)&&keys.map((i, index) => {
       return  ( <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Button href={linksImages[i]}>
        <img src={i}  alt="logo" style={{ height: 200, width: 400 }}  />
        </Button>
      </CardContent>
    </Card>
  </Grid>)
         } )}
      </Grid>
    </Box>
    </div>
    </React.Fragment>
  );
}
