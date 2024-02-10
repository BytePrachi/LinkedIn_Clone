import React from "react";
import './header.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Header() {
    return (
        <div className="outer">
            <div className="header">
                <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkedin icon"></img>
            </div>

            <div className="search-box">
                <Paper sx={{ border: '1px solid #ccc', display: 'flex', alignItems: 'center', width: 280, height: 34, backgroundColor: '#edf3f8', boxShadow: 'none' }}>
                    <SearchIcon sx={{ mr: 1, ml: 1 }} />
                    <InputBase sx={{ flex: 1 }} placeholder="Search" id="searchBar"/>
                </Paper>
            </div>

            <div className="icons">
                <div className="home">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png" alt="home icon"></img>
                    <div><label>Home</label></div>
                </div>
                <div className="my-network">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/643/496/original/people-network-icon-vector.jpg" alt="my network"></img>
                    <div><label style={{width: 50}}>My Network</label></div>
                </div>
                <div className="job-bag">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3XkkdfTWxUgwUmNfNQgpR6QWqPET6uOEcA&usqp=CAU" alt="job bag"></img>
                    <div><label>Jobs</label></div>
                </div>
                <div className="messaging">
                    <img src="https://static-00.iconduck.com/assets.00/message-icon-512x463-tqzmxrt7.png" alt="messaging"></img>
                    <div><label>Messaging</label></div>
                </div>
                <div className="notifications">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-notifications-1780874-1514189.png" alt="notifications"></img>
                    <div><label>Notifications</label></div>
                </div>
                <div className="account">
                    <img src="data:image/png;base64,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" alt="account"></img>
                    <div><label>Me<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" className="account-img"></img></label></div>
                </div>
                <div className="vertical-line"></div>
                <div className="business">
                    <img src="https://www.cateater.com/images/feature_grid.png" alt="For Business"></img>
                    <div className="business-arrow">
                        <label>My Business<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" className="account-img"></img></label>    
                    </div>    
                </div>
                <div className="tryPremium">
                    <u>Try Premium For <span className="rupee-sign">&#8377;</span> 0</u>
                </div>
            </div>
        </div> 
    );
}