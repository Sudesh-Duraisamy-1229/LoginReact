import React  from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import CallIcon from '@mui/icons-material/Call';
import './Header.css'
import PetsIcon from '@mui/icons-material/Pets';


const HeaderStyle = styled.div`
background : rgb(160, 160, 160);  
width : 100%;
height : 80px;
`

const Option = styled.div`
padding : 5px 20px 5px 5px;
transform : scale(0.9);
`

const OptionText = styled.span`
vertical-align : bottom ;
font-size : 20.5px;
display : flex ;
flex-direction : row ;
border-radius : 8px;
height : 30px;
padding : 10px 5px 5px 5px;
`

const Header = () => {


  return (  
    <HeaderStyle>
        <div className='head'>
            <PetsIcon style={{position : "absolute" , left : "-230%" , transform : "scale(1.5)" , padding : "15px"}}/>
            <Option className='option'> 
                <OptionText><HomeIcon/>  &nbsp; Home </OptionText> 
            </Option>
            <Option className='option'>  
                <OptionText> <CallIcon/>  &nbsp; Contact </OptionText>
            </Option>
            <Option className='option'> 
                <OptionText><GroupsIcon/>  &nbsp;About Us  </OptionText>
            </Option>
        </div>
    </HeaderStyle>
  )
}

export default Header