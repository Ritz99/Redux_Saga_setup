import { Button } from 'bootstrap'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { actiontest } from '../../Redux-saga/Action/action';

const Footer = () => {
    const dispatch = useDispatch();
    const [inc, setInc] = useState(0)

    const handleClick = () => {
        setInc(inc + 1);
        dispatch(actiontest(inc))
    }
  return (
    <div>
        Footer
        <h1>{inc}</h1>
        {/* <Button onClick={handleClick}>Hello</Button> */}
        <button onClick={handleClick}>hello</button>
    </div>

  )
}

export default Footer