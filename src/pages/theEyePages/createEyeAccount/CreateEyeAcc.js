import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import useSWR from 'swr';
import Container from '../../../components/generic/container/Container';
import GenericNavbar from '../../../components/generic/GenericNavbar/GenericNavbar';
import {TextInput, SelectInput, Checkboxes} from '../../../components/formInputs/FormInputs';
import Button from '../../../components/generic/buttons/GenericButton';
import { getHeadMateFetcher } from '../../../api/headMate';
import { createEyeAccount } from '../../../api/eyeAccount';
import '../theEye.css';
import { Link } from 'react-router-dom';

export default function CreateEyeAcc (){

    const [name, setName] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [changeTheme, setChangeTheme] = React.useState(false);
    const [headingFont, setHeadingFont] = React.useState('Walter Turncoat');
    const [headingFontSize, setHeadingFontSize] = React.useState('15');
    const [mainFont, setMainFont] = React.useState('Economica');
    const [mainFontSize, setMainFontSize] = React.useState('13');
    const [changePassword, setChangePassword] = React.useState(false);
    const [password, setPassword] = React.useState();
    const [connectImg, setConnectImg] = React.useState(false);

    const [endpoint, fetcher] = getHeadMateFetcher();
    const  {data }  = useSWR(endpoint, fetcher);
    
    const nameOptions = data === undefined ? '' : data.map((mate) => mate === undefined ? '' : mate.name)

    return (
        <div className="eye-root">
            <Typography variant='h6' style={{textAlign: 'center', fontSize:'1.5rem'}}>
                <GenericNavbar center={"the eye"}></GenericNavbar>
            </Typography>

            <div className="main-container">
                <div style={{ padding:'3% 6%'}}>
                <Container style={{paddingBottom:'2%', paddingTop:"2%"}}>
                    <Typography variant='h6' paragraph align='center' style={{fontSize:'2rem'}}> Create An Eye Account </Typography>

                    <form>
                        <Typography variant='subtitle1' >
                            <div className="form-list" >
                                <Grid item xs='7'> Connect to your name on the System Map: </Grid>
                                <Grid item xs='5'> 
                                    <SelectInput 
                                        placeholder=""
                                        // options={nameOptions}
                                        options={typeof(nameOptions)==='object'? nameOptions: []}
                                        onChange={(event) => {setName(event.target.value)}}
                                        value={name}
                                    /> 
                                </Grid>
                            </div>
                        
                            <div className="form-list" >
                                <Grid item xs='7'> Title this Eye account: </Grid>
                                <Grid item xs='5'> 
                                    <TextInput placeholder='Enter' onChange={ (event) => { setTitle(event.target.value) }} /> 
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs='7' > Select a different color them: </Grid>
                                <Grid item xs='2'> <Checkboxes onChange={(event) => { setChangeTheme(event.target.checked) }} /> </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs='7'> Select heading font: </Grid>
                                <Grid item xs='5'>
                                    <SelectInput  
                                    placeholder= 'Walter Turncoat'
                                    options= {['Option 1', 'Option 2']}
                                    onChange={(event)=>{setHeadingFont(event.target.value)}}
                                    /> 
                                </Grid>
                            </div>
                    
                            <div className="form-list" >
                                <Grid item xs='7'> Select heading font size: </Grid>
                                <Grid item xs='5'>
                                    <SelectInput 
                                    placeholder= '15'
                                    options= {['Option 1', 'Option 2']}
                                    onChange={(event)=>{setHeadingFontSize(event.target.value)}}
                                    /> 
                                </Grid>
                            </div>
                        
                            <div className="form-list" >
                                <Grid item xs='7'> Select main text font: </Grid>
                                <Grid item xs='5'>
                                    <SelectInput 
                                    placeholder= 'Economica'
                                    options= {['Option 1', 'Option 2']}
                                    onChange={(event)=>{setMainFont(event.target.value)}}
                                    /> 
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs='7'> Select main text font size: </Grid>
                                <Grid item xs='5'>
                                    <SelectInput 
                                    placeholder= '13'
                                    options= {['Option 1', 'Option 2']}
                                    onChange={(event)=>{setMainFontSize(event.target.value)}}
                                    /> 
                                </Grid>
                            </div>  
                            
                            <div className="form-list" >
                                <Grid item xs='7' > Password protect this Eye: </Grid>
                                <Grid item xs='2'>
                                    <Checkboxes onChange={(event) => { setChangePassword(event.target.checked) }}/>
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs='7'> Create password: </Grid>
                                <Grid item xs='5'>
                                    {changePassword ? <TextInput type='password' placeholder='Enter' onChange={ (event) => { setPassword(event.target.value)}}/> 
                                        : <TextInput type='password' disabled required={false} onChange={ (event) => { setPassword(event.target.value)}}/>}
                                </Grid>
                            </div>                            

                            <div className="form-list" >
                                <Grid item xs='7'> Connect to profile image on the System Map: </Grid>
                                <Grid item xs='2'> <Checkboxes onChange={(event) => { setConnectImg(event.target.checked) }}/> </Grid>
                                <Grid item xs='2' style={{textAlign:'right'}}>
                                    <Button> <Typography variant='h6'>Cancel</Typography> </Button>
                                </Grid>
                                <Grid item xs='1' style={{textAlign:'right'}}>
                                    <Link to="/theEye/accounts" className="link">
                                    <Button onClick={async () => { await createEyeAccount({
                                        "name": name,
                                        "spaceTitle": title,
                                        "changeTheme" : changeTheme,
                                        "headingFont" : headingFont,
                                        "headingFontSize": headingFontSize,
                                        "mainFont" : mainFont,
                                        "mainFontSize" : mainFontSize,
                                        "changePassword" : changePassword,
                                        "password" : password,
                                        "connectImg" : connectImg,
                                    })}}> <Typography variant='h6'>Save</Typography> </Button></Link>
                                </Grid>
                            </div>
                            </Typography>
                        </form>
                    </Container>
                </div>
            </div>                     
        </div>
    )
}