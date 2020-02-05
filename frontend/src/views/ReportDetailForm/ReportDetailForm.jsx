import axios from "axios";
import React, { useState, useEffect } from "react";
// NOTE Using URL Params
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CustomCheckBox from "components/CustomCheckBox/CustomCheckBox.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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

// ANCHOR Report 수정 폼
export default function ReportDetailForm({ history }) {
  const [state, setState] = useState({
    user: {},
    report: {}
  });
  const [question, setQuestion] = useState({
    loading: true,
    title: "",
    list: [],
    num: 1,
    total: 0
  });

  let { id } = useParams();

  useEffect(() => {
    async function fetchReport() {
      const { data } = await axios.get(`/report/${id}`);

      console.log(JSON.parse(data));
    }

    fetchReport();
  }, []);

  const handleChange = name => e => {};

  const handleSubmit = async () => {
    const api = axios.create();

    api.defaults.xsrfCookieName = "csrftoken";
    api.defaults.xsrfHeaderName = "X-CSRFTOKEN";

    // NOTE Report 업데이트
    // await api.put(`/report/${id}/`, form);

    history.push("/list");
  };

  const classes = useStyles();
  return (
    !question.loading &&
    question && (
      <div>
        <GridContainer
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader plain color="primary">
                <p className={classes.cardCategoryWhite}>num / total</p>
                <h4 className={classes.cardTitleWhite}>text</h4>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter className={classes.cardFooter}>
                {/* {question && question.num !== 1 && (
                  // NOTE 뒤로가기버튼
                  <Button onClick={handlePrev} color="primary">
                    Prev
                  </Button>
                )}
                {question && question.num !== question.total && (
                  // NOTE 넘어가기버튼
                  <Button onClick={handleNext} color="primary">
                    Next
                  </Button>
                )}
                {question && question.num === question.total && (
                  // NOTE Report 수정 및 생성 버튼
                  <Button onClick={handleSubmit} color="primary">
                    제출
                  </Button>
                )} */}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  );
}
