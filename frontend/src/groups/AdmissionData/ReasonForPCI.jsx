import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

export default function ReasonForPCI(props) {
  const { state, handleValueChange } = props;

  return (
    <CardBody>
      <h2>Reason for PCI</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("131")
            }}
            value={state.items["131"]}
            id="Diagnosis"
            labelText="Diagnosis"
            items={[
              { title: "STEMI/QMI" },
              { title: "NSTEMI" },
              { title: "UAP" },
              { title: "SAP" },
              { title: "Silent ischemia/ICMP" }
            ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        {/* NOTE STEMI */}
        {state.items["131"] === "STEMI/QMI" && (
          <>
            <GridItem xs={12} sm={12} md={3}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("132")
                }}
                value={state.items["132"]}
                id="Killip"
                labelText="Killip"
                items={[
                  { title: "I" },
                  { title: "II" },
                  { title: "III" },
                  { title: "V" }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Onset Time"
                id="Onset Time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("133"),
                  value: state.items["133"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
              <CustomInput
                labelText="Door Time"
                id="Door Time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("134"),
                  value: state.items["134"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
              <CustomInput
                labelText="Balloon Time"
                id="Balloon Time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("135"),
                  value: state.items["135"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </>
        )}

        {/* NOTE NSSTEMI */}
        {state.items["131"] === "NSTEMI" && (
          <>
            <GridItem xs={12} sm={12} md={3}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("136")
                }}
                value={state.items["136"]}
                id="Killip"
                labelText="Killip"
                items={[
                  { title: "I" },
                  { title: "II" },
                  { title: "III" },
                  { title: "V" }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Onset Time"
                id="Onset Time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("137"),
                  value: state.items["137"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
              <CustomInput
                labelText="Door Time"
                id="Door Time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("138"),
                  value: state.items["138"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
              <CustomInput
                labelText="Balloon Time"
                id="Balloon Time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("139"),
                  value: state.items["139"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </>
        )}
      </GridContainer>
    </CardBody>
  );
}
