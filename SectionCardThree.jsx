import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SectionCardThree() {
  return (
    <Card style={{ height: 500, width: 555, borderRadius: 10 }}>
        <CardMedia component="img" style={{height: 300, width: 520 }} image="https://www.freecodecamp.org/news/content/images/2022/02/mugshotbot.com_customize_theme-two_up-mode-light-color-pink-pattern-bubbles-image-9129875b-url-https___freecodecamp.org.png" alt="green iguana" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            ReactJS
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
            React.js is an open-source JavaScript library for building user interfaces with a component-based architecture, virtual DOM for performance optimization, and a declarative syntax. 
            </Typography>
        </CardContent>
    
        <CardActions>
            <Button medium="small">Share</Button>
            <Button medium="small">Learn More</Button>
        </CardActions>
    </Card>
  );
}
