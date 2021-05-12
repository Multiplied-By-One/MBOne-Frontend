import Container from "./Container";
import { storiesOf } from "@storybook/react";
import { Typography } from "@material-ui/core";
import { text } from "@storybook/addon-knobs";

storiesOf('Custom Container', module)
    .add('System Menu Container', () =>(
        <div>
            <Container>

                <Typography paragraph >

                    Welcome To The Eye
                    </Typography>
                <p >
                    "Every Headmate can have their own account within The Eye that is customized with their own  themes and fonts. < br /> What is The Eye ? It''s an account for an individual Headmate where everything in it is their own and can be password protected. Multiple personal journals can be added to each Eye account, and it''s where each Eye Box is accessed.< br /> The Eye Box is for private messaging between specific Headmates. < br /> Click the + symbol to add an Eye account.< br /> In order to use this feature, you will first need to add your basic profile to the System Map.This is where your names will be linked from. < br /> Click "Okay" to start.If you want to see this message again later, see the Guide in the sidebar."
                </p>
                <button>Okay</button>
         
                <Typography variant='h6'>{text('Innert Text', 'Some Text!')} </Typography>
                <Typography paragraph >

                    Welcome To The Eye
                    </Typography>
                <p >
                    "Every Headmate can have their own account within The Eye that is customized with their own  themes and fonts. < br /> What is The Eye ? It''s an account for an individual Headmate where everything in it is their own and can be password protected. Multiple personal journals can be added to each Eye account, and it''s where each Eye Box is accessed.< br /> The Eye Box is for private messaging between specific Headmates. < br /> Click the + symbol to add an Eye account.< br /> In order to use this feature, you will first need to add your basic profile to the System Map.This is where your names will be linked from. < br /> Click "Okay" to start.If you want to see this message again later, see the Guide in the sidebar."
                </p>
                <button>Okay</button>

                <Typography variant='h6'>{text('Innert Text', 'Some Text!')} </Typography>
            </Container>
           
        </div>
       ) );


