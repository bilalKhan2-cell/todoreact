import React from 'react'
import {AppBar, Typography} from '@material-ui/core'

class Header extends React.Component
{
    render()
    { 
        return (
            <div>
                <header>
                    <AppBar style={{backgroundColor:"indigo"}}>
                        <Typography style={{textAlign:"center"}} variant="h4" component="h1">
                                React Todo
                        </Typography>
                    </AppBar>
                </header>
            </div>
        );
    }
}

export default Header