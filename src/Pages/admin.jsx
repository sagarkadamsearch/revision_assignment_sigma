    import React, { useState } from 'react';
    import { styled } from 'styled-components';
    

    const Admin = () => {
        const [activeDiv, setActiveDiv] = useState(null);

        const arr = [{src:"/Data/SideBarLogos/group.svg",name:'Dashboard'},
                     {src:"/Data/SideBarLogos/tick.svg",name:'Analytics'},
                     {src:"/Data/SideBarLogos/setting.svg",name:'Logout'}
                    ]
         
       const SidebarDivs = arr.map((e,index)=> <div key={index}   className={index==activeDiv?'active':""} onClick={()=>setActiveDiv(index)}  ><img src={e.src}  alt="" /><p>{e.name}</p></div>)

        return (
            <StyledDIV>
                <SideDIV>
                <p>Nyka Dashboard</p>
                <div className='OptionsDIV'>
                    <div>
                        {SidebarDivs}
                    </div>
                </div>
                </SideDIV>
                <LeftSideDIV>
                    <div className='NavDIV'>
                      <div>
                        <img src="/Data/SideBarLogos/search.svg" alt="" />   
                        <input type="text" placeholder='Search'/>
                     </div>
                     <div className='Profile_NotificationDIV'>
                       <div>
                         <img src="/Data/SideBarLogos/notification-bing.svg" alt="" />
                         <img src='/Data/SideBarLogos/Ellipse.svg'/>
                       </div>
                       <div>
                        {/* Profile_Inage_Here_Present */}
                       </div>
                     </div>
                    </div>
                </LeftSideDIV>
            </StyledDIV>
        );
    };

    export default Admin;


    const StyledDIV= styled.div`
    
    *{
        box-sizing: border-box;
    }
    
    width: 100%;
    background-color: #F8F8F8;
    display: flex;
    `

    const SideDIV = styled.div`
    width: 230px;
    background:#FFF;

    &>p:nth-child(1){
    color: #013CC6;
    font-family: 'Poppins';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    /* margin-top: 63px; */
    margin-bottom: 0px;
    margin-left: 18px;
    }  


    &>div.OptionsDIV{
    display: inline-flex;
    height: 993px;
    padding-bottom: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 525px;
    flex-shrink: 0;
    /* border: 1px solid black; */
    margin-top: 57px;
    margin-right: 58px;
    margin-left: 41px;

    &>div:nth-child(1){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 41px;

    & div{
        display: flex;
        gap: 15px;
        & img{
            width: 24px;
            height: 24px;
            flex-shrink: 0;
        }
        &>p{
            color: black;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.32px;
            margin: 0px;
            margin-top: 0;
        }
    }

    & div.active p{
            color: #0B63F8;
    }
    }

    }
    `

const LeftSideDIV = styled.div`
    border: 1px solid black;

    div.NavDIV{
        display: flex;
        width: 1129px;
        justify-content: space-between;
        align-items: center;
        background: transparent;
        margin-left: 41px;
        margin-right: 101px;
        margin-top: 56.1px;
    }

    div.NavDIV >div:nth-child(1){
        position: relative;
    }
 
    div.NavDIV >div:nth-child(1)>input{
        width: 655px;
        height: 52px;
        flex-shrink: 0;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        background: #FFF;
        padding-left: 60px;
        /* position: absolute; */
        z-index: 1;
    } 

    div.NavDIV >div:nth-child(1)>img{
        position: absolute;
        top:50%;
        left: 20px;
        transform: translateY(-50%);
        z-index: 10;
    }

     div.NavDIV>div:nth-child(2){
        display: flex;
        align-items: flex-start;
        gap: 20px;
     } 

     .Profile_NotificationDIV>div:nth-child(1){
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 3px;
        background: #FFF;
        /* border: 1px solid black; */
        position: relative;
     }

     .Profile_NotificationDIV>div:nth-child(1)>img:nth-child(2){
        position: absolute;
        top: -5px;
        right: -5px;
     }

     .Profile_NotificationDIV>div:nth-child(2){
        width: 52px;
        height: 52px;
        border-radius: 10px;
        background: url('/Data/SideBarLogos/Profile_Avtar.png'), lightgray 50% / cover no-repeat;
     }


`