import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

export default function TestCheck(props) {
  const { state, handleValueChange } = props;

  return (
    <CardBody>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("501")
            }}
            value={state.items["501"]}
            id="Test Select"
            labelText="Test Select"
            items={[
              { title: "Initial" },
              { title: "1 mo" },
              { title: "1 yr" },
            ]}
          />
        </GridItem>
      </GridContainer>


    {/* ////////////////////////////////////////////////////////////// */}
    {/* NOTE Initial */}
    {/* ////////////////////////////////////////////////////////////// */}
    {state.items["501"] === "Initial" &&(
      <>
      <GridContainer>
        <h3>Echo</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
              labelText="EF"
              id="EF"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleValueChange("511"),
                value: state.items["511"],
              }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <h3>ABI</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Lt baPWV"
            id="Lt baPWV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("512"),
              value: state.items["512"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rt baPWV"
            id="Rt baPWV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("513"),
              value: state.items["513"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Lt ABI"
            id="Lt ABI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("514"),
              value: state.items["514"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rt ABI"
            id="Rt ABI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("515"),
              value: state.items["515"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <h3>M-spect</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="M-spect date"
            id="M-spect date"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("516"),
              value: state.items["516"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SSS"
            id="SSS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("517"),
              value: state.items["517"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SRS"
            id="SRS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("518"),
              value: state.items["518"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SDS"
            id="SDS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("519"),
              value: state.items["519"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Stress defect"
            id="Stress defect"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5110"),
              value: state.items["5110"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rest defect"
            id="Rest defect"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5111"),
              value: state.items["5111"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SMS"
            id="SMS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5112"),
              value: state.items["5112"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="STS"
            id="STS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5113"),
              value: state.items["5113"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="EDV"
            id="EDV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5114"),
              value: state.items["5114"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="ESV"
            id="ESV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5115"),
              value: state.items["5115"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="EF"
            id="EF"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5116"),
              value: state.items["5116"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <h3>체성분</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Ht"
            id="Ht"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5117"),
              value: state.items["5117"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Wt"
            id="Wt"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5118"),
              value: state.items["5118"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="골격근량"
            id="골격근량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5119"),
              value: state.items["5119"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="체지방량"
            id="체지방량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5120"),
              value: state.items["5120"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="체지방률"
            id="체지방률"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5121"),
              value: state.items["5121"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="좌상지 근육량"
            id="좌상지 근육량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5122"),
              value: state.items["5122"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="우상지 근육량"
            id="우상지 근육량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5123"),
              value: state.items["5123"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="좌하지 근육량"
            id="좌하지 근육량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5124"),
              value: state.items["5124"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="우하지 근육량"
            id="우하지 근육량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5125"),
              value: state.items["5125"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="몸통 근육량"
            id="몸통 근육량"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5126"),
              value: state.items["5126"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="WC"
            id="WC"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5127"),
              value: state.items["5127"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="HC"
            id="HC"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5124"),
              value: state.items["5124"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="내장지방"
            id="내장지방"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5125"),
              value: state.items["5125"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="WH ratio"
            id="WH ratio"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5126"),
              value: state.items["5126"],
            }}
          />
        </GridItem>
      </GridContainer>
      </>
    )}


    {/* ////////////////////////////////////////////////////////////// */}
    {/* NOTE 1 mo */}
    {/* ////////////////////////////////////////////////////////////// */}
    {state.items["501"] === "1 mo" &&(
      <>
      <GridContainer>
        <h3>Echo</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="EF"
            id="EF"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("521"),
              value: state.items["521"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <h3>ABI</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Lt baPWV"
            id="Lt baPWV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("522"),
              value: state.items["522"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rt baPWV"
            id="Rt baPWV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("523"),
              value: state.items["523"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Lt ABI"
            id="Lt ABI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("524"),
              value: state.items["524"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rt ABI"
            id="Rt ABI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("525"),
              value: state.items["525"],
            }}
          />
        </GridItem>
      </GridContainer>
      </>
    )}



    {/* ////////////////////////////////////////////////////////////// */}
    {/* NOTE 1 yr */}
    {/* ////////////////////////////////////////////////////////////// */}
    {state.items["501"] === "1 yr" &&(
      <>
      <GridContainer>
        <h3>Echo</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="EF"
            id="EF"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("531"),
              value: state.items["531"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <h3>ABI</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Lt baPWV"
            id="Lt baPWV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("532"),
              value: state.items["532"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rt baPWV"
            id="Rt baPWV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("533"),
              value: state.items["533"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Lt ABI"
            id="Lt ABI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("534"),
              value: state.items["534"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rt ABI"
            id="Rt ABI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("535"),
              value: state.items["535"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <h3>M-spect</h3>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="M-spect date"
            id="M-spect date"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("536"),
              value: state.items["536"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SSS"
            id="SSS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("537"),
              value: state.items["537"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SRS"
            id="SRS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("538"),
              value: state.items["538"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SDS"
            id="SDS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("539"),
              value: state.items["539"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Stress defect"
            id="Stress defect"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5310"),
              value: state.items["5310"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Rest defect"
            id="Rest defect"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5311"),
              value: state.items["5311"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="SMS"
            id="SMS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5312"),
              value: state.items["5312"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="STS"
            id="STS"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5313"),
              value: state.items["5313"],
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="EDV"
            id="EDV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5314"),
              value: state.items["5314"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="ESV"
            id="ESV"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5315"),
              value: state.items["5315"],
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="EF"
            id="EF"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleValueChange("5316"),
              value: state.items["5316"],
            }}
          />
        </GridItem>
      </GridContainer>
      </>
    )}     
    </CardBody>
  );
}