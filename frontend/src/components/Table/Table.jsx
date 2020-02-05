import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

// core components

import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const ReportLink = styled(Link)`
  && {
    color: white;
  }
  &&:active {
    color: white;
  }
  &&:hover {
    color: white;
  }
  &&:focus {
    color: white;
  }
`;
const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const {
    tableHead,
    reportData,
    tableHeaderColor,
    setTrigger,
    page,
    count,
    offset,
    handleCheck,
    handleChangePage,
    handleOffset,
    toast
  } = props;

  const handleDelete = async id => {
    if (window.confirm("삭제하시겠습니까?")) {
      const api = axios.create();
      api.defaults.xsrfCookieName = "csrftoken";
      api.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      await api.delete(`/report/${id}`);
      setTrigger(true);
      toast("DELETE REPORT");
    }
  };
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {reportData &&
            reportData.map((prop, key) => {
              return (
                <TableRow key={key} className={classes.tableBodyRow}>
                  <TableCell className={classes.tableCell}>
                    <Checkbox
                      id={prop["id"]}
                      // checked={checked.indexOf(value) !== -1}
                      // tabIndex={-1}
                      onClick={e => handleCheck(e, prop["id"])}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      // classes={{
                      //   checked: classes.checked,
                      //   root: classes.root
                      // }}
                    />
                  </TableCell>

                  <TableCell className={classes.tableCell}>
                    {prop["id"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["PCI date"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["Hospital No."]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["Name"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["Age"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["Gender"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["Height"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop.items["Weight"]}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop["A"] === true ? "완료" : "미완료"}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop["E"] === true ? "완료" : "미완료"}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop["P"] === true ? "완료" : "미완료"}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop["L"] === true ? "완료" : "미완료"}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop["T"] === true ? "완료" : "미완료"}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {prop["M"] === true ? "완료" : "미완료"}
                  </TableCell>

                  {/* // TODO 레포트 수정 페이지 */}
                  <TableCell className={classes.tableCell}>
                    <Tooltip
                      id="tooltip-top"
                      title="Edit Report"
                      placement="top"
                      // classes={{ tooltip: classes.tooltip }}
                    >
                      <ReportLink to={`/report/${prop["id"]}`}>
                        <IconButton
                          aria-label="Edit"
                          // className={classes.tableActionButton}
                        >
                          <Edit
                          // className={
                          //   classes.tableActionButtonIcon + " " + classes.edit
                          // }
                          />
                        </IconButton>
                      </ReportLink>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top-start"
                      title="Remove"
                      placement="top"
                      // classes={{ tooltip: classes.tooltip }}
                    >
                      <IconButton
                        aria-label="Close"
                        onClick={() => handleDelete(prop["id"])}
                        // className={classes.tableActionButton}
                      >
                        <Close
                        // className={
                        //   classes.tableActionButtonIcon + " " + classes.close
                        // }
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
        <TableFooter>
          <TablePagination
            page={page} // page
            rowsPerPage={offset} // offset
            count={count} // count
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleOffset}
          />
        </TableFooter>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  reportData: PropTypes.arrayOf(PropTypes.object)
};
