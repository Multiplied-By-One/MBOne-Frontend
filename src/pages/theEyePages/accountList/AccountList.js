import React, {Fragment} from "react";
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import {Typography} from '@material-ui/core'
import GenericNavbar from "../../../components/generic/GenericNavbar/GenericNavbar";
import AccountListComp from "../../../components/theEye/accountListComponent/AccountListComp"
import './accountList.css';
import { Link } from "react-router-dom";
import Tooltips from "../../../components/tooltip/Tooltips";


const AccountList = () => {

    return (
        <div className="eye-root">
            <Typography variant='h6' style={{textAlign: 'center', fontSize:'1.5rem'}}>
                <GenericNavbar
                left={<Fragment>
                    <Tooltips 
                    title="Add an Eye account" 
                    icon={ <Link to="/theEye/create" className="link"> <AddIcon /> </Link>} />
                    <SearchIcon style={{cursor:"pointer"}}/>
                    </Fragment>}
                center={"The Eye"}
                />
            </Typography>

            <div className="main-container" >
                <AccountListComp  toPage="/theEye/login"/>
            </div>   
        </div>
    )
}



export default AccountList;

