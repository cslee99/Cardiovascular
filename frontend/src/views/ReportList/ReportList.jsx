import axios from "axios";
import qs from "qs";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import CircleLoader from "react-spinners/CircleLoader";

import {
  ReportLink,
  override,
  SpinnerContainer,
  styles
} from "./ReportListStyle";

const useStyles = makeStyles(styles);

export default function ReportList() {
  const classes = useStyles();

  const [state, setState] = useState({
    count: null,
    data: null,
    loading: true,
    page: 0,
    offset: 10,
    checked: []
  });
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    async function fetchReport() {
      const { page, offset } = state;
      const {
        error,
        data: { page: serverPage, count: serverCount, results }
      } = await axios.get(`/report/?page=${page + 1}&offset=${offset}`);

      setState({
        ...state,
        page: serverPage,
        count: serverCount,
        data: results,
        loading: false
      });

      setTrigger(false);
    }

    fetchReport();
  }, [state.page, state.offset, trigger]);

  const handleCheck = (e, id) => {
    const checked = [...state.checked];
    if (e.target.checked) {
      checked.push(id);
    } else {
      const index = checked.findIndex(ch => ch === id);
      checked.splice(index, 1);
    }
    setState({ ...state, checked });
  };

  const handleChangePage = (_, page) => {
    setState({ ...state, page: page, loading: true });
  };
  // FIXME  page offset 범위 벗어날경우 에러
  const handleOffset = e => {
    setState({ ...state, offset: e.target.value, loading: true });
  };

  const handleDownload = () => {
    if (state.checked.length > 0) {
      axios
        .get(`/report/download/`, {
          responseType: "blob",
          params: {
            reportIds: state.checked
          },
          paramsSerializer: params => {
            return qs.stringify(params, { indices: false });
          }
        })
        .then(response => {
          const url = window.URL.createObjectURL(
            new Blob([response.data], {
              type: response.headers["content-type"]
            })
          );
          const link = document.createElement("a");
          link.href = url;
          // link.setAttribute("download", "test.xlsx");
          document.body.appendChild(link);
          link.click();
        });
    } else {
      toast("레포트를 선택해주세요.");
    }
  };

  return (
    <GridContainer>
      <ToastContainer autoClose={4000} />
      <GridItem xs={12} sm={12} md={12}>
        <ReportLink to="/report">
          {" "}
          <Button color="info">New</Button>{" "}
        </ReportLink>

        <Button color="info" onClick={() => handleDownload()}>
          Download{" "}
        </Button>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader plain color="primary">
            <h3 className={classes.cardTitleWhite}>Report List</h3>
            <p className={classes.cardCategoryWhite}>보고서 목록</p>
            <p className={classes.cardCategoryWhite}>
              TOTAL: {state && state.count}
            </p>
          </CardHeader>
          <CardBody>
            {state.loading && (
              <SpinnerContainer>
                <CircleLoader
                  css={override}
                  size={75}
                  color={"#ab47bc"}
                  loading={state.loading}
                />
              </SpinnerContainer>
            )}
            {!state.loading && state.data && (
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Check",
                  "ID",
                  "PCI Date",
                  "Hospital No.",
                  "Name",
                  "Age",
                  "Gender",
                  "Height",
                  "Weight",
                  "A",
                  "E",
                  "P",
                  "L",
                  "T",
                  "M",
                  "Action"
                ]}
                page={state.page}
                count={state.count}
                offset={state.offset}
                reportData={state.data}
                setTrigger={setTrigger}
                handleCheck={handleCheck}
                handleChangePage={handleChangePage}
                handleOffset={handleOffset}
                toast={toast}
              />
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
