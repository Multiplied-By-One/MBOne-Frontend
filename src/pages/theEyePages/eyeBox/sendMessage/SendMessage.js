import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Typography, TextField, Button, Box, ListItem, Zoom } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import GenericNavbar from '../../../../components/generic/GenericNavbar/GenericNavbar';
import Container from '../../../../components/generic/container/Container';
import EyeBoxContactList from '../../../../components/eyeBoxContactList/EyeBoxContactList';
import IconMenu from '../../../../components/iconMenu/IconMenu';
import Tooltips from '../../../../components/tooltip/Tooltips';

import useSWR from 'swr';
import { getEyeAccountFetcher } from '../../../../api/eyeAccount';
import { createEyeBox } from '../../../../api/eyebox';
import { myContext } from '../../reducer/eyeReducer';
// import Zoom from '@material-ui/core/Zoom';


export default function SendMessage() {

    const [messageBody, setMessageBody] = useState("")
    const [subjectLine, setSubjectLine] = useState("");
    const [contactName, setContactName] = useState("");
    const [receiverId, setReceiverId] = useState()

    //get all eye account created and save in the database, so we can get the contact list
    const [endpoint, fetcher] = getEyeAccountFetcher()
    const { data, error, isValidating } = useSWR(endpoint, fetcher)
    const { state } = useContext(myContext);
    const [sent, setSent] = useState(false);

    if (error !== undefined) {
        return (<Box>
            Error fetching
        </Box>)
    }

    if (!data && isValidating) {
        return (<Box>
            Loading...
        </Box>)
    }


    //when click send button, create an entity member to eyeBox entity
    const handleSend = async () => {
        await createEyeBox({
            "senderId": state.id,
            "eyeAccountListId": receiverId,
            "subjectLine": subjectLine,
            "time": new Date().getTime(),
            "messageBody": messageBody,
            "readStatu": false   //indicates whether the receiver has read this message. false: not read yet, true: already read           
        })
        setSent(true);
        setTimeout(() => { setSent(false) }, 2000)
    }

    //store all account information of other eye accounts
    const list = data.filter((account) => account.id !== state.id).map((account) => (account.name))

    return (
        <div className="eye-root" >
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={<Tooltips
                        title="Back"
                        icon={<Link to="/theEye/space/profile" className="link"> <ArrowBackIcon /> </Link>} />}
                    center={"Eye Box"}
                />
            </Typography>

            <div className="main-container" style={{ display: "flex", padding: "16px", textAlign: "center" }}>
                <EyeBoxContactList
                    subheader="Select Contact"
                    listItems={list.map((item) =>
                        <ListItem button key={item.id} style={{ justifyContent: 'center' }} onClick={(event) => {
                            setContactName(event.target.textContent)
                            setReceiverId(data.filter((account) => account.name === event.target.textContent)[0].id)
                        }}
                        > <Typography variant="subtitle1">{item}</Typography>
                        </ListItem>
                    )} />

                <div style={{ flex: "3", height: "calc(100vh - 112px)", marginLeft: "16px" }}>
                    <Container style={{ height: "100%" }}>
                        <div style={{ border: "3px #5f1c17", borderStyle: "none none solid none", margin: "0% 2% 2%" }}>
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='subtitle1' style={{ marginTop: "6px" }}>
                                    To: <TextField placeholder="Enter" value={contactName} onChange={(event) => { setContactName(event.target.value) }} />
                                </Typography>
                                <Button onClick={handleSend}> <Typography variant='subtitle1'>send</Typography> </Button>
                                {{ sent } ? (<Zoom in={sent}>
                                    <div style={{ background: "#5f1c17", color: "white", position: "absolute", top: "50%", right: "40%", padding: "20px", borderRadius: "20px" }}>
                                        <span>Sent Successfully</span>
                                    </div>
                                </Zoom>) : ''}
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-between", paddingRight: "10px" }}>
                                <TextField fullWidth placeholder="Subject Line" onChange={(event) => { setSubjectLine(event.target.value) }} />
                                <IconMenu options={['Upload File', 'Upload Image', 'Add Bullet Point', 'Insert Link', 'Cancel']} />
                            </div>
                        </div>
                        <div className="editor"
                            contentEditable="true"
                            suppressContentEditableWarning="true"
                            onInput={(event) => { setMessageBody(event.target.textContent) }}
                        />
                    </Container>
                </div>
            </div>
        </div>
    )
}

