import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GenericNavbar from '../../../components/generic/GenericNavbar/GenericNavbar';
import Button from '../../../components/generic/buttons/GenericButton'
import { TextInput, SelectInput, Checkboxes } from '../../../components/formInputs/FormInputs';
import Container from '../../../components/generic/container/Container';
import Tooltips from '../../../components/tooltip/Tooltips';
import '../theEye.css';

const ChangeSetting = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className="eye-root">
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={<Tooltips title="Back" icon={<Link to="/theEye/space/profile" className="link"> <ArrowBackIcon /> </Link>} />}
                    center='The Eye'
                />
            </Typography>

            <div className="main-container">
                <div style={{ padding: '3% 6%' }}>
                    <Container style={{ paddingBottom: '2%', paddingTop: "2%" }}>
                        <Typography
                            variant='h6'
                            paragraph
                            align='center'
                            style={{ fontSize: '2rem' }}>
                            Change Settings
                        </Typography>

                        <form>
                            <Typography variant='subtitle1' >
                                <div className="form-list" >
                                    <Grid item xs={7}>  Connect to a name on the System Map: </Grid>
                                    <Grid item xs={5}> <SelectInput placeholder='Select from System Map Profiles' options={['Option 1', 'Option 2']} />  </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7}> Title this Eye account: </Grid>
                                    <Grid item xs={5}> <TextInput placeholder='Enter' onChange={(event) => { setName(event.target.value) }} /> </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7} >  Change color theme: </Grid>
                                    <Grid item xs={3}> <Checkboxes /> </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7}> Select heading font: </Grid>
                                    <Grid item xs={5}>
                                        <SelectInput
                                            defaultValue ='Walter Turncoat'
                                            options={['Economica', 'Francois One', 'Funky Olive', 'Walter Turncoat']}
                                        />
                                    </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7}> Select main text font: </Grid>
                                    <Grid item xs={5}>
                                        <SelectInput
                                            defaultValue ='Economica'
                                            options={['Economica', 'Francois One', 'Funky Olive', 'Walter Turncoat']}
                                        />
                                    </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7} > Remove Password <span style={{ fontSize: "1rem" }}>(Must enter password to delete) </span>: </Grid>
                                    <Grid item xs={3} >
                                        <Checkboxes />
                                    </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7}> Change password <span style={{ fontSize: "1rem" }}>(Must enter previous password) </span>: </Grid>
                                    <Grid item xs={5}> <TextInput type='password' placeholder='Enter' onChange={(event) => { setPassword(event.target.value) }} /> </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7}  > Delete this Journal <span style={{ fontSize: "1rem" }}>(Enter password and Confirm Delete) </span>: </Grid>
                                    <Grid item xs={3}> <Checkboxes /> </Grid>
                                </div>

                                <div className="form-list" >
                                    <Grid item xs={7}  >Disconnect from profile image on the System Map</Grid>
                                    <Grid item xs={4}> <Checkboxes /> </Grid>
                                    <Grid item xs={1}>
                                        {/* Here need to add a event listener for the button  */}
                                        <Link to="/theEye/space/profile" className="link"> <Button style={{ padding: '3px 15px' }}> <Typography variant='h6'>Save</Typography> </Button> </Link>
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

export default ChangeSetting;