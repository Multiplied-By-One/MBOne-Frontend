import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import GenericNavbar from '../../../../components/generic/GenericNavbar/GenericNavbar';
import Container from '../../../../components/generic/container/Container';
import { TextInput } from '../../../../components/formInputs/FormInputs';
import Button from '../../../../components/generic/buttons/GenericButton';
import Tooltips from '../../../../components/tooltip/Tooltips';

import { createJournal } from '../../../../api/journal';
import { createEntries } from '../../../../api/entries';
import { myContext } from '../../reducer/eyeReducer';


const CreateJournal = (props) => {

    const [label, setLable] = useState('');
    const [title, setTitle] = useState('');

    const { state } = useContext(myContext)

    const monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();

    function goJournalList() {
        return new Promise(function (resolve) {
            resolve(props.history.push("/theEye/space/profile"))
        })
    }

    //when click save button, entity member of journals and entries were created to database and direct user to Journal list page with the updated journal list showed
    const handleSave = async () => {
        createJournal({
            "eyeAccountListId": state.id,
            "label": label
        }).then(async (value) => {
            await createEntries({
                "journalId": value[0].data.id,
                "date": monthsInEng[date.getMonth()] + " " + date.getDate(),
                "year": date.getFullYear(),
                "title": title,
                "content": ""
            })
            await goJournalList();
        })
    }

    return (
        <div style={{ backgroundColor: '#333333', height: "100%" }}>
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={<Tooltips
                        title="Back"
                        icon={<Link to="/theEye/space/profile" className="link"> <ArrowBackIcon /> </Link>} />}
                    center={"the eye"}
                />
            </Typography>

            <div style={{ padding: '10% 0%' }}>
                <Container style={{ width: '65%', paddingTop: '2%', paddingBottom: '3%' }}>
                    <Typography variant='h6' style={{ fontSize: '30px', textAlign: 'center' }}>Create A Journal</Typography>

                    <form style={{ padding: '0% 1%' }}>
                        <Typography variant='subtitle1' style={{ fontSize: '19px', textAlign: 'left' }} >

                            <div style={{ display: 'flex', margin: '3% 1%' }}>
                                <Grid item xs={6} > Label this Journal </Grid>
                                <Grid item xs={6}> <TextInput placeholder='Enter' onChange={(event) => { setLable(event.target.value) }} /> </Grid>
                            </div>

                            <div style={{ display: 'flex', margin: '3% 1%' }}>
                                <Grid item xs={6}> Create a default Journal Title </Grid>
                                <Grid item xs={6}> <TextInput placeholder='Enter' onChange={(event) => { setTitle(event.target.value) }} /> </Grid>
                            </div>

                        </Typography>

                        <div style={{ paddingLeft: '85%', marginTop: '4%' }}>
                            <Button style={{ padding: '5px 15px' }} onClick={handleSave}> <Typography variant='subtitle1' >Save</Typography> </Button>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default CreateJournal;
