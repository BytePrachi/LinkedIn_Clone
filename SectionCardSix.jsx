import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

export default function SectionCardSix() {
  return (
    
    <Card style={{ height: 990, width: 555, borderRadius: 10 }}>
        <div className='card-1'>
            <img src="https://i.stack.imgur.com/IjNrI.png" alt="female img" style={{width: 50, height: 50, borderRadius: 50}}></img>
            <div>
                <div className='space-less space-less-1'>Digital Marketing Group - #1 Internet Online Advertising SEO Soc...</div>
                <div className='space-less'>| C Mahanth &#8226;3rd+</div>
                <div className='space-less'>2h &#8226; &#127758;</div>
            </div>
        </div>
        <CardContent>
            <br/>
            <Typography variant="body2" color="text.secondary" paddingLeft={2} color={"black"}>
            Dear Participants <br/>
            📢📢We are Conducting 𝐅𝐫𝐞𝐞 𝐋𝐞𝐚𝐧 𝐒𝐢𝐱 𝐒𝐢𝐠𝐦𝐚 𝐆𝐫𝐞𝐞𝐧 𝐁𝐞𝐥𝐭🤠 Training🏆<br/>
            If you are interested, then<br/>
            Comment as "𝗜𝗻𝘁𝗲𝗿𝗲𝘀𝘁𝗲𝗱" <br/>
            <br/>
            will share more details and also a 💥special😍 gift 🎁 for you. <br/>
            <br/>
            or 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐮𝐬𝐢𝐧𝐠 𝐛𝐞𝐥𝐨𝐰 𝐥𝐢𝐧k👇<br/>
            <a href='https://lnkd.in/gUkAEQRe '> </a><br/>

            We promise it will 𝗔𝗗𝗗 𝗚𝗥𝗘𝗔𝗧 𝗩𝗮𝗹𝘂𝗲🚀 to you!!!  <br/>
            P.S:- Don't miss this opportunity...🚀🚀   <br/>
            <br/>
            <a href='#lean #leansixsigma #leanmanufacturing #continuousimprovement'></a>
            <br/>
            
            </Typography>
        </CardContent>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <video width="555" height="540" controls>
            <source src="/public/rabbitVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video> 
        <br/> 
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
