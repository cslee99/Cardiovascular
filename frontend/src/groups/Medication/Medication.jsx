import axios from "axios";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter";
import MedicationRe from "./MedicationRe";


// import { flatten } from "utils/utils";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cardFooter: {
    display: "flex",
    justifyContent: "flex-end"
  },
  questionTitle: {
    fontSize: "50px"
  }
};

const useStyles = makeStyles(styles);

export default function Medication(props) {
  const {
    state,
    toast,
    number,
    handleNext,
    handlePrev,
    handleValueChange,
    handleCheckedChange
  } = props;

  const handleSubmit = e => {
    e.preventDefault();

    let data = {
      M: "true",
      items: {
        ...state.items
      }
    };
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.put(`/report/${state.id}/`, data);
    toast("UPDATE REPORT!", { pauseOnFocusLoss: false });
  };

  const classes = useStyles();
  console.log(state);
  return (
    <GridItem xs={12} sm={12} md={12}>
      <ToastContainer />
      <Card>
        <CardHeader plain color="primary">
            <p className={classes.cardCategoryWhite}>{number}/6</p>
            <h4 className={classes.cardTitleWhite}>medication</h4>
        </CardHeader>
        <MedicationRe
            state={state}
            handleValueChange={handleValueChange}
            handleCheckedChange={handleCheckedChange}
        />
        <CardFooter className={classes.cardFooter}>
          <Button onClick={handleSubmit} color="rose">
            Save
          </Button>
          <Button onClick={handlePrev} color="primary">
            Prev
          </Button>
          <Button onClick={handleNext} color="primary">
            Next
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
