import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

export default function SectionCardSeven() {
  return (
    
    <Card style={{ height: 635, width: 555, borderRadius: 10 }}>
        <div className='card-1'>
                <img src="https://i.stack.imgur.com/IjNrI.png" alt="female img" style={{width: 50, height: 50, borderRadius: 50}}></img>
                <div>
                    <div className='space-less space-less-1'>Banglore Jobs &amp; Internships</div>
                    <div className='space-less'>5,601 Followers</div>
                    <div className='space-less'>14m &#8226; &#127758;</div>
                </div>
        </div> 
        
        <CardContent>
            <Typography gutterBottom variant="h6" component="div" fontFamily="Calibri" paddingLeft={2}>
            Amazon is Hiring
            </Typography>
            
            <Typography variant="body2" color="text.secondary" paddingLeft={2}>
            Amazon Software Development Engineer I - Android <br/>
            Batch - 2023 / 2022 / 2021 / 2020 <br/>
            Apply link in comment section👇 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            …see more
            </Typography>
        </CardContent>
        <br/>
        <CardMedia component="img" style={{height: 280, width: 555, fontFamily:"Calibri", margin: 0, padding: 0 }} image="https://www.shutterstock.com/image-illustration/seattle-usa-april-5-2023-600nw-2286327737.jpg" alt="meesho img" />
        <br/>
        <a href='#' style={{textDecoration: 'none', paddingLeft: 20}}>#jobs #internships #bangalore</a>
        <br/><br/>
        <p style={{ display: 'inline-flex', alignItems: 'center' }}><ThumbUpTwoToneIcon style={{ color: 'blue', marginLeft: "50px"}} /><span style={{ marginLeft: '5px' }}>92</span></p>
            <Divider style={{ margin: '1px 0' }} />
            <div className='four-icons'>
                <p style={{ display: 'inline-flex', alignItems: 'center' }}><ThumbUpOffAltIcon /> Like</p>
                <p style={{ display: 'inline-flex', alignItems: 'center' }}><CommentIcon/> Comment</p>
                <p style={{ display: 'inline-flex', alignItems: 'center' }}><RepeatIcon/>Repost</p>
                <p style={{ display: 'inline-flex', alignItems: 'center' }}><SendIcon/>Send</p>
            </div> 
    </Card>
  );
}
