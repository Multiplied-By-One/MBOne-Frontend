import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import GenericNavbar from '../../../components/generic/GenericNavbar/GenericNavbar';
import Container from '../../../components/generic/container/Container';
import { TextInput } from '../../../components/formInputs/FormInputs';
import Button from '../../../components/generic/buttons/GenericButton';

import { myContext } from '../reducer/eyeReducer'


const EyeAccountLogin = (props) => {

    const { state, dispatch } = useContext(myContext);

    const handleRouting = () => {
        if (state.createPassword === false) {
            state.isMatch = true;
        }
        state.isMatch && props.history.push("/theEye/space/profile")
    }

    return (
        <div style={{ backgroundColor: '#333333', height: "100%" }}>
            <Typography variant='h6' style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <GenericNavbar center={"the eye"}></GenericNavbar>
            </Typography>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleRouting(e)
            }} >
                <div style={{ padding: '5% 15%', width: '70%' }}>
                    <Container style={{ textAlign: 'center', padding: '5%' }}>
                        <Typography variant='caption' style={{ fontSize: '3rem' }}>{state.name}</Typography>
                        <Typography variant='subtitle1' style={{ fontSize: '2rem' }}>{state.spaceTitle}</Typography>
                        <div style={{ padding: '5% 10%', marginTop: '5%', backgroundColor: '#333333' }}>
                            {state.createPassword ? <TextInput
                                type='password'
                                name='password'
                                placeholder='Password'
                                onChange={(event) => {
                                    dispatch({ type: "isAuthenticated", pwdEnter: event.target.value });
                                }}
                            /> : <TextInput disabled required={false} placeholder='*Disabled! You have not set a password' inputProps={{ style: { color: "white" } }} />}

                            <Button
                                style={{ marginTop: '2rem' }}
                                onClick={handleRouting}
                            ><Typography variant='h6'>Enter</Typography>
                            </Button>
                        </div>
                    </Container>
                </div>
            </form>
        </div>
    )
}
export default EyeAccountLogin;
