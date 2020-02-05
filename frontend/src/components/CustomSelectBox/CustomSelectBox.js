import React from "react";
// import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-dashboard-react/components/customSelectBoxStyle.js";

const useStyles = makeStyles(styles);

export default function CustomSelectBox(props) {
  // ANCHOR SelectBox style
  const classes = useStyles();

  // ANCHOR SelectBox Props
  // TODO need sort
  const {
    formControlProps,
    selectProps,
    value,
    labelText,
    id,
    labelProps,
    error,
    success,
    items
  } = props;

  return (
    <FormControl {...formControlProps} className={classes.formControl}>
      {" "}
      {labelText !== undefined ? (
        <InputLabel className={classes.labelRoot} htmlFor={id} {...labelProps}>
          {" "}
          {labelText}{" "}
        </InputLabel>
      ) : null}{" "}
      <Select {...selectProps} id={id} value={value || " "}>
        {" "}
        {items &&
          items.map(item => (
            <MenuItem key={item.title} value={item.title}>
              {" "}
              {item.title}{" "}
            </MenuItem>
          ))}{" "}
      </Select>{" "}
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}{" "}
    </FormControl>
  );
}

CustomSelectBox.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  items: PropTypes.array,
  formControlProps: PropTypes.object,
  selectProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};
