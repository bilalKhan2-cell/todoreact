import { AppBar, Typography } from '@material-ui/core'

function Footer()
{
    return (
                    <AppBar style={{backgroundColor:"darkblue", position:"fixed", top:"97%", height:"75px", lineHeight:"75px"}}>
                    <Typography>
        A Project By Bilal Khan Using ReactJS
                    </Typography>
                </AppBar>
    );
}

export default Footer