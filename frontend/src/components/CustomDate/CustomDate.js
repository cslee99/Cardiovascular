import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

// core components
import styles from "assets/jss/material-dashboard-react/components/customDateStyle.js";

const useStyles = makeStyles(styles);

export default function CustomDate(props) {
  const classes = useStyles();
  const { formControlProps, labelText, id, dateProps } = props;

  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            id={id}
            {...dateProps}
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            margin="normal"
            label={labelText}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </FormControl>
  );
}
