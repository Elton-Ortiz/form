import React, { useState } from 'react'
import './password.css'

function Password() {
    const [password, setPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("all-row")
    const [disabled, setdisabled] = useState(true)

    const putPassword = (e) => {
        setPassword('')
        setPassword(e.target.value)
    }
    const isValid = (e) => {
        if (e.target.value === password) {
            setPasswordMatch("all-row")
            setdisabled(false)
        } else {
            setPasswordMatch("all-row not-match")
            setdisabled(true)
        }
    };



    return (
        < React.Fragment >

            <label className="all-row password" id='password'>PASSWORD
                <input required type="password" onKeyUp={putPassword} ></input>
            </label>
            <label className={passwordMatch} >CONFIRM PASSWORD
                <input required type="password" onKeyUp={isValid}></input>
            </label>
            <div className="button">
                <button disabled={disabled} type="submit" >SUBMIT</button>
            </div>
        </React.Fragment>
    );
}

export default Password;


