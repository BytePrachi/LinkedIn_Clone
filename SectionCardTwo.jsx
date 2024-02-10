import "./SectionCardTwo.css";
import Divider from '@mui/material/Divider';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

export default function SectionCardTwo() {
    return (
        <div className='posts'> 
            <div className='card-1'>
                <img src="data:image/jpeg;base64,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" alt="male img"></img>
                <div>
                    <div className='space-less space-less-1'>Alex Bangtan &nbsp; <div>&#8226; Following</div></div>
                    <div className='space-less'>| 150k+@LinkedIn | 34k post impression views |AI& ...</div>
                    <div className='space-less'>19m &#8226; &#127758;</div>
                </div>
            </div>
            <div>1. Python Developer Internship + PPO (Upto 5LPA)  <br/>
                    Sharpe AI | Delhi, India <br/>
                    Stipend per month: &#8377; 10K - 15K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...see more
            </div>
            <div className='posts-2'> 
                <div className='card-1 card-2'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/004/753/002/small/custom-coding-icon-shadowed-detailed-custom-coding-logo-free-vector.jpg" alt="male img"></img>
                    <div>
                        <div className='space-less space-less-1'>Python Developer</div>
                        <div className='space-less'> Infosys | India</div>
                        <div className='inside-card' style={{ display: "flex" }}>
                            <button style={{backgroundColor:"pink", borderRadius:"20px", width: "100px", fontWeight:"600", margin: "5px" }}>Python</button>
                            <button style={{backgroundColor:"pink", borderRadius:"20px", width: "100px", fontWeight:"600", margin: "5px" }}>ML</button>
                            <div className='inside-card' style={{ display: "flex" }}> 
                                <div className="one" style={{opacity: 0.9, fontWeight: 700}}><p>Stipend per month: <b>&nbsp;&#8377; 10K - 15K</b><br/></p></div>
                                <div className="two" style={{opacity: 0.9, fontWeight: 700}}><p>Duration: <b>&nbsp; 3 to 6 months</b><br/></p></div>
                                <div className="three" style={{opacity: 0.9, fontWeight: 700}}><p>Mode: <b>&nbsp; 8-9 hours/day</b><br/></p></div>
                                <div className="four" style={{opacity: 0.9, fontWeight: 700}}><p>Start Date: <b>&nbsp; Immediate</b><br/></p></div>
                                <div className="five" style={{opacity: 0.9, fontWeight: 700}}><p>#Openings: <b>&nbsp; 12</b></p></div>
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