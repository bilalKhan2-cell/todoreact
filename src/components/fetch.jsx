import React from 'react'
import firebase from 'firebase';
import {Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

class Fetchs extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            list: [{
            }],
            value: ''
        }
    }

    editItem = (index) => {
        var nEdit = 
        {
            Item: this.state.value,
            Key:index,
            isEdit:true
        }

        firebase.database().ref('/List').child(index).set(nEdit)
    }

    handleChange  = (get) =>
    {
        this.setState(
            {
                value: get.target.value
            }
        )
    }

    change = (key) =>
    {
        var newObjectToBeRendered = 
        {
            Item: this.state.value,
            Key:key,
            isEdit:false
        }

        firebase.database().ref('/List').child(key).set(newObjectToBeRendered)
    }

    erase = (ind) => {
        firebase.database().ref('/List').child(ind).remove()
    }

    componentDidMount() {
        firebase.database().ref('/List').on("value", snapshot => {
            let list = []
            snapshot.forEach(snap => {
                list.push(snap.val())
            })
            this.setState({ list: list })
        })
    }

    render() {
        return (<div>
            <br/>
            <center>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
    <TableCell style={{backgroundColor:"aquamarine", textAlign:"center"}}>Todos Task</TableCell>
    <TableCell style={{backgroundColor:"aquamarine", textAlign:"center"}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.list.map(data => {
                            return (<>
                    <TableRow>
<TableCell style={{width:"160px", textAlign:"center", fontWeight:"bold"}}>
    {data.isEdit?<>
    <input type="text" onChange={this.handleChange}
     value={this.state.value}></input><br/><br/>
    <Button variant="contained" color="primary" onClick={()=>this.change(data.Key)}>Change</Button></> :data.Item}
    </TableCell>
<TableCell>
    <Button variant="contained" onClick={()=>this.editItem(data.Key)} color="primary">Edit</Button> &nbsp;
    <Button id="btn1" variant="contained" onClick={()=>this.erase(data.Key)} color="secondary">Delete</Button></TableCell>
</TableRow>
      </> );    })}
                </TableBody>
            </TableContainer>
                   </center>
        </div> 
        );   }
}
export default Fetchs