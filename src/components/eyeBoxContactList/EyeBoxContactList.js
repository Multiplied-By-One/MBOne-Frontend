import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types'; 

import Container from '../generic/container/Container';


const EyeBoxContactList = (props) => {
    return(
        <Container style={{flex:"1", height:"calc(100vh - 112px)"}}>
            <List subheader={<li />} style={{position: "relative"}}>
                <ul style={{padding: 0, textAlign:"center",}}>
                <ListSubheader style={{padding: "0px", transform: 'translateY(-3px)', }}><Container style={{padding:"0.7rem 0rem"}}><Typography variant="subtitle1">{props.subheader}</Typography></Container></ListSubheader>
                {props.listItems}
                </ul>
            </List>
        </Container>
    )
};

export default EyeBoxContactList;

EyeBoxContactList.propTypes = {
    subheader: PropTypes.any.isRequired,
    lists: PropTypes.element.isRequired,
} 


