import React from 'react'

const PWDRequisite = (
  {
    capsCheck , 
    NumberCheck,
    MinCheck,
    MaxCheck,
    SpecialCheck
  }
) => {
  return (
    <div>
      <span style={{fontSize : "10px" , display : "flex" , flexDirection : "column"}}>
        <br/>
        <span style = {capsCheck === true ? {display : "none"} : {color : 'white'}}>Must Contains 1 Capital Letter</span>
        <br/>
        <span style={NumberCheck === true ? {display : "none"} : {color : 'white'}}>Must contain Number </span>
        <br/>
        <span style = {MinCheck === true ?{display : "none"} : {color : 'white'}}>Must in Min 8 Character</span>
        <br/>
        <span style = {MaxCheck === true ? {display : "none"} : {color : 'white'}}>Must in Max 20 Character</span>
        <br/>
        <span style = {SpecialCheck === true ? {display : "none"} : {color : 'white'}}>Must Contain Special Character</span>
      </span>
    </div>
  )
}

export default PWDRequisite