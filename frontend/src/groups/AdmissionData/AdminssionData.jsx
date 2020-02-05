import axios from "axios";
import React from "react";
import { ToastContainer } from "react-toastify";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter";
import Demographic from "groups/AdmissionData/Demographics";
import PastHistoryRiskFactor from "groups/AdmissionData/PastHistoryRiskFactor";
import ReasonForPCI from "groups/AdmissionData/ReasonForPCI";
import PreAdmissionMedication from "groups/AdmissionData/PreAdmissionMedication";

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

export default function AdmissionData(props) {
  const {
    state,
    toast,
    number,
    setReportId,
    handlePrev,
    handleNext,
    handleValueChange,
    handleCheckedChange,
    handleDateChange
  } = props;

  const handleSubmit = e => {
    e.preventDefault();

    // API 로직에 맞춰서 맞추기 items로 묶어서 요청을 보내면 된다.
    let data = {
      A: "true",
      items: {
        ...state.items
      }
    };

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

    if (state.id) {
      axios.put(`/report/${state.id}/`, data);
      toast("UPDATE REPORT", { pauseOnFocusLoss: false });
    } else {
      axios
        .post("/report/", data)
        .then(response => setReportId(response.data.id));
      toast("CREATE REPORT", { pauseOnFocusLoss: false });
    }
  };

  const classes = useStyles();

  return (
    <GridItem xs={12} sm={12} md={12}>
      <ToastContainer autoClose={4000} />
      <Card>
        <CardHeader plain color="primary">
          <p className={classes.cardCategoryWhite}>{number}/6</p>
          <h4 className={classes.cardTitleWhite}>Admission Data</h4>
        </CardHeader>

        <Demographic
          state={state}
          handleValueChange={handleValueChange}
          handleNext={handleNext}
          handleDateChange={handleDateChange}
        />
        <PastHistoryRiskFactor
          state={state}
          handleValueChange={handleValueChange}
          handleCheckedChange={handleCheckedChange}
          handleNext={handleNext}
        />
        <ReasonForPCI
          state={state}
          handleValueChange={handleValueChange}
          handleCheckedChange={handleCheckedChange}
          handleNext={handleNext}
        />
        <PreAdmissionMedication
          state={state}
          handleValueChange={handleValueChange}
          handleCheckedChange={handleCheckedChange}
          handleNext={handleNext}
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
