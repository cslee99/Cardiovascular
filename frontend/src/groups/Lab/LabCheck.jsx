import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function InitialorOmoorO(props) {
  const { state, handleValueChange, handleCheckedChange } = props;
  const P_margin = ({    
    child1Container: {
      flex: 1,
      marginLeft: 25,
    }, 
    child2Container: {
        flex: 1,
        marginLeft: 50,
      },    
  });

  //처음 empty일때 Initial을 띄워주어야 한다.
  //다른 check 사항은 그대로 진행.
  //state에서 위 두가지 사항을 처리.
  return (
    <CardBody>
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <h4 style={P_margin.child1Container}>Lab Select</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("401")
            }}
            value={state.items["401"]}
            id="Lab Select"
            labelText="Lab Select"
            items={[
              { title: "Initial" },
              { title: "Pre peak" },
              { title: "Post 8hr's" },
              { title: "Post 24hr's" },
              { title: "Post 48hr's" },
              { title: "discharge" },
              { title: "1 mo" },
              { title: "1 yr" },
            ]}
          />
        </GridItem>
      </GridContainer>


        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE Initial */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "Initial" &&(
          <>
          <h2>Initial</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("411"),
                  value: state.items["411"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("412"),
                      value: state.items["412"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("413"),
                      value: state.items["413"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("414"),
                      value: state.items["414"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("415"),
                      value: state.items["415"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("416"),
                      value: state.items["416"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("417"),
                      value: state.items["417"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("418"),
                      value: state.items["418"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("419"),
                      value: state.items["419"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4110"),
                      value: state.items["4110"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4111"),
                      value: state.items["4111"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4112"),
                      value: state.items["4112"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4113"),
                      value: state.items["4113"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4114"),
                      value: state.items["4114"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4115"),
                      value: state.items["4115"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4116"),
                      value: state.items["4116"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4117"),
                      value: state.items["4117"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4118"),
                      value: state.items["4118"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4119"),
                      value: state.items["4119"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4120"),
                      value: state.items["4120"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4121"),
                      value: state.items["4121"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4122"),
                      value: state.items["4122"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4123"),
                      value: state.items["4123"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ARU(PFA)"
                  id="ARU(PFA)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4124"),
                      value: state.items["4124"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ARU(Multiplate)"
                  id="ARU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4125"),
                      value: state.items["4125"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Multiplate)"
                  id="PRU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4126"),
                      value: state.items["4126"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Verifynow)"
                  id="PRU(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4127"),
                      value: state.items["4127"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="%inhibition(Verifynow)"
                  id="%inhibition(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4128"),
                      value: state.items["4128"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PT"
                  id="PT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4129"),
                      value: state.items["4129"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="APTT"
                  id="APTT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4130"),
                      value: state.items["4130"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TB"
                  id="TB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4131"),
                      value: state.items["4131"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="GGT"
                  id="GGT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4132"),
                      value: state.items["4132"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ALP"
                  id="ALP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4133"),
                      value: state.items["4133"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="AST"
                  id="AST"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4134"),
                      value: state.items["4134"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ALT"
                  id="ALT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4135"),
                      value: state.items["4135"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TC"
                  id="TC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4136"),
                      value: state.items["4136"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="TG"
                  id="TG"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4137"),
                      value: state.items["4137"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="HDL"
                  id="HDL"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4138"),
                      value: state.items["4138"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="LDL"
                  id="LDL"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4139"),
                      value: state.items["4139"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Lp(a)"
                  id="Lp(a)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4140"),
                      value: state.items["4140"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="Apo A"
                  id="Apo A"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4141"),
                      value: state.items["4141"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Apo B"
                  id="Apo B"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4142"),
                      value: state.items["4142"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-LDL_Pattern"
                  id="sd-LDL_Pattern"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4143"),
                      value: state.items["4143"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-Mean particle size(Å)"
                  id="sd-Mean particle size(Å)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4144"),
                      value: state.items["4144"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="sd-LDL_%sdLDL(%)"
                  id="sd-LDL_%sdLDL(%)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4145"),
                      value: state.items["4145"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>
            
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-LDL_sdLDL(mg/dL)"
                  id="sd-LDL_sdLDL(mg/dL)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4146"),
                      value: state.items["4146"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="homocystein"
                  id="homocystein"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4147"),
                      value: state.items["4147"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Na"
                  id="Na"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4148"),
                      value: state.items["4148"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="K"
                  id="K"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4149"),
                      value: state.items["4149"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Mg"
                  id="Mg"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4150"),
                      value: state.items["4150"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="uric acid"
                  id="uric acid"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4151"),
                      value: state.items["4151"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TSH"
                  id="TSH"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4152"),
                      value: state.items["4152"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="fT4"
                  id="fT4"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4153"),
                      value: state.items["4153"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="glucose"
                  id="glucose"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4154"),
                      value: state.items["4154"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="insulin"
                  id="insulin"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4155"),
                      value: state.items["4155"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="HbA1C"
                  id="HbA1C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4156"),
                      value: state.items["4156"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BNP"
                  id="BNP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4157"),
                      value: state.items["4157"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="pro-BNP"
                  id="pro-BNP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4158"),
                      value: state.items["4158"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ST2"
                  id="ST2"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4159"),
                      value: state.items["4159"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={2}></GridItem>
          </GridContainer>
          </>
        )}




        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE Pre peak */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "Pre peak" &&(
          <>
          <h2>Pre peak</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("421"),
                  value: state.items["421"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("422"),
                      value: state.items["422"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("423"),
                      value: state.items["423"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("424"),
                      value: state.items["424"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("425"),
                      value: state.items["425"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("426"),
                      value: state.items["426"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("427"),
                      value: state.items["427"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("428"),
                      value: state.items["428"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("429"),
                      value: state.items["429"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4210"),
                      value: state.items["4210"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4211"),
                      value: state.items["4211"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4212"),
                      value: state.items["4212"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4213"),
                      value: state.items["4213"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4214"),
                      value: state.items["4214"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4215"),
                      value: state.items["4215"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4216"),
                      value: state.items["4216"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4217"),
                      value: state.items["4217"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4218"),
                      value: state.items["4218"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4219"),
                      value: state.items["4219"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4220"),
                      value: state.items["4220"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4221"),
                      value: state.items["4221"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4222"),
                      value: state.items["4222"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4223"),
                      value: state.items["4223"]
                  }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>            
          </GridContainer>
          </>
        )}




        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE Post 8hr's */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "Post 8hr's" &&(
          <>
          <h2>Post 8hr's</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("431"),
                  value: state.items["431"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("432"),
                      value: state.items["432"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("433"),
                      value: state.items["433"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("434"),
                      value: state.items["434"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("435"),
                      value: state.items["435"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("436"),
                      value: state.items["436"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("437"),
                      value: state.items["437"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("438"),
                      value: state.items["438"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("439"),
                      value: state.items["439"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4310"),
                      value: state.items["4310"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4311"),
                      value: state.items["4311"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4312"),
                      value: state.items["4312"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4313"),
                      value: state.items["4313"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4314"),
                      value: state.items["4314"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4315"),
                      value: state.items["4315"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4316"),
                      value: state.items["4316"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4317"),
                      value: state.items["4317"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4318"),
                      value: state.items["4318"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4319"),
                      value: state.items["4319"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4320"),
                      value: state.items["4320"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4321"),
                      value: state.items["4321"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4322"),
                      value: state.items["4322"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4323"),
                      value: state.items["4323"]
                  }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>            
          </GridContainer>
          </>
        )}





        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE Post 24hr's */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "Post 24hr's" &&(
          <>
          <h2>Post 24hr's</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("441"),
                  value: state.items["441"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("442"),
                      value: state.items["442"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("443"),
                      value: state.items["443"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("444"),
                      value: state.items["444"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("445"),
                      value: state.items["445"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("446"),
                      value: state.items["446"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("447"),
                      value: state.items["447"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("448"),
                      value: state.items["448"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("449"),
                      value: state.items["449"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4410"),
                      value: state.items["4410"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4411"),
                      value: state.items["4411"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4412"),
                      value: state.items["4412"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4413"),
                      value: state.items["4413"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4414"),
                      value: state.items["4414"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4415"),
                      value: state.items["4415"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4416"),
                      value: state.items["4416"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4417"),
                      value: state.items["4417"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4418"),
                      value: state.items["4418"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4419"),
                      value: state.items["4419"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4420"),
                      value: state.items["4420"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4421"),
                      value: state.items["4421"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4422"),
                      value: state.items["4422"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4423"),
                      value: state.items["4423"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ARU(PFA)"
                  id="ARU(PFA)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4424"),
                      value: state.items["4424"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ARU(Multiplate)"
                  id="ARU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4425"),
                      value: state.items["4425"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Multiplate)"
                  id="PRU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4426"),
                      value: state.items["4426"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Verifynow)"
                  id="PRU(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4427"),
                      value: state.items["4427"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="%inhibition(Verifynow)"
                  id="%inhibition(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4428"),
                      value: state.items["4428"]
                  }}
              />
            </GridItem>
          </GridContainer>
          </>
        )}





        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE Post 48hr's */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "Post 48hr's" &&(
          <>
          <h2>Post 48hr's</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("451"),
                  value: state.items["451"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("452"),
                      value: state.items["452"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("453"),
                      value: state.items["453"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("454"),
                      value: state.items["454"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("455"),
                      value: state.items["455"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("456"),
                      value: state.items["456"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("457"),
                      value: state.items["457"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("458"),
                      value: state.items["458"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("459"),
                      value: state.items["459"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4510"),
                      value: state.items["4510"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4511"),
                      value: state.items["4511"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4512"),
                      value: state.items["4512"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4513"),
                      value: state.items["4513"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4514"),
                      value: state.items["4514"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4515"),
                      value: state.items["4515"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4516"),
                      value: state.items["4516"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4517"),
                      value: state.items["4517"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4518"),
                      value: state.items["4518"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4519"),
                      value: state.items["4519"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4520"),
                      value: state.items["4520"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4521"),
                      value: state.items["4521"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4522"),
                      value: state.items["4522"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4523"),
                      value: state.items["4523"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ARU(PFA)"
                  id="ARU(PFA)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4524"),
                      value: state.items["4524"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ARU(Multiplate)"
                  id="ARU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4525"),
                      value: state.items["4525"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Multiplate)"
                  id="PRU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4526"),
                      value: state.items["4526"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Verifynow)"
                  id="PRU(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4527"),
                      value: state.items["4527"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="%inhibition(Verifynow)"
                  id="%inhibition(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4528"),
                      value: state.items["4528"]
                  }}
              />
            </GridItem>
          </GridContainer>
          </>
        )}




        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE discharge */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "discharge" &&(
          <>
          <h2>discharge</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("461"),
                  value: state.items["461"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("462"),
                      value: state.items["462"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("463"),
                      value: state.items["463"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("464"),
                      value: state.items["464"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("465"),
                      value: state.items["465"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("466"),
                      value: state.items["466"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("467"),
                      value: state.items["467"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("468"),
                      value: state.items["468"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("469"),
                      value: state.items["469"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4610"),
                      value: state.items["4610"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4611"),
                      value: state.items["4611"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4612"),
                      value: state.items["4612"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4613"),
                      value: state.items["4613"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4614"),
                      value: state.items["4614"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4615"),
                      value: state.items["4615"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4616"),
                      value: state.items["4616"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4617"),
                      value: state.items["4617"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4618"),
                      value: state.items["4618"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4619"),
                      value: state.items["4619"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4620"),
                      value: state.items["4620"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4621"),
                      value: state.items["4621"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4622"),
                      value: state.items["4622"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4623"),
                      value: state.items["4623"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ARU(PFA)"
                  id="ARU(PFA)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4624"),
                      value: state.items["4624"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ARU(Multiplate)"
                  id="ARU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4625"),
                      value: state.items["4625"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Multiplate)"
                  id="PRU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4626"),
                      value: state.items["4626"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Verifynow)"
                  id="PRU(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4627"),
                      value: state.items["4627"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="%inhibition(Verifynow)"
                  id="%inhibition(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4628"),
                      value: state.items["4628"]
                  }}
              />
            </GridItem>
          </GridContainer>
          </>
        )}




        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE 1 mo */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "1 mo" &&(
          <>
          <h2>1 mo</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("471"),
                  value: state.items["471"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("472"),
                      value: state.items["472"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("473"),
                      value: state.items["473"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("474"),
                      value: state.items["474"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("475"),
                      value: state.items["475"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("476"),
                      value: state.items["476"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("477"),
                      value: state.items["477"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("478"),
                      value: state.items["478"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("479"),
                      value: state.items["479"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4710"),
                      value: state.items["4710"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4711"),
                      value: state.items["4711"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4712"),
                      value: state.items["4712"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4713"),
                      value: state.items["4713"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4714"),
                      value: state.items["4714"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4715"),
                      value: state.items["4715"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4716"),
                      value: state.items["4716"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4717"),
                      value: state.items["4717"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4718"),
                      value: state.items["4718"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4719"),
                      value: state.items["4719"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4720"),
                      value: state.items["4720"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4721"),
                      value: state.items["4721"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4722"),
                      value: state.items["4722"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4723"),
                      value: state.items["4723"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ARU(PFA)"
                  id="ARU(PFA)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4724"),
                      value: state.items["4724"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ARU(Multiplate)"
                  id="ARU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4725"),
                      value: state.items["4725"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Multiplate)"
                  id="PRU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4726"),
                      value: state.items["4726"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Verifynow)"
                  id="PRU(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4727"),
                      value: state.items["4727"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="%inhibition(Verifynow)"
                  id="%inhibition(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4728"),
                      value: state.items["4728"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PT"
                  id="PT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4729"),
                      value: state.items["4729"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="APTT"
                  id="APTT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4730"),
                      value: state.items["4730"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TB"
                  id="TB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4731"),
                      value: state.items["4731"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="GGT"
                  id="GGT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4732"),
                      value: state.items["4732"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ALP"
                  id="ALP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4733"),
                      value: state.items["4733"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="AST"
                  id="AST"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4734"),
                      value: state.items["4734"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ALT"
                  id="ALT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4735"),
                      value: state.items["4735"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TC"
                  id="TC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4736"),
                      value: state.items["4736"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="TG"
                  id="TG"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4737"),
                      value: state.items["4737"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="HDL"
                  id="HDL"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4738"),
                      value: state.items["4738"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="LDL"
                  id="LDL"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4739"),
                      value: state.items["4739"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Lp(a)"
                  id="Lp(a)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4740"),
                      value: state.items["4740"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="Apo A"
                  id="Apo A"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4741"),
                      value: state.items["4741"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Apo B"
                  id="Apo B"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4742"),
                      value: state.items["4742"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-LDL_Pattern"
                  id="sd-LDL_Pattern"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4743"),
                      value: state.items["4743"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-Mean particle size(Å)"
                  id="sd-Mean particle size(Å)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4744"),
                      value: state.items["4744"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="sd-LDL_%sdLDL(%)"
                  id="sd-LDL_%sdLDL(%)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4745"),
                      value: state.items["4745"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>
            
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-LDL_sdLDL(mg/dL)"
                  id="sd-LDL_sdLDL(mg/dL)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4746"),
                      value: state.items["4746"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="homocystein"
                  id="homocystein"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4747"),
                      value: state.items["4747"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Na"
                  id="Na"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4748"),
                      value: state.items["4748"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="K"
                  id="K"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4749"),
                      value: state.items["4749"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Mg"
                  id="Mg"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4750"),
                      value: state.items["4750"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="uric acid"
                  id="uric acid"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4751"),
                      value: state.items["4751"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TSH"
                  id="TSH"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4752"),
                      value: state.items["4752"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="fT4"
                  id="fT4"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4753"),
                      value: state.items["4753"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="glucose"
                  id="glucose"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4754"),
                      value: state.items["4754"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="insulin"
                  id="insulin"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4755"),
                      value: state.items["4755"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="HbA1C"
                  id="HbA1C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4756"),
                      value: state.items["4756"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BNP"
                  id="BNP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4757"),
                      value: state.items["4757"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="pro-BNP"
                  id="pro-BNP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4758"),
                      value: state.items["4758"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ST2"
                  id="ST2"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4759"),
                      value: state.items["4759"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={2}></GridItem>
          </GridContainer>
          </>
        )}




        {/* ////////////////////////////////////////////////////////////// */}
        {/* NOTE 1 yr */}
        {/* ////////////////////////////////////////////////////////////// */}
        {state.items["401"] === "1 yr" &&(
          <>
          <h2>1 yr</h2>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                labelText="date"
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("481"),
                  value: state.items["481"],
                  placeholder: "mm-dd hh:mm"
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
          </GridContainer>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="WBC"
                  id="WBC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("482"),
                      value: state.items["482"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="neutrophi"
                  id="neutrophi"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("483"),
                      value: state.items["483"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="lympho"
                  id="lympho"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("484"),
                      value: state.items["484"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="mono"
                  id="mono"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("485"),
                      value: state.items["485"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="eosinophil"
                  id="eosinophil"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("486"),
                      value: state.items["486"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hb"
                  id="Hb"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("487"),
                      value: state.items["487"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Hct"
                  id="Hct"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("488"),
                      value: state.items["488"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="RDW"
                  id="RDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("489"),
                      value: state.items["489"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PLT"
                  id="PLT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4810"),
                      value: state.items["4810"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="MPV"
                  id="MPV"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4811"),
                      value: state.items["4811"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PDW"
                  id="PDW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4812"),
                      value: state.items["4812"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="IPW"
                  id="IPW"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4813"),
                      value: state.items["4813"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BUN"
                  id="BUN"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4814"),
                      value: state.items["4814"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cr"
                  id="Cr"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4815"),
                      value: state.items["4815"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Cystatic C"
                  id="Cystatic C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4816"),
                      value: state.items["4816"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <br></br>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="CK"
                  id="CK"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4817"),
                      value: state.items["4817"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CK-MB"
                  id="CK-MB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4818"),
                      value: state.items["4818"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TnT"
                  id="TnT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4819"),
                      value: state.items["4819"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="CRP"
                  id="CRP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4820"),
                      value: state.items["4820"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="IMA"
                  id="IMA"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4821"),
                      value: state.items["4821"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="fibrinogen"
                  id="fibrinogen"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4822"),
                      value: state.items["4822"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="D-dimer"
                  id="D-dimer"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4823"),
                      value: state.items["4823"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ARU(PFA)"
                  id="ARU(PFA)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4824"),
                      value: state.items["4824"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ARU(Multiplate)"
                  id="ARU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4825"),
                      value: state.items["4825"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Multiplate)"
                  id="PRU(Multiplate)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4826"),
                      value: state.items["4826"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="PRU(Verifynow)"
                  id="PRU(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4827"),
                      value: state.items["4827"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="%inhibition(Verifynow)"
                  id="%inhibition(Verifynow)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4828"),
                      value: state.items["4828"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="PT"
                  id="PT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4829"),
                      value: state.items["4829"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="APTT"
                  id="APTT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4830"),
                      value: state.items["4830"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TB"
                  id="TB"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4831"),
                      value: state.items["4831"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="GGT"
                  id="GGT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4832"),
                      value: state.items["4832"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="ALP"
                  id="ALP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4833"),
                      value: state.items["4833"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="AST"
                  id="AST"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4834"),
                      value: state.items["4834"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ALT"
                  id="ALT"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4835"),
                      value: state.items["4835"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TC"
                  id="TC"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4836"),
                      value: state.items["4836"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="TG"
                  id="TG"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4837"),
                      value: state.items["4837"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="HDL"
                  id="HDL"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4838"),
                      value: state.items["4838"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="LDL"
                  id="LDL"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4839"),
                      value: state.items["4839"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Lp(a)"
                  id="Lp(a)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4840"),
                      value: state.items["4840"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="Apo A"
                  id="Apo A"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4181"),
                      value: state.items["4841"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Apo B"
                  id="Apo B"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4842"),
                      value: state.items["4842"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-LDL_Pattern"
                  id="sd-LDL_Pattern"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4843"),
                      value: state.items["4843"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-Mean particle size(Å)"
                  id="sd-Mean particle size(Å)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4844"),
                      value: state.items["4844"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="sd-LDL_%sdLDL(%)"
                  id="sd-LDL_%sdLDL(%)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4845"),
                      value: state.items["4845"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>
            
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="sd-LDL_sdLDL(mg/dL)"
                  id="sd-LDL_sdLDL(mg/dL)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4846"),
                      value: state.items["4846"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="homocystein"
                  id="homocystein"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4847"),
                      value: state.items["4847"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Na"
                  id="Na"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4848"),
                      value: state.items["4848"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="K"
                  id="K"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4849"),
                      value: state.items["4849"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="Mg"
                  id="Mg"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4850"),
                      value: state.items["4850"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="uric acid"
                  id="uric acid"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4851"),
                      value: state.items["4851"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="TSH"
                  id="TSH"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4852"),
                      value: state.items["4852"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="fT4"
                  id="fT4"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4853"),
                      value: state.items["4853"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="glucose"
                  id="glucose"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4854"),
                      value: state.items["4854"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="insulin"
                  id="insulin"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4855"),
                      value: state.items["4855"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="HbA1C"
                  id="HbA1C"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4856"),
                      value: state.items["4856"]
                  }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
              <CustomInput
                  labelText="BNP"
                  id="BNP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4857"),
                      value: state.items["4857"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="pro-BNP"
                  id="pro-BNP"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4858"),
                      value: state.items["4858"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={1}></GridItem>

            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                  labelText="ST2"
                  id="ST2"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("4859"),
                      value: state.items["4859"]
                  }}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={2}></GridItem>
          </GridContainer>
          </>
        )}
      
    </CardBody>
  );
}