// will have to think about system map navigation later

import React, {Fragment} from 'react'
import GenericNavbar from '../../components/generic/GenericNavbar/GenericNavbar'
import Container from '../../components/generic/container/Container'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Badge from '@material-ui/core/Badge'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Typography from '@material-ui/core/Typography'


export default class SystemMap extends React.Component {
     render () {
        return (
            <Container>
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
                 System Map after login
            </Container>
       )
     }
};