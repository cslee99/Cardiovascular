import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
// import CustomCheckBox from "components/CustomCheckBox/CustomCheckBox";
// import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CardBody from "components/Card/CardBody.js";

export default function PreAdmissionMedication(props) {
  const { state, handleValueChange, handleCheckedChange } = props;

  return (
    <CardBody>
      <h2>Pre-Admission medication</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["141"]}
                onChange={handleCheckedChange("141")}
                value={state.items["141"]}
              />
            }
            label="ASA"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["142"]}
                onChange={handleCheckedChange("142")}
                value={state.items["142"]}
              />
              
            }
            label="P2Y12I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="P2Y12I_Name"
            id="P2Y12I_Name"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("143"),
              value: state.items["143"]
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["144"]}
                onChange={handleCheckedChange("144")}
                value={state.items["144"]}
              />
            }
            label="BB"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["145"]}
                onChange={handleCheckedChange("145")}
                value={state.items["145"]}
              />
            }
            label="ACEI"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["146"]}
                onChange={handleCheckedChange("146")}
                value={state.items["146"]}
              />
            }
            label="ARB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["147"]}
                onChange={handleCheckedChange("147")}
                value={state.items["147"]}
              />
            }
            label="CCB"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.items["148"]}
                onChange={handleCheckedChange("148")}
                value={state.items["148"]}
              />
            }
            label="statin"
          />
        </GridItem>
      </GridContainer>
    </CardBody>
  );
}
