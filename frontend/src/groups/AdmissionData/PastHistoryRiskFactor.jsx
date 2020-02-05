import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
// import CustomCheckBox from "components/CustomCheckBox/CustomCheckBox";
// import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CardBody from "components/Card/CardBody.js";

export default function PastHistoryRiskFactor(props) {
  const { state, handleValueChange, handleCheckedChange } = props;

  return (
    <CardBody>
      <h2>Past History and Risk Factor</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["121"]}
                onChange={handleCheckedChange("121")}
                value={state.items["121"]}
              />
            }
            label="HET"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("122")
            }}
            value={state.items["122"]}
            id="DM"
            labelText="DM"
            items={[
              { title: "No" },
              { title: "Known DM" },
              { title: "New DM" }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("123")
            }}
            value={state.items["123"]}
            id="Smoking"
            labelText="Smoking"
            items={[
              { title: "No - stop" },
              { title: "No - never" },
              { title: "Yes - current(<1mo)" }
            ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items.dyslipidemia}
                onChange={handleCheckedChange("124")}
                value={state.items["124"]}
              />
            }
            label="dyslipidemia"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["125"]}
                onChange={handleCheckedChange("125")}
                value={state.items["125"]}
              />
            }
            label="F/H of premature CAD"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["126"]}
                onChange={handleCheckedChange("126")}
                value={state.items["126"]}
              />
            }
            label="old MI"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["127"]}
                onChange={handleCheckedChange("127")}
                value={state.items["127"]}
              />
            }
            label="PrePCI"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["128"]}
                onChange={handleCheckedChange("128")}
                value={state.items["128"]}
              />
            }
            label="PreCABG"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["129"]}
                onChange={handleCheckedChange("129")}
                value={state.items["129"]}
              />
            }
            label="pre valve surgery"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1210"]}
                onChange={handleCheckedChange("1210")}
                value={state.items["1210"]}
              />
            }
            label="old CVA"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1211"]}
                onChange={handleCheckedChange("1211")}
                value={state.items["1211"]}
              />
            }
            label="pre PAD"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1212"]}
                onChange={handleCheckedChange("1212")}
                value={state.items["1212"]}
              />
            }
            label="CKD"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1213"]}
                onChange={handleCheckedChange("1213")}
                value={state.items["1213"]}
              />
            }
            label="dialysis for ESRD"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1214"]}
                onChange={handleCheckedChange("1214")}
                value={state.items["1214"]}
              />
            }
            label="Asthma/COPD"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1215"]}
                onChange={handleCheckedChange("1215")}
                value={state.items["1215"]}
              />
            }
            label="Liver cirrhosis"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1216"]}
                onChange={handleCheckedChange("1216")}
                value={state.items["1216"]}
              />
            }
            label="chronic AF"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1217"]}
                onChange={handleCheckedChange("1217")}
                value={state.items["1217"]}
              />
            }
            label="pre CHF"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1218"]}
                onChange={handleCheckedChange("1218")}
                value={state.items["1218"]}
              />
            }
            label="pre pacemaker"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["1219"]}
                onChange={handleCheckedChange("1219")}
                value={state.items["1219"]}
              />
            }
            label="pre ICD/CRT"
          />
        </GridItem>
      </GridContainer>
    </CardBody>
  );
}
