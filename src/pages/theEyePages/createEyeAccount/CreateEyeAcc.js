import React, { useContext, useEffect, useState } from "react";
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import Container from '../../../components/generic/container/Container';
import GenericNavbar from '../../../components/generic/GenericNavbar/GenericNavbar';
import { TextInput, SelectInput, Checkboxes } from '../../../components/formInputs/FormInputs';
import Button from '../../../components/generic/buttons/GenericButton';
import { getHeadMateFetcher } from '../../../api/headMate';
import { createEyeAccount } from '../../../api/eyeAccount';
import { myContext } from "../reducer/eyeReducer";
import client from "../../../api/client";

import '../theEye.css';


export default function CreateEyeAcc(props) {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [changeTheme, setChangeTheme] = useState(false);
    const [headingFont, setHeadingFont] = useState('Walter Turncoat');
    const [headingFontSize, setHeadingFontSize] = useState('15');
    const [mainFont, setMainFont] = useState('Economica');
    const [mainFontSize, setMainFontSize] = useState('13');
    const [createPassword, setCreatePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [connectImg, setConnectImg] = useState(false);

    const [endpoint, fetcher] = getHeadMateFetcher()
    const { data } = useSWR(endpoint, fetcher)
    const { state, dispatch } = useContext(myContext);

    const [nameOptions, setNameOptions] = useState([]);

    dispatch({ type: "getHeadmates", headmates: data })
    useEffect(() => {
        //to get the headmate names that have not create an eye account yet
        async function getExistAccounts() {
            const info = await client.get(`/eyeAccountList`);
            await dispatch({ type: "getAccounts", accounts: info.data });
            const allNames = state.accounts.concat(state.headmates).map((account) => account !== undefined ? account.name : "")
            const nameAvailable = allNames ? allNames.filter(function (v, i, names) { return names.indexOf(v) === names.lastIndexOf(v) }) : []
            setNameOptions(nameAvailable)
        }
        getExistAccounts();
    }, [state])

    //get the selected headmate info
    const headmate = data === undefined ? '' : data.filter((mate) => mate.name === name)

    const handleCreate = async () => {
        await createEyeAccount({
            "headmateId": headmate[0].id,
            "name": name,
            "spaceTitle": title,
            "changeTheme": changeTheme,
            "headingFont": headingFont,
            "headingFontSize": headingFontSize,
            "mainFont": mainFont,
            "mainFontSize": mainFontSize,
            "createPassword": createPassword,
            "password": password,
            "connectImg": connectImg,
        })
        props.history.push("/theEye/accounts")
    }

    return (
        <div className="eye-root" >
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar center={"the eye"}></GenericNavbar>
            </Typography>

            <div className="main-container">
                <div style={{ padding: '3% 6%' }}>
                    <Container style={{ paddingBottom: '2%', paddingTop: "2%" }}>
                        <Typography variant='h6' paragraph align='center' style={{ fontSize: '2rem' }}> Create An Eye Account </Typography>

                        {/* <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}> */}
                        <Typography variant='subtitle1' >
                            <div className="form-list" >
                                <Grid item xs={7}> Connect to your name on the System Map: </Grid>
                                <Grid item xs={5}>
                                    <SelectInput
                                        defaultValue=""
                                        options={nameOptions ? nameOptions : []}
                                        onChange={(event) => { setName(event.target.value) }}
                                        value={name}
                                    />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Title this Eye account: </Grid>
                                <Grid item xs={5}>
                                    <TextInput placeholder='Enter' onChange={(event) => { setTitle(event.target.value) }} />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7} > Select a different color theme: </Grid>
                                <Grid item xs={2}> <Checkboxes onChange={(event) => { setChangeTheme(event.target.checked) }} /> </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Select heading font: </Grid>
                                <Grid item xs={5}>
                                    <SelectInput
                                        defaultValue='Walter Turncoat'
                                        options={['Economica', 'Francois One', 'Funky Olive', 'Walter Turncoat']}
                                        // options={[<Typography variant="body1">{headingFont}</Typography>, <Typography variant="subtitle1">Francois One</Typography>, <Typography variant="caption">Funky Olive</Typography>, <Typography variant="h6">Walter Turncoat</Typography>]}
                                        onChange={(event) => { setHeadingFont(event.target.value) }}
                                    />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Select heading font size: </Grid>
                                <Grid item xs={5}>
                                    <SelectInput
                                        defaultValue='15'
                                        options={[...Array(51).keys()].filter((num) => num > 7)}
                                        onChange={(event) => { setHeadingFontSize(event.target.value) }}
                                    />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Select main text font: </Grid>
                                <Grid item xs={5}>
                                    <SelectInput
                                        defaultValue='Economica'
                                        options={['Economica', 'Francois One', 'Funky Olive', 'Walter Turncoat']}
                                        onChange={(event) => { setMainFont(event.target.value) }}
                                    />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Select main text font size: </Grid>
                                <Grid item xs={5}>
                                    <SelectInput
                                        defaultValue='13'
                                        options={[...Array(50).keys()].filter((num) => num > 7)}
                                        onChange={(event) => { setMainFontSize(event.target.value) }}
                                    />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7} > Password protect this Eye: </Grid>
                                <Grid item xs={2}>
                                    <Checkboxes onChange={(event) => { setCreatePassword(event.target.checked) }} />
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Create password: </Grid>
                                <Grid item xs={5}>
                                    {createPassword ? <TextInput type='password' placeholder='Enter' onChange={(event) => { setPassword(event.target.value) }} />
                                        : <TextInput disabled required={false} placeholder="*Disabled" inputProps={{ style: { color: "white" } }} />}
                                </Grid>
                            </div>

                            <div className="form-list" >
                                <Grid item xs={7}> Connect to profile image on the System Map: </Grid>
                                <Grid item xs={2}> <Checkboxes onChange={(event) => { setConnectImg(event.target.checked) }} /> </Grid>
                                <Grid item xs={2} style={{ textAlign: 'right' }}>
                                    <Link to="/theEye/accounts" className="link">
                                        <Button> <Typography variant='h6'>Cancel</Typography> </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={1} style={{ textAlign: 'right' }}>
                                    <Link to="/theEye/accounts" className="link">
                                        <Button onClick={handleCreate}> <Typography variant='h6'>Save</Typography> </Button></Link>
                                </Grid>
                            </div>
                        </Typography>
                        {/* </form> */}
                    </Container>
                </div>
            </div>
        </div>
    )
}