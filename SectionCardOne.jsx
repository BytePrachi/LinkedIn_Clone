import "./SectionCardOne.css";
import Divider from '@mui/material/Divider';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

export default function SectionCardOne() {
    return (
        <div className='posts'> 
            <div className='card-1'>
                <img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="male img"></img>
                <div>
                    <div className='space-less space-less-1'>Monis Sharma &nbsp; <div>&#8226; Following</div></div>
                    <div className='space-less'>| 35k+@LinkedIn | 950k post impression views |AI& ...</div>
                    <div className='space-less'>19m &#8226; &#127758;</div>
                </div>
            </div>
            <div>1. Frontend Developer Internship <br/>
                    Sharpe AI | Delhi, India <br/>
                    Stipend per month: &#8377; 15K - 20K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...see more
            </div>
            <div className='posts-2'> 
                <div className='card-1 card-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUHTFM-Yo28G98H6zby-6TlAmQqjk1YpehtAeSxogRu1hQKRtkHvnvsoZ0MnwmeV9LQI&usqp=CAU" alt="male img"></img>
                    <div>
                        <div className='space-less space-less-1'>Frontend Developer</div>
                        <div className='space-less'> Shape AI | India</div>
                        <div className='inside-card' style={{ display: "flex" }}>
                            <button style={{backgroundColor:"lightblue", borderRadius:"20px", width: "100px", fontWeight:"600", margin: "5px" }}>React.js</button>
                            <button style={{backgroundColor:"lightblue", borderRadius:"20px", width: "100px", fontWeight:"600", margin: "5px" }}>JavaScript</button>
                            <button style={{backgroundColor:"lightblue", borderRadius:"20px", width: "100px", fontWeight:"600", margin: "5px" }}>HTML/CSS</button>
                            <button style={{backgroundColor:"lightblue", borderRadius:"20px", width: "100px", fontWeight:"600", margin: "5px" }}>Git/GitHub</button> 
                            <div className='inside-card' style={{ display: "flex" }}> 
                                <div className="one" style={{opacity: 0.9, fontWeight: 700}}><p>Stipend per month: <b>&nbsp;&#8377; 15K - 20K</b><br/></p></div>
                                <div className="two" style={{opacity: 0.9, fontWeight: 700}}><p>Duration: <b>&nbsp; 6 months</b><br/></p></div>
                                <div className="three" style={{opacity: 0.9, fontWeight: 700}}><p>Mode: <b>&nbsp; 7-8 hours/day</b><br/></p></div>
                                <div className="four" style={{opacity: 0.9, fontWeight: 700}}><p>Start Date: <b>&nbsp; Immediate</b><br/></p></div>
                                <div className="five" style={{opacity: 0.9, fontWeight: 700}}><p>#Openings: <b>&nbsp; 15</b></p></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p style={{ display: 'inline-flex', alignItems: 'center' }}><ThumbUpTwoToneIcon style={{ color: 'blue', marginLeft: "50px"}} /><span style={{ marginLeft: '5px' }}>92</span></p>
                <Divider style={{ margin: '1px 0' }} />
                <div className='four-icons'>
                    <p style={{ display: 'inline-flex', alignItems: 'center' }}><ThumbUpOffAltIcon /> Like</p>
                    <p style={{ display: 'inline-flex', alignItems: 'center' }}><CommentIcon/> Comment</p>
                    <p style={{ display: 'inline-flex', alignItems: 'center' }}><RepeatIcon/>Repost</p>
                    <p style={{ display: 'inline-flex', alignItems: 'center' }}><SendIcon/>Send</p>
                </div> 
            </div>
        </div>
    )
}