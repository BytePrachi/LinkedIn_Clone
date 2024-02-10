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

export default function SectionCardFive() {
  return (
    
    <Card style={{ height: 650, width: 555, borderRadius: 10 }}>
        <div className='card-1'>
                <img src="https://i.stack.imgur.com/IjNrI.png" alt="female img" style={{width: 50, height: 50, borderRadius: 50}}></img>
                <div>
                    <div className='space-less space-less-1'>Maria Ria &nbsp; <div>&#8226; Following</div></div>
                    <div className='space-less'>| 250M+@LinkedIn | 3004k post impression views |ReactJS& ...</div>
                    <div className='space-less'>4h &#8226; &#127758;</div>
                </div>
            </div>
            <br/>
        <CardMedia component="img" style={{height: 300, width: 520 }} image="https://media.licdn.com/dms/image/D4D22AQGMgft01hh7rg/feedshare-shrink_800/0/1707534770383?e=1710374400&v=beta&t=N8sQcetIEoiRQrAng_GxcnvySu-7mOZbvjV5LULffME" alt="green iguana" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            ReactJS
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
            Remote work is the future.
            There are millions of remote jobs out there.
            …see more

            </Typography>
        </CardContent>
    
        <CardActions>
            <Button medium="small">Share</Button>
            <Button medium="small">Learn More</Button>
        </CardActions>
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
