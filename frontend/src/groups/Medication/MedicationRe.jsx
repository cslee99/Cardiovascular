import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

export default function MedicationRe(props) {
  const { state, handleValueChange } = props;

  return (
    <CardBody>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("47")
            }}
            value={state.items["47"]}
            id="Death"
            labelText="Death"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>
      </GridContainer>
    </CardBody>
  );
}