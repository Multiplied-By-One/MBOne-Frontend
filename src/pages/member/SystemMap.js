// will have to think about system map navigation later

import React, {Fragment} from 'react'
import GenericNavbar from '../../components/generic/GenericNavbar/GenericNavbar'
import Container from '../../components/generic/container/Container'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import HeadmateList from '../../components/system-map/HeadmateList'
import HeadmateForm from '../../components/system-map/HeadmateForm'
import Badge from '@material-ui/core/Badge'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Typography from '@material-ui/core/Typography'


export default class SystemMap extends React.Component {
     render () {
        return (
            <Container style={{backgroundColor: '#333333'}}>
                <GenericNavbar
                    left={
                        // note, callbacks need to be implemented to change these buttons
                        <Fragment>
                            <AddIcon />
                            {/* <Typography variant="button" display="block" gutterBottom>Create Headmate </Typography> */}
                            <SearchIcon />
                        </Fragment>
                    }
                    center={"System Map"}
                    right={<MoreHorizIcon />}
                />
                <div style={{padding: '1%'}}></div>
                {this.props.display}
                 {/* <HeadmateList /> */}
                 {/* <HeadmateForm /> */}
                 <div style={{padding: '3%'}}></div>
            </Container>
       )
     }
};