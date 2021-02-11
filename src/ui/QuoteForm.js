import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        margin: theme.spacing(2, 0),
    },
    divider: {
        margin: theme.spacing(8, 0, 2),
    },
    header: {
        margin: theme.spacing(2, 0, 4),
    },
    input100: {
        width: '100%',
    },
    input50: {
        width: '45%',
    },
    input33: {
        width: '30%',
    },
    inputAdjust: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
}));

// request({
//     uri: "https://fishbowl.wufoo.com/api/v3/forms.json",
//     method: "GET",
//     auth: {
//         'username': 'AOI6-LFKL-VM1Q-IEX9',
//         'password': 'footastic',
//         'sendImmediately': false
//     }
// }, function (error, response, body) {
//     console.log(body);
// });

const fields = {
    527: "Bathroom",
    528: "Kitchen",
    529: "Outdoor",
    530: "Other",
    627: "Square Footage",
    107: "Description of Area",
    5: "Date of Service",
    108: "Other Comments",
    1: "First",
    2: "Last",
    219: "Street Address",
    220: "Address Line 2",
    221: "City",
    222: "State / Province / Region",
    223: "Postal / Zip Code",
    224: "Country",
    4: "Email",
    3: "Phone Number",
}

// const getForm = () => {
//     const USERNAME = 'B83X-OVN7-PAQ2-JMT6';
//     const PASSWORD = 'tiletastic';
//     const DEST = 'https://marshallarts.wufoo.com/api/v3/forms/s1djprkt15w5sbl/fields.json';
//     const ORIGIN = 'http://localhost:3000/bcs';
//     const AUTH = btoa(unescape(encodeURIComponent(USERNAME + ":" + PASSWORD)));

//     let headers = new Headers();
//     let data = "No Data";

//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     headers.append('Authorization', 'Basic ' + AUTH);
//     headers.append('Origin', ORIGIN);

//     fetch(DEST, {
//         mode: 'cors',
//         credentials: 'include',
//         method: 'GET',
//         headers: headers
//     })
//         .then(response => response.json())
//         .then(json => {
//             // console.log(json)
//             if (json) {
//                 data = json;
//             }
//         })
//         .catch(error => console.log('Authorization failed : ' + error.message));

//     return data;

//     // useScript('s1djprkt15w5sbl');
//     // const wufoo = new Wufoo("marshallarts", "B83X-OVN7-PAQ2-JMT6");

//     // wufoo.getForm("s1djprkt15w5sbl", function (err, form) {
//     //     console.log(form);
//     // });
// }

const QuoteForm = (props) => {
    const classes = useStyles();
    const { submit } = props;

    // Field## where ## is the Wufoo form field ID
    const [state, setState] = useState({
        527: false, // Bathroom
        528: false, // Kitchen
        529: false, // Outdoor
        530: false, // Other
        627: "", // Square Footage
        107: "", // Description of Area
        5: new Date(), // Date of Service
        108: "", // Other Comments
        1: "", // First
        2: "", // Last
        219: "", // Street Address
        220: "", // Address Line 2
        221: "", // City
        222: "", // State / Province / Region
        223: "", // Postal / Zip Code
        224: "", // Country
        4: "", // Email
        3: "", // Phone Number
    });

    
    const handleDateChange = (date) => {
        setState({...state, 5: date});
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        });
    };

    useEffect(() => {
        if (submit) {
            console.log("Submit!");
            console.log(state);
        }
    });

    // triggered by <form onSubmit>
    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        parseData(data, form);
        sendData(data);
    };

    // https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
    const parseData = (data, form) => {
        for (let name of data.keys()) {
            const input = form.elements[name];


            if (input !== undefined) {
                console.log(input);
                const parserName = input.dataset.parse;

                if (parserName) {
                    const parser = inputParsers[parserName];
                    const parsedValue = parser(data.get(name));
                    data.set(name, parsedValue);
                }
            }
            // console.log(data.get(name));
        }
    }

    const inputParsers = {
        date(input) {
            const [month, day, year] = input.split('/');
            return `${year}${month}${day}`;
        },
        // uppercase(input) {
        //     return input.toUpperCase();
        // },
        // number(input) {
        //     return parseFloat(input);
        // },
        checkbox(input) {
            return input.name;
        }
    };

    const sendData = (data) => {
        const USERNAME = 'B83X-OVN7-PAQ2-JMT6';
        const PASSWORD = 'tiletastic';
        const DEST = 'https://marshallarts.wufoo.com/api/v3/forms/s1djprkt15w5sbl/entries.json';
        const ORIGIN = 'http://localhost:3000/bcs';
        const AUTH = btoa(unescape(encodeURIComponent(USERNAME + ":" + PASSWORD)));

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + AUTH);
        headers.append('Origin', ORIGIN);

        fetch(DEST, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
            body: data,
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                // if (json) {
                //     data = json;
                // }
            })
            .catch(error => console.log('Authorization failed : ' + error.message));
    }

    return (
        <>
            <form>
                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="primary">Space to be Tiled</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="527" checked={state[527]} onChange={handleChange} color="primary" />}
                            label="Bathroom"
                        />
                        <FormControlLabel
                            control={<Checkbox name="528" checked={state[528]} onChange={handleChange} color="primary" />}
                            label="Kitchen"
                        />
                        <FormControlLabel
                            control={<Checkbox name="529" checked={state[529]} onChange={handleChange} color="primary" />}
                            label="Outdoor"
                        />
                        <FormControlLabel
                            control={<Checkbox name="530" checked={state[530]} onChange={handleChange} color="primary" />}
                            label="Other"
                        />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                
                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <TextField name="627" value={state[627]} label={fields[627]} onChange={handleChange} />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <TextField name="107" value={state[107]} label={fields[107]} onChange={handleChange} multiline />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                name="5"
                                label={fields[5]}
                                value={state[5]}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <TextField name="108" value={state[108]} label={fields[108]} onChange={handleChange} multiline />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <Divider className={classes.divider}/>
                
                <Typography variant="h6" className={classes.header}>Contact Info</Typography>

                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Name</FormLabel>
                    <FormGroup className={classes.inputAdjust}>
                        <TextField name="1" value={state[1]} helperText={fields[1]} onChange={handleChange} className={classes.input50} />
                        <TextField name="2" value={state[2]} helperText={fields[2]} onChange={handleChange} className={classes.input50} />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Address</FormLabel>
                    <FormGroup className={classes.inputAdjust}>
                        <TextField name="219" value={state[219]} helperText={fields[219]} onChange={handleChange} className={classes.input100} />
                        <TextField name="220" value={state[220]} helperText={fields[220]} onChange={handleChange} className={classes.input100} />
                        <TextField name="221" value={state[221]} helperText={fields[221]} onChange={handleChange} className={classes.input33} />
                        <TextField name="222" value={state[222]} helperText={fields[222]} onChange={handleChange} className={classes.input33} />
                        <TextField name="223" value={state[223]} helperText={fields[223]} onChange={handleChange} className={classes.input33} />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <TextField name="4" value={state[4]} label={fields[4]} onChange={handleChange} />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <TextField name="3" value={state[3]} label={fields[3]} onChange={handleChange} />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </form>

            {/* WuFoo Form
                <iframe
                    height={height}
                    width={width}
                    ref={frameRef}
                    className={classes.iframe}
                    onLoad={() => { setLoad(true) }}
                    title="Embedded Wufoo Form"
                    src="https://marshallarts.wufoo.com/embed/s1djprkt15w5sbl/"
                >
                    <a href="https://marshallarts.wufoo.com/forms/s1djprkt15w5sbl/">Fill out my Wufoo form!</a>
                </iframe>
            */}

            {/* Alternate WuFoo Form
                <div id="wufoo-s1djprkt15w5sbl"> 
                    Fill out my <a href="https://marshallarts.wufoo.com/forms/s1djprkt15w5sbl">online form</a>. 
                </div> 
                <script type="text/javascript">
                    {useScript()}
                </script> 
            */}

            {/* Google Form
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdbULJh7iGhAkON1fSYX_ah6qQdRgam7KLK75hIvsd6AFAZNw/viewform?embedded=true"
                    // width="600"
                    height="2000"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    className={classes.iframe}
                >
                    Loading…
                </iframe> 
            */}
        </>
    );
};

export default QuoteForm;
