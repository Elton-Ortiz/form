import React, {  useState } from 'react'
import Password from './password/password'
import './form.css'

function Form() {
    const [phone,setPhone] = useState(" ");
    const [valid,setValid] = useState('valid');
 
    //Phone regex formatation
    const onKeyUp = (e) => {
        const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
        var str = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
        const result = str.replace(regex, "($1)$2-$3");
        e.target.value = " ";
        setPhone(result);
        e.target.value = result
    };

    const isValid = (e) => {
        if(e.target.validity.valid === true && e.target.value !== ""){
            setValid('valid')
        }else{
            setValid('invalid')
        }
    }

 
    
    return (
      < div className="container">
        <form>
        <div className="image">
            
        </div>
        <label className="half-row">FIRST NAME
            <input required type="text"></input>
        </label>
        <label className="half-row">LAST NAME
            <input required type="text"></input>
        </label>
        <label className="all-row">USERNAME
            <input required type="text"></input>
        </label>
        <label name='email' className={"all-row " + valid}   onKeyUp={isValid} >EMAIL
            <input required className={valid} type="email" ></input>
        </label>
        <label className="all-row">PH. NUMBER
            <input type="phone" defaultValue={phone}  onKeyUp={ onKeyUp }></input>
        </label>
       <Password></Password>
       
        </form>
      </div>
    );
  }
  
  export default Form;
