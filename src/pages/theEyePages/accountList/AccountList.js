import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import { Typography } from '@material-ui/core'
import GenericNavbar from "../../../components/generic/GenericNavbar/GenericNavbar";
import AccountListComp from "../../../components/theEye/accountListComponent/AccountListComp"
import './accountList.css';
import Tooltips from "../../../components/tooltip/Tooltips";


const AccountList = (props) => {

    return (
        <div className="eye-root" style={{ height: "100%" }}>
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar
                    left={<Fragment>
                        <Tooltips
                            title="Add an Eye account"
                            icon={<Link to="/theEye/create" className="link"> <AddIcon /> </Link>} />
                        <SearchIcon style={{ cursor: "pointer" }} />
                    </Fragment>}
                    center={"The Eye"}
                />
            </Typography>

            <div className="main-container" >
                <AccountListComp history={props.history} />
            </div>
        </div>
    )
}



export default AccountList;

