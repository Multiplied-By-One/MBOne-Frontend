import React, { Fragment, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Typography, Button, TextField, Zoom } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Container from "../../../../components/generic/container/Container";
import GenericNavbar from '../../../../components/generic/GenericNavbar/GenericNavbar';
import IconMenu from '../../../../components/iconMenu/IconMenu';
import Tooltips from '../../../../components/tooltip/Tooltips';
import EntryList from '../../../../components/theEye/entryList/EntryList';
import { myContext } from '../../reducer/eyeReducer';
import { createEntries } from '../../../../api/entries';
import './editJournal.css'

import { getEntriesFetcher, updateEntries } from '../../../../api/entries';
import useSWR from 'swr';
import { Box } from '@material-ui/core';

export default function SpaceProfile(props) {

    const { state, dispatch } = useContext(myContext);
    const journalId = state.journal.id;
    const [endpoint, fetcher] = getEntriesFetcher()
    const { data, error, isValidating } = useSWR([endpoint, journalId], fetcher)
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [saved, setSaved] = useState(false);
    const [data1, setData1] = useState(data)

    if (error !== undefined) return <Box> Error fetching entry list </Box>
    if (data === []) return <Box> No entry found </Box>
    if (!data && isValidating) return <Box> Loading... </Box>



    const monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();

    if (state.journal.entry === undefined) {
        dispatch({ type: 'clickEntry', entryData: data[0] });
    }

    function showSaved() {
        return new Promise(function (resolve) {
            resolve(2000)
        })
    }
    console.log("state: ", state)
    console.log("data: ", data)

    return (
        <div className="eye-root" >
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={
                        <Fragment>
                            <Tooltips title="Back" icon={<Link to="/theEye/space/profile" className="link"> <ArrowBackIcon /> </Link>} />
                            <Tooltips title="Add" icon={
                                <AddIcon
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        data.push({
                                            "journalId": state.journal.entry.journalId,
                                            "date": monthsInEng[date.getMonth()] + " " + date.getDate(),
                                            "year": date.getFullYear(),
                                            "title": "",
                                            "content": ""
                                        })
                                        createEntries({
                                            "journalId": state.journal.entry.journalId,
                                            "date": monthsInEng[date.getMonth()] + " " + date.getDate(),
                                            "year": date.getFullYear(),
                                            "title": "",
                                            "content": ""
                                        })
                                        dispatch({
                                            type: 'clickEntry', entryData: {
                                                "journalId": state.journal.entry.journalId,
                                                "date": monthsInEng[date.getMonth()] + " " + date.getDate(),
                                                "year": date.getFullYear(),
                                                "title": "",
                                                "content": ""
                                            }
                                        });
                                    }} />} />
                        </Fragment>
                    }
                    center={state.journal ? state.journal.label : "Journal Label"}
                    right={<IconMenu options={['Journal Settings']} />}
                />
            </Typography>
            <div className="big" >
                {/* <EntryList firstEntry={firstEntry} /> */}
                <EntryList data={data} />
                <div className="main-container" style={{ padding: "16px", flex: "3" }}>
                    <Container style={{ height: "calc(100vh - 112px)", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start" }}>
                        <div className="header" >
                            <TextField fullWidth
                                // defaultValue={state.journal.entry.title}
                                value={state.journal.entry ? state.journal.entry.title : ""}
                                placeholder="Entry Title / Heading"
                                style={{ padding: "0% 3% 0% 5%" }}
                                inputProps={{ style: { fontSize: "1.3rem", textAlign: "center" } }}
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                    dispatch({ type: 'updateTitle', title: event.target.value });

                                }}
                            >
                            </TextField>
                            <Button onClick={async () => {
                                await dispatch({ type: 'updateContent', content: content });
                                await updateEntries({
                                    "id": state.journal.entry.id,
                                    "journalId": state.journal.entry.journalId,
                                    "date": state.journal.entry.date,
                                    "year": state.journal.entry.year,
                                    "title": state.journal.entry.title,
                                    "content": state.journal.entry.content
                                })
                                await showSaved().then((time) => {
                                    setSaved((prev) => !prev);
                                    setTimeout(() => {
                                        setSaved(false)
                                    }, time)
                                })
                            }
                            }> <Typography variant='subtitle1'>save</Typography> </Button>
                            {{ saved } ? (<Zoom in={saved}>
                                <div style={{ background: "#5f1c17", color: "white", position: "absolute", top: "50%", right: "40%", padding: "20px", borderRadius: "20px" }}>
                                    <span>Save Successfully</span>
                                </div>
                            </Zoom>) : ''}
                            <IconMenu options={['Upload File', 'Upload Image', 'Insert Line Separator', 'Insert Timestamp', 'Add Bullet Point', 'Hangouts Call', 'Insert Link', 'Change Entry Date', 'Download Entry', 'Delete Entry']} />
                        </div>
                        <div className="editor"
                            contentEditable="true"
                            suppressContentEditableWarning="true"
                            onInput={(event) => {
                                setContent(event.target.textContent)
                            }}
                        >
                            {state.journal.entry ? state.journal.entry.content : ""}
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}