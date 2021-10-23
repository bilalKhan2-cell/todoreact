import React, { useState } from 'react'
import firebase from 'firebase'
import Fetchs from './fetch'
import {TextField, Button} from '@material-ui/core'

function Crud()
{
    const [aItem, handleChange] = useState('')
    const submit = () =>
    {
        var empt = document.getElementById('val')
        if(empt.value==="")
        {
            alert("Please Enter The Task")
        }

        else
        {
        var fire = firebase.database().ref('/List')
        var key = firebase.database().ref('/List').push().getKey()
        var obj = 
        {
            Item: aItem
      ,      Key: key,
            isEdit: false
        }

        fire.child(key).set(obj)
        empt.value = ""
    }
}
    const removeAll = () =>
    {
        firebase.database().ref('/List').remove()
    }
        return (
            <>
            <br/>
       <TextField id="val" type="text" onChange={(e)=>handleChange(e.target.value)} value={aItem} style={{width:"300px", marginLeft:"30px", height:"20px"}} placeholder="Enter Todo"> </TextField>
      &nbsp; <Button variant="contained" onClick={()=>submit()} color="primary">Add Task</Button>
           <Fetchs /> 
            </> )
}

export default Crud