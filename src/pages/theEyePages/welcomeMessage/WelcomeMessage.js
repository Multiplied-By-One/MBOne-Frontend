import React from 'react'
import { Typography } from '@material-ui/core'
import GenericNavbar from '../../../components/generic/GenericNavbar/GenericNavbar'
import {TheEye} from '../../../components/genericWelcomeMsg/GenericWelcomeMsg.stories'
import '../theEye.css'



export default class WelcomeMassage extends React.Component {
    render(){
        return (
            <div className="eye-root">
                <Typography variant='h6' style={{textAlign: 'center', fontSize:'1.5rem'}}>
                    <GenericNavbar center={"the eye"}></GenericNavbar>
                </Typography>

                <div className="main-container" style={{padding:"5%"}}>
                    <TheEye {...TheEye.args} toPage="/theEye/accounts" />
                </div>
                
            </div>
        )
    }
}