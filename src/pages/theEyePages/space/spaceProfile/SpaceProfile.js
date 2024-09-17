import React, { Fragment, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Typography, makeStyles, Badge } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

import GenericNavbar from '../../../../components/generic/GenericNavbar/GenericNavbar';
import JournalList from '../../../../components/theEye/journalList/JournalList';
import Tooltips from '../../../../components/tooltip/Tooltips';
import EyeSpaceProfileEntry from '../../../../components/entry/EyeSpaceProfileEntry/EyeSpaceProfileEntry';

import { myContext } from '../../reducer/eyeReducer'
import client from '../../../../api/client';

import './spaceProfile.css';

const useStyles = makeStyles(() => ({
    //style for <Badge/>
    color: {
        color: 'black',
        backgroundColor: 'rgb(233, 231, 231)',
    },
}));

const SpaceProfile = (props) => {

    const classes = useStyles();
    const { state, dispatch } = useContext(myContext);
    const [badgeCount, setBadgeCount] = useState()

    //to count the unread message and show the number on the badge of this page 
    function countUnreadMsg() {
        return new Promise(function (resolve) {
            resolve(
                setBadgeCount((state.eyebox ? state.eyebox.filter((data) => !data.readStatu) : []).length))
        })
    }

    useEffect(() => {
        async function getEyebox() {
            const info = await client.get(`/eyeAccountList/${state.id}/eyebox`);
            await dispatch({ type: "getEyebox", eyeboxData: info.data });
            await countUnreadMsg()
        }
        getEyebox();
    }, []);

    //still need to modify in order to direct to the System Map Trait Page when click on the avatar container
    const clickProfile = () => {
        console.log("should go to System Map Trait Page");
    }

    const defaultAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

    //Determine whether to display the default avatar or the profile image on the System Map as the avatar
    const imgSource = state.connectImg ?
        (state.headmates ?
            state.headmates.filter((account) => account.id === state.headmateId)[0].image :
            defaultAvatar) :
        defaultAvatar

    return (
        <div className="eye-root" style={{ height: "100%" }}>
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem', height: "100%", display: 'flex', flexDirection: 'column' }}>
                <GenericNavbar
                    left={
                        <Fragment>
                            <Tooltips
                                title="Add a Journal"
                                icon={<Link to="/theEye/space/create" className="link"> <AddIcon /> </Link>} />
                            <MoreHorizIcon />
                        </Fragment>
                    }
                    center={state.spaceTitle}
                    right={
                        <Link to="/theEye/eyebox/received" className="link">
                            <Badge badgeContent={badgeCount} classes={{ colorPrimary: classes.color }} color="primary" >
                                <span>Eye Box</span>
                            </Badge>
                        </Link>
                    }
                />

                <div className="main-container profile" >
                    <div className="picture" onClick={clickProfile}>
                        <EyeSpaceProfileEntry
                            img={imgSource}
                            text={state.name} />
                    </div>
                    <JournalList />
                </div>
            </Typography>
        </div>
    )
}
export default SpaceProfile;