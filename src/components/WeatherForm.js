import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const styles = theme => ({
    container: {
        padding: '1.75rem',
        display: 'grid',
        flexWrap: 'wrap',
    },
    cssLabel: {
        '&$cssFocused': {
            color: red[800],
        },
    },
    cssFocused: {},
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: red[800],
        }
    },
    notchedOutline: {},
})

function WeatherForm(props) {
    const {classes}=props;

    return (
        <form className={classes.container} onSubmit={props.getWeather}>
            <TextField 
                id="outlined-name"
                name="city"
                label="City"
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                }}
                InputProps={{
                    classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    },
                }}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="text"
            />
            <Button type="submit" variant="contained">Get Weather</Button>
        </form>
    );
        }

export default withStyles(styles)(WeatherForm);