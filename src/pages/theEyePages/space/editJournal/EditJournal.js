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
import { updateEntries } from '../../../../api/entries';
import { useEffect } from 'react';

import './editJournal.css'

export default function SpaceProfile(props) {

    const { state, dispatch } = useContext(myContext);
    const [content, setContent] = useState();
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setContent(state.journal.clickedEntry ? state.journal.clickedEntry.content : '')
    }, state.journal.clickedEntry)

    const firstEntry = (data) => {
        if (state.journal.clickedEntry === undefined) {
            dispatch({ type: 'clickEntry', entryData: data });
        }
    }

    return (
        <div className="eye-root" >
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={
                        <Fragment>
                            <Tooltips title="Back" icon={<Link to="/theEye/space/profile" className="link"> <ArrowBackIcon /> </Link>} />
                            <Tooltips title="Add" icon={<AddIcon style={{ cursor: "pointer" }} />} />
                        </Fragment>
                    }
                    center={state.journal ? state.journal.label : "Journal Label"}
                    right={<IconMenu options={['Journal Settings']} />}
                />
            </Typography>
            <div className="big" >
                <EntryList firstEntry={firstEntry} />
                <div className="main-container" style={{ padding: "16px", flex: "3" }}>
                    <Container style={{ height: "calc(100vh - 112px)", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start" }}>
                        <div className="header" >
                            <TextField fullWidth
                                // defaultValue={state.journal.clickedEntry.title}
                                value={state.journal.clickedEntry ? state.journal.clickedEntry.title : ""}
                                placeholder="Entry Title / Heading"
                                style={{ padding: "0% 3% 0% 5%" }}
                                inputProps={{ style: { fontSize: "1.3rem", textAlign: "center" } }}
                                onChange={(event) => {
                                    dispatch({ type: 'updateTitle', title: event.target.value });
                                }}
                            >
                            </TextField>
                            <Button onClick={async () => {
                                await dispatch({ type: 'updateContent', content: content });
                                await updateEntries({
                                    "id": state.journal.clickedEntry.id,
                                    "journalId": state.journal.clickedEntry.journalId,
                                    "date": state.journal.clickedEntry.date,
                                    "year": state.journal.clickedEntry.year,
                                    "title": state.journal.clickedEntry.title,
                                    "content": state.journal.clickedEntry.content
                                })
                                setSaved(true);
                                setTimeout(() => { setSaved(false) }, 2000)
                            }
                            }> <Typography variant='subtitle1'>save</Typography> </Button>
                            {{ saved } ? (<Zoom in={saved}>
                                <div style={{ background: "#5f1c17", color: "white", position: "absolute", top: "50%", right: "40%", padding: "20px", borderRadius: "20px" }}>
                                    <span>Save Successfully</span>
                                </div>
                            </Zoom>) : ''}
                            <IconMenu
                                options={['Upload File', 'Upload Image', 'Insert Line Separator', 'Insert Timestamp', 'Add Bullet Point', 'Hangouts Call', 'Insert Link', 'Change Entry Date', 'Download Entry', 'Delete Entry']}
                                clickedOption={(option) => {
                                    console.log("clicked option: ", option)
                                }}
                            />
                        </div>
                        <div className="editor"
                            contentEditable="true"
                            suppressContentEditableWarning="true"
                            onInput={(event) => {
                                setContent(event.target.textContent)
                                // dispatch({ type: 'updateContent', content: event.target.textContent });
                            }}
                        >
                            {state.journal.clickedEntry ? state.journal.clickedEntry.content : ""}
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}