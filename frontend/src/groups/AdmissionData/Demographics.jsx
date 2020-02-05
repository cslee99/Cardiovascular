import React from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

export default function Demographics(props) {
  const { state, handleValueChange} = props;

  return (
    <CardBody>
      <h2>Demographics</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="PCI date"
            id="PCI date"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("111"),
              value: state.items["111"]
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Hospital No."
            id="hospital_no"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("112"),
              value: state.items["112"]
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Name"
            id="name"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("113"),
              value: state.items["113"]
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Age"
            id="age"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("114"),
              value: state.items["114"]
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("115")
            }}
            value={state.items["115"]}
            id="gender"
            labelText="Gender"
            items={[{ title: "Men" }, { title: "Women" }]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Height"
            id="Height"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("116"),
              value: state.items["116"]
            }}
          />
        </GridItem>{" "}
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Weight"
            id="Weight"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("117"),
              value: state.items["117"]
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>  
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SBP"
            id="SBP"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("118"),
              value: state.items["118"]
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="DBP"
            id="DBP"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("119"),
              value: state.items["119"]
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="HR"
            id="HR"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("1110"),
              value: state.items["1110"]
            }}
          />
        </GridItem>
      </GridContainer>
    </CardBody>
  );
}
