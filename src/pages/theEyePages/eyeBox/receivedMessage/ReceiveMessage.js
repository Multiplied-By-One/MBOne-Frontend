import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Typography, Button, makeStyles } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ListItem } from '@material-ui/core';
import { Badge } from '@material-ui/core';

import GenericNavbar from '../../../../components/generic/GenericNavbar/GenericNavbar';
import Container from '../../../../components/generic/container/Container';
import IconMenu from '../../../../components/iconMenu/IconMenu';
import Tooltips from '../../../../components/tooltip/Tooltips';
import EyeBoxContactList from '../../../../components/eyeBoxContactList/EyeBoxContactList';

import { updateEyeBox } from '../../../../api/eyebox';
import { myContext } from '../../reducer/eyeReducer';

const useStyles = makeStyles(() => ({
    //style for <Badge/>
    color: {
        backgroundColor: '#990000',
    },
    dot: {
        transform: 'translate(-12px, 12px)'
    }
}));

export default function SendMessage() {

    const classes = useStyles();
    const { state, dispatch } = useContext(myContext);

    const monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    //store sender name of all received messages by matching the senderId with account id 
    const names = state.eyebox.map((data) => state.accounts.find((name) => name.id === data.senderId).name)

    //store the matching name to the matching senderId in state
    for (var i = 0; i < state.eyebox.length; i++) {
        state.eyebox[i].senderName = names[i];
    }

    //need to modify to handle to reply event when user click on reply button
    const handleReply = (event) => {
        console.log("action need to be add when click on reply button")
    }

    return (
        <div className="eye-root" >
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={
                        <Fragment>
                            <Tooltips
                                title="Back"
                                icon={<Link to="/theEye/space/profile" className="link"> <ArrowBackIcon /> </Link>} />
                            <Link to="/theEye/eyebox/send" className="link"> <Button > <Typography variant='subtitle1'>create</Typography> </Button> </Link>
                        </Fragment>
                    }
                    center={"Eye Box"}
                />
            </Typography>

            <div className="main-container" style={{ display: "flex", padding: "16px", textAlign: "center" }}>
                <EyeBoxContactList
                    subheader={<div style={{ display: 'flex', padding: "0% 2%", }}> <IconMenu options={['Sent']} /><span style={{ margin: 'auto' }}>Received</span></div>}
                    listItems={state.eyebox.map((item) => (
                        <Badge color="primary" variant="dot" invisible={item.readStatu ? true : false} key={item.id} style={{ width: "100%" }} classes={{ colorPrimary: classes.color, dot: classes.dot }}>
                            <ListItem button style={{ display: 'block', textAlign: 'center', borderBottom: "1px solid white" }}
                                onClick={() => {
                                    item.readStatu = true;
                                    dispatch({ type: 'clickMessage', showEyebox: item })
                                    updateEyeBox({
                                        "id": item.id,
                                        "senderId": item.senderId,
                                        "eyeAccountListId": item.eyeAccountListId,
                                        "subjectLine": item.subjectLine,
                                        "time": item.time,
                                        "messageBody": item.messageBody,
                                        "readStatu": true
                                    })

                                }}
                            >
                                <Typography variant="h6"> FROM: {item.senderName} </Typography>
                                <Typography variant="subtitle1"> {item.subjectLine} </Typography>
                                {/* <Typography variant="body1"> {item.time} </Typography> */}
                                <Typography variant="body1">
                                    {`${monthsInEng[new Date(item.time).getMonth()]} ${new Date(item.time).getDate() < 10 ? `0${new Date(item.time).getDate()}` : new Date(item.time).getDate()} ${new Date(item.time).getFullYear()} ${new Date(item.time).getHours() < 10 ? `0${new Date(item.time).getHours()}` : new Date(item.time).getHours()}:${new Date(item.time).getMinutes() < 10 ? `0${new Date(item.time).getMinutes()}` : new Date(item.time).getMinutes()}`}
                                </Typography>
                            </ListItem>
                        </Badge>
                    ))} />

                <div style={{ flex: "3", height: "calc(100vh - 112px)", marginLeft: "16px" }}>
                    <Container style={{ height: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", border: "3px #5f1c17", borderStyle: "none none solid none", margin: "0% 2% 2%" }}>
                            <div>
                                <Typography variant='subtitle1' style={{ margin: "0.5rem 0rem", textAlign: "left" }}> From: {state.showEyebox ? state.showEyebox.senderName : ''} </Typography>
                                <Typography variant='subtitle1' style={{ margin: "0.5rem 0rem", textAlign: "left" }}> {state.showEyebox ? state.showEyebox.subjectLine : ''} </Typography>
                                <Typography variant='body1' style={{ margin: "0.5rem 0rem", textAlign: "left" }}>
                                    {state.showEyebox ? `${monthsInEng[new Date(state.showEyebox.time).getMonth()]} ${new Date(state.showEyebox.time).getDate() < 10 ? `0${new Date(state.showEyebox.time).getDate()}` : new Date(state.showEyebox.time).getDate()} ${new Date(state.showEyebox.time).getFullYear()} ${new Date(state.showEyebox.time).getHours() < 10 ? `0${new Date(state.showEyebox.time).getHours()}` : new Date(state.showEyebox.time).getHours()}:${new Date(state.showEyebox.time).getMinutes() < 10 ? `0${new Date(state.showEyebox.time).getMinutes()}` : new Date(state.showEyebox.time).getMinutes()}` : ''} </Typography>
                            </div>
                            <div style={{ padding: "0.5rem 0rem" }}>
                                <Button onClick={handleReply}> <Typography variant='subtitle1'>Reply</Typography> </Button>
                                <IconMenu options={['Delete']} style={{ margin: "0.5rem 0rem" }} />
                            </div>
                        </div>

                        <div style={{ textAlign: "left", margin: "0% 2%" }}>{state.showEyebox ? state.showEyebox.messageBody : ''}</div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

