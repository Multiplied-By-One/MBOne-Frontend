import React from 'react';
import { Typography } from '@material-ui/core';
import Button from '../generic/buttons/GenericButton';
import Container from '../generic/container/Container';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

function WelcomeMassage (props) {

    const bodys = props.bodys;
    const bodyList = bodys.map((body, index) => 
            <Typography paragraph variant='body1' align='center' style={{ fontSize: '25px' }} key={index}>
            {body}
            </Typography>
    )

    return (
        <Container style={{padding:"0% 5%"}}>
            <Typography paragraph variant="h6" align='center' style={{fontSize:'2.5rem', margin:'2% 0%'}}>   
                {props.heading}
            </Typography>
            <div>
                {bodyList}
            </div>
            <div style={{textAlign:"right"}}>
                <Link to={props.toPage} className="link">
                    <Button style={{ margin:"2% 0%", padding: '0% 2%' }}><Typography variant='h6'>Okay</Typography></Button>
                </Link>
            </div>
        </Container>
    );
}

export default WelcomeMassage;

WelcomeMassage.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired,
    toPage: PropTypes.string,
  } 