import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";
import Checkbox from "@material-ui/core/Checkbox";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Grid } from "@material-ui/core";

export default function LesionlevelPCIdata(props) {
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

  return (
    <CardBody>
      <h2>Lesion level PCI data</h2>
      {/*///////////////////////////////////////////////////////////////////*/}
      {/*Target lesion*/}
      {/*///////////////////////////////////////////////////////////////////*/}
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <h4 style={P_margin.child1Container}>Target lesion</h4>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="Target lesion date"
              id="Target lesion date"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("331"),
                  value: state.items["331"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["332"]}
                  onChange={handleCheckedChange("332")}
                  value={state.items["332"]}
              />
              }
              label="Lesion segment"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>Lesion characteristics 1)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["333"]}
                  onChange={handleCheckedChange("333")}
                  value={state.items["333"]}
              />
              }
              label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["334"]}
                  onChange={handleCheckedChange("334")}
                  value={state.items["334"]}
              />
              }
              label="Calcification"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["335"]}
                  onChange={handleCheckedChange("335")}
                  value={state.items["335"]}
              />
              }
              label="LM"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["336"]}
                  onChange={handleCheckedChange("336")}
                  value={state.items["336"]}
              />
              }
              label="LM-bifurction"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["337"]}
                  onChange={handleCheckedChange("337")}
                  value={state.items["337"]}
              />
              }
              label="non-LM bifurction"
          />
        </GridItem>   
      </GridContainer>

      <GridContainer>
      <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["338"]}
                  onChange={handleCheckedChange("338")}
                  value={state.items["338"]}
              />
              }
              label="CTO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["339"]}
                  onChange={handleCheckedChange("339")}
                  value={state.items["339"]}
              />
              }
              label="DES-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["3310"]}
                  onChange={handleCheckedChange("3310")}
                  value={state.items["3310"]}
              />
              }
              label="BMS-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["3311"]}
                  onChange={handleCheckedChange("3311")}
                  value={state.items["3311"]}
              />
              }
              label="Aorto-ostial"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["3312"]}
                  onChange={handleCheckedChange("3312")}
                  value={state.items["3312"]}
              />
              }
              label="Branch-ostial"
          />
        </GridItem> 
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomSelectBox
              selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("3313")
              }}
              value={state.items["3313"]}
              id="ACC/AHA type2"
              labelText="ACC/AHA type2"
              items={[
                  { title: "A" },
                  { title: "B1" },
                  { title: "B2" },
                  { title: "C" },
              ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_1</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3314"]}
                  onChange={handleCheckedChange("3314")}
                  value={state.items["3314"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3315"]}
                  onChange={handleCheckedChange("3315")}
                  value={state.items["3315"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3316"]}
                  onChange={handleCheckedChange("3316")}
                  value={state.items["3316"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3317"]}
                  onChange={handleCheckedChange("3317")}
                  value={state.items["3317"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3318"]}
                  onChange={handleCheckedChange("3318")}
                  value={state.items["3318"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3319"]}
                  onChange={handleCheckedChange("3319")}
                  value={state.items["3319"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3320"]}
                  onChange={handleCheckedChange("3320")}
                  value={state.items["3320"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3321"]}
                  onChange={handleCheckedChange("3321")}
                  value={state.items["3321"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3322"]}
                  onChange={handleCheckedChange("3322")}
                  value={state.items["3322"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3323"]}
                  onChange={handleCheckedChange("3323")}
                  value={state.items["3323"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3324"]}
                  onChange={handleCheckedChange("3324")}
                  value={state.items["3324"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3325"]}
                  onChange={handleCheckedChange("3325")}
                  value={state.items["3325"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3326"]}
                  onChange={handleCheckedChange("3326")}
                  value={state.items["3326"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3327"]}
                  onChange={handleCheckedChange("3327")}
                  value={state.items["3327"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3328"]}
                  onChange={handleCheckedChange("3328")}
                  value={state.items["3328"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3329"]}
                  onChange={handleCheckedChange("3329")}
                  value={state.items["3329"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3330"]}
                  onChange={handleCheckedChange("3330")}
                  value={state.items["3330"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3331"]}
                  onChange={handleCheckedChange("3331")}
                  value={state.items["3331"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3332"]}
                  onChange={handleCheckedChange("3332")}
                  value={state.items["3332"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3333"]}
                  onChange={handleCheckedChange("3333")}
                  value={state.items["3333"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3334"]}
                  onChange={handleCheckedChange("3334")}
                  value={state.items["3334"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3335"]}
                  onChange={handleCheckedChange("3335")}
                  value={state.items["3335"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3336"]}
                  onChange={handleCheckedChange("3336")}
                  value={state.items["3336"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3337"]}
                  onChange={handleCheckedChange("3337")}
                  value={state.items["3337"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
              <CustomInput
                  labelText="DES or DEB size(diameter, mm)"
                  id="DES or DEB size(diameter, mm)"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      onChange: handleValueChange("3338"),
                      value: state.items["3338"]
                  }}
              />
          </GridItem>
        </GridContainer>

        <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3339"),
                    value: state.items["3339"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_2</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3340"]}
                  onChange={handleCheckedChange("3340")}
                  value={state.items["3340"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3341"]}
                  onChange={handleCheckedChange("3341")}
                  value={state.items["3341"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3342"]}
                  onChange={handleCheckedChange("3342")}
                  value={state.items["3342"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3343"]}
                  onChange={handleCheckedChange("3343")}
                  value={state.items["3343"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3344"]}
                  onChange={handleCheckedChange("3344")}
                  value={state.items["3344"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3345"]}
                  onChange={handleCheckedChange("3345")}
                  value={state.items["3345"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3346"]}
                  onChange={handleCheckedChange("3346")}
                  value={state.items["3346"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3347"]}
                  onChange={handleCheckedChange("3347")}
                  value={state.items["3347"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3348"]}
                  onChange={handleCheckedChange("3348")}
                  value={state.items["3348"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3349"]}
                  onChange={handleCheckedChange("3349")}
                  value={state.items["3349"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3350"]}
                  onChange={handleCheckedChange("3350")}
                  value={state.items["3350"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3351"]}
                  onChange={handleCheckedChange("3351")}
                  value={state.items["3351"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3352"]}
                  onChange={handleCheckedChange("3352")}
                  value={state.items["3352"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3353"]}
                  onChange={handleCheckedChange("3353")}
                  value={state.items["3353"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3354"]}
                  onChange={handleCheckedChange("3354")}
                  value={state.items["3354"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3355"]}
                  onChange={handleCheckedChange("3355")}
                  value={state.items["3355"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3356"]}
                  onChange={handleCheckedChange("3356")}
                  value={state.items["3356"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3357"]}
                  onChange={handleCheckedChange("3357")}
                  value={state.items["3357"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3358"]}
                  onChange={handleCheckedChange("3358")}
                  value={state.items["3358"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3359"]}
                  onChange={handleCheckedChange("3359")}
                  value={state.items["3359"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3360"]}
                  onChange={handleCheckedChange("3360")}
                  value={state.items["3360"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3361"]}
                  onChange={handleCheckedChange("3361")}
                  value={state.items["3361"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3362"]}
                  onChange={handleCheckedChange("3362")}
                  value={state.items["3362"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3363"]}
                  onChange={handleCheckedChange("3363")}
                  value={state.items["3363"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3364"),
                    value: state.items["3364"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3365"),
                    value: state.items["3365"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_3</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3366"]}
                  onChange={handleCheckedChange("3366")}
                  value={state.items["3366"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3367"]}
                  onChange={handleCheckedChange("3367")}
                  value={state.items["3367"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3368"]}
                  onChange={handleCheckedChange("3368")}
                  value={state.items["3368"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3369"]}
                  onChange={handleCheckedChange("3369")}
                  value={state.items["3369"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3370"]}
                  onChange={handleCheckedChange("3370")}
                  value={state.items["3370"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3371"]}
                  onChange={handleCheckedChange("3371")}
                  value={state.items["3371"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3372"]}
                  onChange={handleCheckedChange("3372")}
                  value={state.items["3372"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3373"]}
                  onChange={handleCheckedChange("3373")}
                  value={state.items["3373"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3374"]}
                  onChange={handleCheckedChange("3374")}
                  value={state.items["3374"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3375"]}
                  onChange={handleCheckedChange("3375")}
                  value={state.items["3375"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3376"]}
                  onChange={handleCheckedChange("3376")}
                  value={state.items["3376"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3377"]}
                  onChange={handleCheckedChange("3377")}
                  value={state.items["3377"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3378"]}
                  onChange={handleCheckedChange("3378")}
                  value={state.items["3378"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3379"]}
                  onChange={handleCheckedChange("3379")}
                  value={state.items["3379"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3380"]}
                  onChange={handleCheckedChange("3380")}
                  value={state.items["3380"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3381"]}
                  onChange={handleCheckedChange("3381")}
                  value={state.items["3381"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3382"]}
                  onChange={handleCheckedChange("3382")}
                  value={state.items["3382"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3383"]}
                  onChange={handleCheckedChange("3383")}
                  value={state.items["3383"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3384"]}
                  onChange={handleCheckedChange("3384")}
                  value={state.items["3384"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3385"]}
                  onChange={handleCheckedChange("3385")}
                  value={state.items["3385"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3386"]}
                  onChange={handleCheckedChange("3386")}
                  value={state.items["3386"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3387"]}
                  onChange={handleCheckedChange("3387")}
                  value={state.items["3387"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3388"]}
                  onChange={handleCheckedChange("3388")}
                  value={state.items["3388"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3389"]}
                  onChange={handleCheckedChange("3389")}
                  value={state.items["3389"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3390"),
                    value: state.items["3390"]
                }}
            />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3391"),
                    value: state.items["3391"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_4</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3392"]}
                  onChange={handleCheckedChange("3392")}
                  value={state.items["3392"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3393"]}
                  onChange={handleCheckedChange("3393")}
                  value={state.items["3393"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3394"]}
                  onChange={handleCheckedChange("3394")}
                  value={state.items["3394"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3395"]}
                  onChange={handleCheckedChange("3395")}
                  value={state.items["3395"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3396"]}
                  onChange={handleCheckedChange("3396")}
                  value={state.items["3396"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3397"]}
                  onChange={handleCheckedChange("3397")}
                  value={state.items["3397"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3398"]}
                  onChange={handleCheckedChange("3398")}
                  value={state.items["3398"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["3399"]}
                  onChange={handleCheckedChange("3399")}
                  value={state.items["3399"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33100"]}
                  onChange={handleCheckedChange("33100")}
                  value={state.items["333100"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33101"]}
                  onChange={handleCheckedChange("33101")}
                  value={state.items["33101"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33102"]}
                  onChange={handleCheckedChange("33102")}
                  value={state.items["33102"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33103"]}
                  onChange={handleCheckedChange("33103")}
                  value={state.items["33103"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33104"]}
                  onChange={handleCheckedChange("33104")}
                  value={state.items["33104"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33105"]}
                  onChange={handleCheckedChange("33105")}
                  value={state.items["33105"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33106"]}
                  onChange={handleCheckedChange("33106")}
                  value={state.items["33106"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33107"]}
                  onChange={handleCheckedChange("33107")}
                  value={state.items["33107"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33108"]}
                  onChange={handleCheckedChange("33108")}
                  value={state.items["33108"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33109"]}
                  onChange={handleCheckedChange("33109")}
                  value={state.items["33109"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33110"]}
                  onChange={handleCheckedChange("33110")}
                  value={state.items["33110"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33111"]}
                  onChange={handleCheckedChange("33111")}
                  value={state.items["33111"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33112"]}
                  onChange={handleCheckedChange("33112")}
                  value={state.items["33112"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33113"]}
                  onChange={handleCheckedChange("33113")}
                  value={state.items["33113"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33114"]}
                  onChange={handleCheckedChange("33114")}
                  value={state.items["33114"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33115"]}
                  onChange={handleCheckedChange("33115")}
                  value={state.items["33115"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33116"),
                  value: state.items["33116"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33117"),
                  value: state.items["33117"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>Stenting technique 4)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33118"]}
                  onChange={handleCheckedChange("33118")}
                  value={state.items["33118"]}
              />
            }
            label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33119"]}
                  onChange={handleCheckedChange("33119")}
                  value={state.items["33119"]}
              />
            }
            label="Overlapping"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33120"]}
                  onChange={handleCheckedChange("33120")}
                  value={state.items["33120"]}
              />
            }
            label="Kissing stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33121"]}
                  onChange={handleCheckedChange("33121")}
                  value={state.items["33121"]}
              />
            }
            label="stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33122"]}
                  onChange={handleCheckedChange("33122")}
                  value={state.items["33122"]}
              />
            }
            label="Culotte stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33123"]}
                  onChange={handleCheckedChange("33123")}
                  value={state.items["33123"]}
              />
            }
            label="Crushing"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33124"]}
                  onChange={handleCheckedChange("33124")}
                  value={state.items["33124"]}
              />
            }
            label="Direct stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>Balloon technique 5)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33125"]}
                  onChange={handleCheckedChange("33125")}
                  value={state.items["33125"]}
              />
            }
            label="no additional balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33126"]}
                  onChange={handleCheckedChange("33126")}
                  value={state.items["33126"]}
              />
            }
            label="stent balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33127"]}
                  onChange={handleCheckedChange("33127")}
                  value={state.items["33127"]}
              />
            }
            label="NC balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33128"]}
                  onChange={handleCheckedChange("33128")}
                  value={state.items["33128"]}
              />
            }
            label="Kissing balloon"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33129"]}
                  onChange={handleCheckedChange("33129")}
                  value={state.items["33129"]}
              />
            }
            label="sequential balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33130"]}
                  onChange={handleCheckedChange("33130")}
                  value={state.items["33130"]}
              />
            }
            label="POT"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA pre mean ref"
              id="QCA pre mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33131"),
                  value: state.items["33131"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA pre MLD"
              id="QCA pre MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33132"),
                  value: state.items["33132"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre % DS"
              id="pre % DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33133"),
                  value: state.items["33133"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="Lesion length"
              id="Lesion length"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33134"),
                  value: state.items["33134"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA post mean ref"
              id="QCA post mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33135"),
                  value: state.items["33135"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA in-stent MLD"
              id="QCA in-stent MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33136"),
                  value: state.items["33136"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post % stent DS"
              id="post % stent DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33137"),
                  value: state.items["33137"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="prox seg MLD"
              id="prox seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33138"),
                  value: state.items["33138"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="distal seg MLD"
              id="distal seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33139"),
                  value: state.items["33139"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI flow"
              id="pre TIMI fow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33140"),
                  value: state.items["33140"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TIMI flow"
              id="post TIMI flow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33141"),
                  value: state.items["33141"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI frame c"
              id="pre TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33142"),
                  value: state.items["33142"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="post TIMI frame C"
              id="post TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33143"),
                  value: state.items["33143"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TPG"
              id="pre TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33144"),
                  value: state.items["33144"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TPG"
              id="post TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33145"),
                  value: state.items["33145"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>


      {/*///////////////////////////////////////////////////////////////////*/}
      {/*Non culplit_1*/}
      {/*///////////////////////////////////////////////////////////////////*/}
     
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>Non culplit_1</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="Non culplit_1_Date"
                id="Non culplit_1_Date"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("331"),
                    value: state.items["331"]
                }}
            />
        </GridItem>
      </GridContainer>     

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33147"]}
                  onChange={handleCheckedChange("33147")}
                  value={state.items["33147"]}
              />
              }
              label="Lesion segment"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>Lesion characteristics 1)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33148"]}
                  onChange={handleCheckedChange("33148")}
                  value={state.items["33148"]}
              />
              }
              label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33149"]}
                  onChange={handleCheckedChange("33149")}
                  value={state.items["33149"]}
              />
              }
              label="Calcification"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33150"]}
                  onChange={handleCheckedChange("33150")}
                  value={state.items["33150"]}
              />
              }
              label="LM"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33151"]}
                  onChange={handleCheckedChange("33151")}
                  value={state.items["33151"]}
              />
              }
              label="LM-bifurction"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33152"]}
                  onChange={handleCheckedChange("33152")}
                  value={state.items["33152"]}
              />
              }
              label="non-LM bifurction"
          />
        </GridItem>   
      </GridContainer>

      <GridContainer>
      <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33153"]}
                  onChange={handleCheckedChange("33153")}
                  value={state.items["33153"]}
              />
              }
              label="CTO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33154"]}
                  onChange={handleCheckedChange("33154")}
                  value={state.items["33154"]}
              />
              }
              label="DES-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33155"]}
                  onChange={handleCheckedChange("33155")}
                  value={state.items["33155"]}
              />
              }
              label="BMS-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33156"]}
                  onChange={handleCheckedChange("33156")}
                  value={state.items["33156"]}
              />
              }
              label="Aorto-ostial"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33157"]}
                  onChange={handleCheckedChange("33157")}
                  value={state.items["33157"]}
              />
              }
              label="Branch-ostial"
          />
        </GridItem> 
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomSelectBox
              selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("33158")
              }}
              value={state.items["33158"]}
              id="ACC/AHA type2"
              labelText="ACC/AHA type2"
              items={[
                  { title: "A" },
                  { title: "B1" },
                  { title: "B2" },
                  { title: "C" },
              ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_1</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33159"]}
                  onChange={handleCheckedChange("33159")}
                  value={state.items["33159"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33160"]}
                  onChange={handleCheckedChange("33160")}
                  value={state.items["33160"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33161"]}
                  onChange={handleCheckedChange("33161")}
                  value={state.items["33161"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33162"]}
                  onChange={handleCheckedChange("33162")}
                  value={state.items["33162"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33163"]}
                  onChange={handleCheckedChange("33163")}
                  value={state.items["33163"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33164"]}
                  onChange={handleCheckedChange("33164")}
                  value={state.items["33164"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33165"]}
                  onChange={handleCheckedChange("33165")}
                  value={state.items["33165"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33166"]}
                  onChange={handleCheckedChange("33166")}
                  value={state.items["33166"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33167"]}
                  onChange={handleCheckedChange("33167")}
                  value={state.items["33167"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33168"]}
                  onChange={handleCheckedChange("33168")}
                  value={state.items["33168"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33169"]}
                  onChange={handleCheckedChange("33169")}
                  value={state.items["33169"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33170"]}
                  onChange={handleCheckedChange("33170")}
                  value={state.items["33170"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33171"]}
                  onChange={handleCheckedChange("33171")}
                  value={state.items["33171"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33172"]}
                  onChange={handleCheckedChange("33172")}
                  value={state.items["33172"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33173"]}
                  onChange={handleCheckedChange("33173")}
                  value={state.items["33173"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33174"]}
                  onChange={handleCheckedChange("33174")}
                  value={state.items["33174"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33175"]}
                  onChange={handleCheckedChange("33175")}
                  value={state.items["33175"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33176"]}
                  onChange={handleCheckedChange("33176")}
                  value={state.items["33176"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33177"]}
                  onChange={handleCheckedChange("33177")}
                  value={state.items["33177"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33178"]}
                  onChange={handleCheckedChange("33178")}
                  value={state.items["33178"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33179"]}
                  onChange={handleCheckedChange("33179")}
                  value={state.items["33179"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33180"]}
                  onChange={handleCheckedChange("33180")}
                  value={state.items["33180"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33181"]}
                  onChange={handleCheckedChange("33181")}
                  value={state.items["33181"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33182"]}
                  onChange={handleCheckedChange("33182")}
                  value={state.items["33182"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33183"),
                  value: state.items["33183"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33184"),
                  value: state.items["33184"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_2</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33185"]}
                  onChange={handleCheckedChange("33185")}
                  value={state.items["33185"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33186"]}
                  onChange={handleCheckedChange("33186")}
                  value={state.items["33186"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33187"]}
                  onChange={handleCheckedChange("33187")}
                  value={state.items["33187"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33188"]}
                  onChange={handleCheckedChange("33188")}
                  value={state.items["33188"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33189"]}
                  onChange={handleCheckedChange("33189")}
                  value={state.items["33189"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33190"]}
                  onChange={handleCheckedChange("33190")}
                  value={state.items["33190"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33191"]}
                  onChange={handleCheckedChange("33191")}
                  value={state.items["33191"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33192"]}
                  onChange={handleCheckedChange("33192")}
                  value={state.items["33192"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33193"]}
                  onChange={handleCheckedChange("33193")}
                  value={state.items["33193"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33194"]}
                  onChange={handleCheckedChange("33194")}
                  value={state.items["33194"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33195"]}
                  onChange={handleCheckedChange("33195")}
                  value={state.items["33195"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33196"]}
                  onChange={handleCheckedChange("33196")}
                  value={state.items["33196"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33197"]}
                  onChange={handleCheckedChange("33197")}
                  value={state.items["33197"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33198"]}
                  onChange={handleCheckedChange("33198")}
                  value={state.items["33198"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33199"]}
                  onChange={handleCheckedChange("33199")}
                  value={state.items["33199"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33200"]}
                  onChange={handleCheckedChange("33200")}
                  value={state.items["33200"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33201"]}
                  onChange={handleCheckedChange("33201")}
                  value={state.items["33201"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33202"]}
                  onChange={handleCheckedChange("33202")}
                  value={state.items["33202"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33203"]}
                  onChange={handleCheckedChange("33203")}
                  value={state.items["33203"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33204"]}
                  onChange={handleCheckedChange("33204")}
                  value={state.items["33204"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33205"]}
                  onChange={handleCheckedChange("33205")}
                  value={state.items["33205"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33206"]}
                  onChange={handleCheckedChange("33206")}
                  value={state.items["33206"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33207"]}
                  onChange={handleCheckedChange("33207")}
                  value={state.items["33207"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33208"]}
                  onChange={handleCheckedChange("33208")}
                  value={state.items["33208"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33209"),
                    value: state.items["33209"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33210"),
                    value: state.items["33210"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_3</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33211"]}
                  onChange={handleCheckedChange("33211")}
                  value={state.items["33211"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33212"]}
                  onChange={handleCheckedChange("33212")}
                  value={state.items["33212"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33213"]}
                  onChange={handleCheckedChange("33213")}
                  value={state.items["33213"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33214"]}
                  onChange={handleCheckedChange("33214")}
                  value={state.items["33214"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33215"]}
                  onChange={handleCheckedChange("33215")}
                  value={state.items["33215"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33216"]}
                  onChange={handleCheckedChange("33216")}
                  value={state.items["33216"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33217"]}
                  onChange={handleCheckedChange("33217")}
                  value={state.items["33217"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33218"]}
                  onChange={handleCheckedChange("33218")}
                  value={state.items["33218"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33219"]}
                  onChange={handleCheckedChange("33219")}
                  value={state.items["33219"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33220"]}
                  onChange={handleCheckedChange("33220")}
                  value={state.items["33220"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33221"]}
                  onChange={handleCheckedChange("33221")}
                  value={state.items["33221"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33222"]}
                  onChange={handleCheckedChange("33222")}
                  value={state.items["33222"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33223"]}
                  onChange={handleCheckedChange("33223")}
                  value={state.items["33223"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33224"]}
                  onChange={handleCheckedChange("33224")}
                  value={state.items["33224"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33225"]}
                  onChange={handleCheckedChange("33225")}
                  value={state.items["33225"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33226"]}
                  onChange={handleCheckedChange("33226")}
                  value={state.items["33226"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33227"]}
                  onChange={handleCheckedChange("33227")}
                  value={state.items["33227"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33228"]}
                  onChange={handleCheckedChange("33228")}
                  value={state.items["33228"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33229"]}
                  onChange={handleCheckedChange("33229")}
                  value={state.items["33229"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33230"]}
                  onChange={handleCheckedChange("33230")}
                  value={state.items["33230"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33231"]}
                  onChange={handleCheckedChange("33231")}
                  value={state.items["33231"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33232"]}
                  onChange={handleCheckedChange("33232")}
                  value={state.items["33232"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33233"]}
                  onChange={handleCheckedChange("33233")}
                  value={state.items["33233"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33234"]}
                  onChange={handleCheckedChange("33234")}
                  value={state.items["33234"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33235"),
                    value: state.items["33235"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33236"),
                    value: state.items["33236"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <p>DES or DEB name_4</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33237"]}
                  onChange={handleCheckedChange("33237")}
                  value={state.items["33237"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33238"]}
                  onChange={handleCheckedChange("33238")}
                  value={state.items["33238"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33239"]}
                  onChange={handleCheckedChange("33239")}
                  value={state.items["33239"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33240"]}
                  onChange={handleCheckedChange("33240")}
                  value={state.items["33240"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33241"]}
                  onChange={handleCheckedChange("33241")}
                  value={state.items["33241"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33242"]}
                  onChange={handleCheckedChange("33242")}
                  value={state.items["33242"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33243"]}
                  onChange={handleCheckedChange("33243")}
                  value={state.items["33243"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33244"]}
                  onChange={handleCheckedChange("33244")}
                  value={state.items["33244"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33245"]}
                  onChange={handleCheckedChange("33245")}
                  value={state.items["33245"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33246"]}
                  onChange={handleCheckedChange("33246")}
                  value={state.items["33246"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33247"]}
                  onChange={handleCheckedChange("33247")}
                  value={state.items["33247"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33248"]}
                  onChange={handleCheckedChange("33248")}
                  value={state.items["33248"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33249"]}
                  onChange={handleCheckedChange("33249")}
                  value={state.items["33249"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33250"]}
                  onChange={handleCheckedChange("33250")}
                  value={state.items["33250"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33251"]}
                  onChange={handleCheckedChange("33251")}
                  value={state.items["33251"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33252"]}
                  onChange={handleCheckedChange("33252")}
                  value={state.items["33252"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33253"]}
                  onChange={handleCheckedChange("33253")}
                  value={state.items["33253"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33254"]}
                  onChange={handleCheckedChange("33254")}
                  value={state.items["33254"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33255"]}
                  onChange={handleCheckedChange("33255")}
                  value={state.items["33255"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33256"]}
                  onChange={handleCheckedChange("33256")}
                  value={state.items["33256"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33257"]}
                  onChange={handleCheckedChange("33257")}
                  value={state.items["33257"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33258"]}
                  onChange={handleCheckedChange("33258")}
                  value={state.items["33258"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33259"]}
                  onChange={handleCheckedChange("33259")}
                  value={state.items["33259"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33260"]}
                  onChange={handleCheckedChange("33260")}
                  value={state.items["33260"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33261"),
                  value: state.items["33261"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33262"),
                  value: state.items["33262"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <p>Stenting technique4)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33263"]}
                  onChange={handleCheckedChange("33263")}
                  value={state.items["33263"]}
              />
            }
            label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33264"]}
                  onChange={handleCheckedChange("33264")}
                  value={state.items["33264"]}
              />
            }
            label="Overlapping"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33265"]}
                  onChange={handleCheckedChange("33265")}
                  value={state.items["33265"]}
              />
            }
            label="Kissing stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33266"]}
                  onChange={handleCheckedChange("33266")}
                  value={state.items["33266"]}
              />
            }
            label="stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33267"]}
                  onChange={handleCheckedChange("33267")}
                  value={state.items["33267"]}
              />
            }
            label="Culotte stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33268"]}
                  onChange={handleCheckedChange("33268")}
                  value={state.items["33268"]}
              />
            }
            label="Crushing"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33269"]}
                  onChange={handleCheckedChange("33269")}
                  value={state.items["33269"]}
              />
            }
            label="Direct stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <p style={P_margin.child2Container}>Balloon technique5)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33270"]}
                  onChange={handleCheckedChange("33270")}
                  value={state.items["33270"]}
              />
            }
            label="no additional balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33271"]}
                  onChange={handleCheckedChange("33271")}
                  value={state.items["33271"]}
              />
            }
            label="stent balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33272"]}
                  onChange={handleCheckedChange("33272")}
                  value={state.items["33272"]}
              />
            }
            label="NC balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33273"]}
                  onChange={handleCheckedChange("33273")}
                  value={state.items["33273"]}
              />
            }
            label="Kissing balloon"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33274"]}
                  onChange={handleCheckedChange("33274")}
                  value={state.items["33274"]}
              />
            }
            label="sequential balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33275"]}
                  onChange={handleCheckedChange("33275")}
                  value={state.items["33275"]}
              />
            }
            label="POT"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA pre mean ref"
              id="QCA pre mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33276"),
                  value: state.items["33276"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA pre MLD"
              id="QCA pre MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33277"),
                  value: state.items["33277"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre % DS"
              id="pre % DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33278"),
                  value: state.items["33278"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="Lesion length"
              id="Lesion length"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33279"),
                  value: state.items["33279"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA post mean ref"
              id="QCA post mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33280"),
                  value: state.items["33280"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA in-stent MLD"
              id="QCA in-stent MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33281"),
                  value: state.items["33281"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post % stent DS"
              id="post % stent DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33282"),
                  value: state.items["33282"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="prox seg MLD"
              id="prox seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33283"),
                  value: state.items["33283"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="distal seg MLD"
              id="distal seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33284"),
                  value: state.items["33284"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI flow"
              id="pre TIMI fow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33285"),
                  value: state.items["33285"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TIMI flow"
              id="post TIMI flow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33286"),
                  value: state.items["33286"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI frame c"
              id="pre TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33287"),
                  value: state.items["33287"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="post TIMI frame C"
              id="post TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33288"),
                  value: state.items["33288"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TPG"
              id="pre TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33289"),
                  value: state.items["33289"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TPG"
              id="post TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33290"),
                  value: state.items["33290"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>


      {/*///////////////////////////////////////////////////////////////////*/}
      {/*Non culplit_2*/}
      {/*///////////////////////////////////////////////////////////////////*/}

      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>Non culplit_2</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="Non culplit_2_Date"
                id="Non culplit_2_Date"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33291"),
                    value: state.items["33291"]
                }}
            />
        </GridItem>
      </GridContainer> 

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33292"]}
                  onChange={handleCheckedChange("33292")}
                  value={state.items["33292"]}
              />
              }
              label="Lesion segment"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>Lesion characteristics 1)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33293"]}
                  onChange={handleCheckedChange("33293")}
                  value={state.items["33293"]}
              />
              }
              label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33294"]}
                  onChange={handleCheckedChange("33294")}
                  value={state.items["33294"]}
              />
              }
              label="Calcification"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33295"]}
                  onChange={handleCheckedChange("33295")}
                  value={state.items["33295"]}
              />
              }
              label="LM"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33296"]}
                  onChange={handleCheckedChange("33296")}
                  value={state.items["33296"]}
              />
              }
              label="LM-bifurction"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33297"]}
                  onChange={handleCheckedChange("33297")}
                  value={state.items["33297"]}
              />
              }
              label="non-LM bifurction"
          />
        </GridItem>   
      </GridContainer>

      <GridContainer>
      <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33298"]}
                  onChange={handleCheckedChange("33298")}
                  value={state.items["33298"]}
              />
              }
              label="CTO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33299"]}
                  onChange={handleCheckedChange("33299")}
                  value={state.items["33299"]}
              />
              }
              label="DES-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33300"]}
                  onChange={handleCheckedChange("33300")}
                  value={state.items["33300"]}
              />
              }
              label="BMS-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33301"]}
                  onChange={handleCheckedChange("33301")}
                  value={state.items["33301"]}
              />
              }
              label="Aorto-ostial"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33302"]}
                  onChange={handleCheckedChange("33302")}
                  value={state.items["33302"]}
              />
              }
              label="Branch-ostial"
          />
        </GridItem> 
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomSelectBox
              selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("33303")
              }}
              value={state.items["33303"]}
              id="ACC/AHA type2"
              labelText="ACC/AHA type2"
              items={[
                  { title: "A" },
                  { title: "B1" },
                  { title: "B2" },
                  { title: "C" },
              ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_1</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33304"]}
                  onChange={handleCheckedChange("33304")}
                  value={state.items["33304"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33305"]}
                  onChange={handleCheckedChange("33305")}
                  value={state.items["33305"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33306"]}
                  onChange={handleCheckedChange("33306")}
                  value={state.items["33306"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33307"]}
                  onChange={handleCheckedChange("33307")}
                  value={state.items["33307"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33308"]}
                  onChange={handleCheckedChange("33308")}
                  value={state.items["33308"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33309"]}
                  onChange={handleCheckedChange("33309")}
                  value={state.items["33309"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33310"]}
                  onChange={handleCheckedChange("33310")}
                  value={state.items["33310"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33311"]}
                  onChange={handleCheckedChange("33311")}
                  value={state.items["33311"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33312"]}
                  onChange={handleCheckedChange("33312")}
                  value={state.items["33312"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33313"]}
                  onChange={handleCheckedChange("33313")}
                  value={state.items["33313"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33314"]}
                  onChange={handleCheckedChange("33314")}
                  value={state.items["33314"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33315"]}
                  onChange={handleCheckedChange("33315")}
                  value={state.items["33315"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33316"]}
                  onChange={handleCheckedChange("33316")}
                  value={state.items["33316"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33317"]}
                  onChange={handleCheckedChange("33317")}
                  value={state.items["33317"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33318"]}
                  onChange={handleCheckedChange("33318")}
                  value={state.items["33318"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33319"]}
                  onChange={handleCheckedChange("33319")}
                  value={state.items["33319"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33320"]}
                  onChange={handleCheckedChange("33320")}
                  value={state.items["33320"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33321"]}
                  onChange={handleCheckedChange("33321")}
                  value={state.items["33321"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33322"]}
                  onChange={handleCheckedChange("33322")}
                  value={state.items["33322"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33323"]}
                  onChange={handleCheckedChange("33323")}
                  value={state.items["33323"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33324"]}
                  onChange={handleCheckedChange("33324")}
                  value={state.items["33324"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33325"]}
                  onChange={handleCheckedChange("33325")}
                  value={state.items["33325"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33326"]}
                  onChange={handleCheckedChange("33326")}
                  value={state.items["33326"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33327"]}
                  onChange={handleCheckedChange("33327")}
                  value={state.items["33327"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33328"),
                  value: state.items["33328"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33329"),
                  value: state.items["33329"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_2</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33330"]}
                  onChange={handleCheckedChange("33330")}
                  value={state.items["33330"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33331"]}
                  onChange={handleCheckedChange("33331")}
                  value={state.items["33331"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33332"]}
                  onChange={handleCheckedChange("33332")}
                  value={state.items["33332"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33333"]}
                  onChange={handleCheckedChange("33333")}
                  value={state.items["33333"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33334"]}
                  onChange={handleCheckedChange("33334")}
                  value={state.items["33334"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33335"]}
                  onChange={handleCheckedChange("33335")}
                  value={state.items["33335"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33336"]}
                  onChange={handleCheckedChange("33336")}
                  value={state.items["33336"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33337"]}
                  onChange={handleCheckedChange("33337")}
                  value={state.items["33337"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33338"]}
                  onChange={handleCheckedChange("33338")}
                  value={state.items["33338"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33339"]}
                  onChange={handleCheckedChange("33339")}
                  value={state.items["33339"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33340"]}
                  onChange={handleCheckedChange("33340")}
                  value={state.items["33340"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33341"]}
                  onChange={handleCheckedChange("33341")}
                  value={state.items["33341"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33342"]}
                  onChange={handleCheckedChange("33342")}
                  value={state.items["33342"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33343"]}
                  onChange={handleCheckedChange("33343")}
                  value={state.items["33343"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33344"]}
                  onChange={handleCheckedChange("33344")}
                  value={state.items["33344"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33345"]}
                  onChange={handleCheckedChange("33345")}
                  value={state.items["33345"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33346"]}
                  onChange={handleCheckedChange("33346")}
                  value={state.items["33346"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33347"]}
                  onChange={handleCheckedChange("33347")}
                  value={state.items["33347"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33348"]}
                  onChange={handleCheckedChange("33348")}
                  value={state.items["33348"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33349"]}
                  onChange={handleCheckedChange("33349")}
                  value={state.items["33349"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33350"]}
                  onChange={handleCheckedChange("33350")}
                  value={state.items["33350"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33351"]}
                  onChange={handleCheckedChange("33351")}
                  value={state.items["33351"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33352"]}
                  onChange={handleCheckedChange("33352")}
                  value={state.items["33352"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33353"]}
                  onChange={handleCheckedChange("33353")}
                  value={state.items["33353"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33354"),
                    value: state.items["33354"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33355"),
                    value: state.items["33355"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_3</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33356"]}
                  onChange={handleCheckedChange("33356")}
                  value={state.items["33356"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33357"]}
                  onChange={handleCheckedChange("33357")}
                  value={state.items["33357"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33358"]}
                  onChange={handleCheckedChange("33358")}
                  value={state.items["33358"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33359"]}
                  onChange={handleCheckedChange("33359")}
                  value={state.items["33359"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33360"]}
                  onChange={handleCheckedChange("33360")}
                  value={state.items["33360"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33361"]}
                  onChange={handleCheckedChange("33361")}
                  value={state.items["33361"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33362"]}
                  onChange={handleCheckedChange("33362")}
                  value={state.items["33362"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33363"]}
                  onChange={handleCheckedChange("33363")}
                  value={state.items["33363"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33364"]}
                  onChange={handleCheckedChange("33364")}
                  value={state.items["33364"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33365"]}
                  onChange={handleCheckedChange("33365")}
                  value={state.items["33365"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33366"]}
                  onChange={handleCheckedChange("33366")}
                  value={state.items["33366"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33367"]}
                  onChange={handleCheckedChange("33367")}
                  value={state.items["33367"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33368"]}
                  onChange={handleCheckedChange("33368")}
                  value={state.items["33368"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33369"]}
                  onChange={handleCheckedChange("33369")}
                  value={state.items["33369"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33370"]}
                  onChange={handleCheckedChange("33370")}
                  value={state.items["33370"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33371"]}
                  onChange={handleCheckedChange("33371")}
                  value={state.items["33371"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33372"]}
                  onChange={handleCheckedChange("33372")}
                  value={state.items["33372"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33373"]}
                  onChange={handleCheckedChange("33373")}
                  value={state.items["33373"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33374"]}
                  onChange={handleCheckedChange("33374")}
                  value={state.items["33374"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33375"]}
                  onChange={handleCheckedChange("33375")}
                  value={state.items["33375"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33376"]}
                  onChange={handleCheckedChange("33376")}
                  value={state.items["33376"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33377"]}
                  onChange={handleCheckedChange("33377")}
                  value={state.items["33377"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33378"]}
                  onChange={handleCheckedChange("33378")}
                  value={state.items["33378"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33379"]}
                  onChange={handleCheckedChange("33379")}
                  value={state.items["33379"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33380"),
                    value: state.items["33380"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33381"),
                    value: state.items["33381"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <p>DES or DEB name_4</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33382"]}
                  onChange={handleCheckedChange("33382")}
                  value={state.items["33382"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33383"]}
                  onChange={handleCheckedChange("33383")}
                  value={state.items["33383"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33384"]}
                  onChange={handleCheckedChange("33384")}
                  value={state.items["33384"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33385"]}
                  onChange={handleCheckedChange("33385")}
                  value={state.items["33385"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33386"]}
                  onChange={handleCheckedChange("33386")}
                  value={state.items["33386"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33387"]}
                  onChange={handleCheckedChange("33387")}
                  value={state.items["33387"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33388"]}
                  onChange={handleCheckedChange("33388")}
                  value={state.items["33388"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33389"]}
                  onChange={handleCheckedChange("33389")}
                  value={state.items["33389"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33390"]}
                  onChange={handleCheckedChange("33390")}
                  value={state.items["33390"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33391"]}
                  onChange={handleCheckedChange("33391")}
                  value={state.items["33391"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33392"]}
                  onChange={handleCheckedChange("33392")}
                  value={state.items["33392"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33393"]}
                  onChange={handleCheckedChange("33393")}
                  value={state.items["33393"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33394"]}
                  onChange={handleCheckedChange("33394")}
                  value={state.items["33394"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33395"]}
                  onChange={handleCheckedChange("33395")}
                  value={state.items["33395"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33396"]}
                  onChange={handleCheckedChange("33396")}
                  value={state.items["33396"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33397"]}
                  onChange={handleCheckedChange("33397")}
                  value={state.items["33397"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33398"]}
                  onChange={handleCheckedChange("33398")}
                  value={state.items["33398"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33399"]}
                  onChange={handleCheckedChange("33399")}
                  value={state.items["33399"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33400"]}
                  onChange={handleCheckedChange("33400")}
                  value={state.items["33400"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33401"]}
                  onChange={handleCheckedChange("33401")}
                  value={state.items["33401"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33402"]}
                  onChange={handleCheckedChange("33402")}
                  value={state.items["33402"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33403"]}
                  onChange={handleCheckedChange("33403")}
                  value={state.items["33403"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33404"]}
                  onChange={handleCheckedChange("33404")}
                  value={state.items["33404"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33405"]}
                  onChange={handleCheckedChange("33405")}
                  value={state.items["33405"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33406"),
                  value: state.items["33406"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33407"),
                  value: state.items["33407"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <p>Stenting technique4)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33408"]}
                  onChange={handleCheckedChange("33408")}
                  value={state.items["33408"]}
              />
            }
            label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33409"]}
                  onChange={handleCheckedChange("33409")}
                  value={state.items["33409"]}
              />
            }
            label="Overlapping"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33410"]}
                  onChange={handleCheckedChange("33410")}
                  value={state.items["33410"]}
              />
            }
            label="Kissing stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33411"]}
                  onChange={handleCheckedChange("33411")}
                  value={state.items["33411"]}
              />
            }
            label="stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33412"]}
                  onChange={handleCheckedChange("33412")}
                  value={state.items["33412"]}
              />
            }
            label="Culotte stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33413"]}
                  onChange={handleCheckedChange("33413")}
                  value={state.items["33413"]}
              />
            }
            label="Crushing"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33414"]}
                  onChange={handleCheckedChange("33414")}
                  value={state.items["33414"]}
              />
            }
            label="Direct stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <p style={P_margin.child2Container}>Balloon technique5)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33415"]}
                  onChange={handleCheckedChange("33415")}
                  value={state.items["33415"]}
              />
            }
            label="no additional balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33416"]}
                  onChange={handleCheckedChange("33416")}
                  value={state.items["33416"]}
              />
            }
            label="stent balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33417"]}
                  onChange={handleCheckedChange("33417")}
                  value={state.items["33417"]}
              />
            }
            label="NC balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33418"]}
                  onChange={handleCheckedChange("33418")}
                  value={state.items["33418"]}
              />
            }
            label="Kissing balloon"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33419"]}
                  onChange={handleCheckedChange("33419")}
                  value={state.items["33419"]}
              />
            }
            label="sequential balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33420"]}
                  onChange={handleCheckedChange("33420")}
                  value={state.items["33420"]}
              />
            }
            label="POT"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA pre mean ref"
              id="QCA pre mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33421"),
                  value: state.items["33421"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA pre MLD"
              id="QCA pre MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33422"),
                  value: state.items["33422"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre % DS"
              id="pre % DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33423"),
                  value: state.items["33423"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="Lesion length"
              id="Lesion length"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33424"),
                  value: state.items["33424"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA post mean ref"
              id="QCA post mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33425"),
                  value: state.items["33425"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA in-stent MLD"
              id="QCA in-stent MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33426"),
                  value: state.items["33426"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post % stent DS"
              id="post % stent DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33427"),
                  value: state.items["33427"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="prox seg MLD"
              id="prox seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33428"),
                  value: state.items["33428"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="distal seg MLD"
              id="distal seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33429"),
                  value: state.items["33429"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI flow"
              id="pre TIMI fow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33430"),
                  value: state.items["33430"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TIMI flow"
              id="post TIMI flow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33431"),
                  value: state.items["33431"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI frame c"
              id="pre TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33432"),
                  value: state.items["33432"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="post TIMI frame C"
              id="post TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33433"),
                  value: state.items["33433"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TPG"
              id="pre TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33434"),
                  value: state.items["33434"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TPG"
              id="post TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33435"),
                  value: state.items["33435"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>



      {/*///////////////////////////////////////////////////////////////////*/}
      {/*Non culplit_3*/}
      {/*///////////////////////////////////////////////////////////////////*/}
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>Non culplit_3</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="Non culplit_3_Date"
                id="Non culplit_3_Date"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33436"),
                    value: state.items["33436"]
                }}
            />
        </GridItem>
      </GridContainer> 

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33437"]}
                  onChange={handleCheckedChange("33437")}
                  value={state.items["33437"]}
              />
              }
              label="Lesion segment"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>Lesion characteristics 1)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33438"]}
                  onChange={handleCheckedChange("33438")}
                  value={state.items["33438"]}
              />
              }
              label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33439"]}
                  onChange={handleCheckedChange("33439")}
                  value={state.items["33439"]}
              />
              }
              label="Calcification"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33440"]}
                  onChange={handleCheckedChange("33440")}
                  value={state.items["33440"]}
              />
              }
              label="LM"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33441"]}
                  onChange={handleCheckedChange("33441")}
                  value={state.items["33441"]}
              />
              }
              label="LM-bifurction"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33442"]}
                  onChange={handleCheckedChange("33442")}
                  value={state.items["33442"]}
              />
              }
              label="non-LM bifurction"
          />
        </GridItem>   
      </GridContainer>

      <GridContainer>
      <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33443"]}
                  onChange={handleCheckedChange("33443")}
                  value={state.items["33443"]}
              />
              }
              label="CTO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33444"]}
                  onChange={handleCheckedChange("33444")}
                  value={state.items["33444"]}
              />
              }
              label="DES-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33445"]}
                  onChange={handleCheckedChange("33445")}
                  value={state.items["33445"]}
              />
              }
              label="BMS-ISR"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33446"]}
                  onChange={handleCheckedChange("33446")}
                  value={state.items["33446"]}
              />
              }
              label="Aorto-ostial"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
              control={
              <Checkbox
                  checked={state.items["33447"]}
                  onChange={handleCheckedChange("33447")}
                  value={state.items["33447"]}
              />
              }
              label="Branch-ostial"
          />
        </GridItem> 
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomSelectBox
              selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("33448")
              }}
              value={state.items["33448"]}
              id="ACC/AHA type2"
              labelText="ACC/AHA type2"
              items={[
                  { title: "A" },
                  { title: "B1" },
                  { title: "B2" },
                  { title: "C" },
              ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_1</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33449"]}
                  onChange={handleCheckedChange("33449")}
                  value={state.items["33449"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33450"]}
                  onChange={handleCheckedChange("33450")}
                  value={state.items["33450"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33451"]}
                  onChange={handleCheckedChange("33451")}
                  value={state.items["33451"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33452"]}
                  onChange={handleCheckedChange("33452")}
                  value={state.items["33452"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33453"]}
                  onChange={handleCheckedChange("33453")}
                  value={state.items["33453"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33454"]}
                  onChange={handleCheckedChange("33454")}
                  value={state.items["33454"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33455"]}
                  onChange={handleCheckedChange("33455")}
                  value={state.items["33455"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33456"]}
                  onChange={handleCheckedChange("33456")}
                  value={state.items["33456"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33457"]}
                  onChange={handleCheckedChange("33457")}
                  value={state.items["33457"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33458"]}
                  onChange={handleCheckedChange("33458")}
                  value={state.items["33458"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33459"]}
                  onChange={handleCheckedChange("33459")}
                  value={state.items["33459"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33460"]}
                  onChange={handleCheckedChange("33460")}
                  value={state.items["33460"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33461"]}
                  onChange={handleCheckedChange("33461")}
                  value={state.items["33461"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33462"]}
                  onChange={handleCheckedChange("33462")}
                  value={state.items["33462"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33463"]}
                  onChange={handleCheckedChange("33463")}
                  value={state.items["33463"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33464"]}
                  onChange={handleCheckedChange("33464")}
                  value={state.items["33464"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33465"]}
                  onChange={handleCheckedChange("33465")}
                  value={state.items["33465"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33466"]}
                  onChange={handleCheckedChange("33466")}
                  value={state.items["33466"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33467"]}
                  onChange={handleCheckedChange("33467")}
                  value={state.items["33467"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33468"]}
                  onChange={handleCheckedChange("33468")}
                  value={state.items["33468"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33469"]}
                  onChange={handleCheckedChange("33469")}
                  value={state.items["33469"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33470"]}
                  onChange={handleCheckedChange("33470")}
                  value={state.items["33470"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33471"]}
                  onChange={handleCheckedChange("33471")}
                  value={state.items["33471"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33472"]}
                  onChange={handleCheckedChange("33472")}
                  value={state.items["33472"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33473"),
                  value: state.items["33473"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33474"),
                  value: state.items["33474"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_2</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33475"]}
                  onChange={handleCheckedChange("33475")}
                  value={state.items["33475"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33476"]}
                  onChange={handleCheckedChange("33476")}
                  value={state.items["33476"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33477"]}
                  onChange={handleCheckedChange("33477")}
                  value={state.items["33477"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33478"]}
                  onChange={handleCheckedChange("33478")}
                  value={state.items["33478"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33479"]}
                  onChange={handleCheckedChange("33479")}
                  value={state.items["33479"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33480"]}
                  onChange={handleCheckedChange("33480")}
                  value={state.items["33480"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33481"]}
                  onChange={handleCheckedChange("33481")}
                  value={state.items["33481"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33482"]}
                  onChange={handleCheckedChange("33482")}
                  value={state.items["33482"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33483"]}
                  onChange={handleCheckedChange("33483")}
                  value={state.items["33483"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33484"]}
                  onChange={handleCheckedChange("33484")}
                  value={state.items["33484"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33485"]}
                  onChange={handleCheckedChange("33485")}
                  value={state.items["33485"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33486"]}
                  onChange={handleCheckedChange("33486")}
                  value={state.items["33486"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33487"]}
                  onChange={handleCheckedChange("33487")}
                  value={state.items["33487"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33488"]}
                  onChange={handleCheckedChange("33488")}
                  value={state.items["33488"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33489"]}
                  onChange={handleCheckedChange("33489")}
                  value={state.items["33489"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33490"]}
                  onChange={handleCheckedChange("33490")}
                  value={state.items["33490"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33491"]}
                  onChange={handleCheckedChange("33491")}
                  value={state.items["33491"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33492"]}
                  onChange={handleCheckedChange("33492")}
                  value={state.items["33492"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33493"]}
                  onChange={handleCheckedChange("33493")}
                  value={state.items["33493"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33494"]}
                  onChange={handleCheckedChange("33494")}
                  value={state.items["33494"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33495"]}
                  onChange={handleCheckedChange("33495")}
                  value={state.items["33495"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33496"]}
                  onChange={handleCheckedChange("33496")}
                  value={state.items["33496"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33497"]}
                  onChange={handleCheckedChange("33497")}
                  value={state.items["33497"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33498"]}
                  onChange={handleCheckedChange("33498")}
                  value={state.items["33498"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33499"),
                    value: state.items["33499"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33500"),
                    value: state.items["33500"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>DES or DEB name_3</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33501"]}
                  onChange={handleCheckedChange("33501")}
                  value={state.items["33501"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33502"]}
                  onChange={handleCheckedChange("33502")}
                  value={state.items["33502"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33503"]}
                  onChange={handleCheckedChange("33503")}
                  value={state.items["33503"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33504"]}
                  onChange={handleCheckedChange("33504")}
                  value={state.items["33504"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33505"]}
                  onChange={handleCheckedChange("33505")}
                  value={state.items["33505"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33506"]}
                  onChange={handleCheckedChange("33506")}
                  value={state.items["33506"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33507"]}
                  onChange={handleCheckedChange("33507")}
                  value={state.items["33507"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33508"]}
                  onChange={handleCheckedChange("33508")}
                  value={state.items["33508"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33509"]}
                  onChange={handleCheckedChange("33509")}
                  value={state.items["33509"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33510"]}
                  onChange={handleCheckedChange("33510")}
                  value={state.items["33510"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33511"]}
                  onChange={handleCheckedChange("33511")}
                  value={state.items["33511"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33512"]}
                  onChange={handleCheckedChange("33512")}
                  value={state.items["33512"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33513"]}
                  onChange={handleCheckedChange("33513")}
                  value={state.items["33513"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33514"]}
                  onChange={handleCheckedChange("33514")}
                  value={state.items["33514"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33515"]}
                  onChange={handleCheckedChange("33515")}
                  value={state.items["33515"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33516"]}
                  onChange={handleCheckedChange("33516")}
                  value={state.items["33516"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33517"]}
                  onChange={handleCheckedChange("33517")}
                  value={state.items["33517"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33518"]}
                  onChange={handleCheckedChange("33518")}
                  value={state.items["33518"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33519"]}
                  onChange={handleCheckedChange("33519")}
                  value={state.items["33519"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33520"]}
                  onChange={handleCheckedChange("33520")}
                  value={state.items["33520"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33521"]}
                  onChange={handleCheckedChange("33521")}
                  value={state.items["33521"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33522"]}
                  onChange={handleCheckedChange("33522")}
                  value={state.items["33522"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33523"]}
                  onChange={handleCheckedChange("33523")}
                  value={state.items["33523"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33524"]}
                  onChange={handleCheckedChange("33524")}
                  value={state.items["33524"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(diameter, mm)"
                id="DES or DEB size(diameter, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33525"),
                    value: state.items["33525"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
            <CustomInput
                labelText="DES or DEB size(length, mm)"
                id="DES or DEB size(length, mm)"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("33526"),
                    value: state.items["33526"]
                }}
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <p>DES or DEB name_4</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33527"]}
                  onChange={handleCheckedChange("33527")}
                  value={state.items["33527"]}
              />
            }
            label="Cypher"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33528"]}
                  onChange={handleCheckedChange("33528")}
                  value={state.items["33528"]}
              />
            }
            label="Taxus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33529"]}
                  onChange={handleCheckedChange("33529")}
                  value={state.items["33529"]}
              />
            }
            label="Xience-V"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33530"]}
                  onChange={handleCheckedChange("33530")}
                  value={state.items["33530"]}
              />
            }
            label="Promus"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33531"]}
                  onChange={handleCheckedChange("33531")}
                  value={state.items["33531"]}
              />
            }
            label="Endeavor-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33532"]}
                  onChange={handleCheckedChange("33532")}
                  value={state.items["33532"]}
              />
            }
            label="Endeavor-R"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33533"]}
                  onChange={handleCheckedChange("33533")}
                  value={state.items["33533"]}
              />
            }
            label="Endeavor-I"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33534"]}
                  onChange={handleCheckedChange("33534")}
                  value={state.items["33534"]}
              />
            }
            label="R-Onyx"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33535"]}
                  onChange={handleCheckedChange("33535")}
                  value={state.items["33535"]}
              />
            }
            label="Coro-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33536"]}
                  onChange={handleCheckedChange("33536")}
                  value={state.items["33536"]}
              />
            }
            label="PICO"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33537"]}
                  onChange={handleCheckedChange("33537")}
                  value={state.items["33537"]}
              />
            }
            label="Xience-A"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33538"]}
                  onChange={handleCheckedChange("33538")}
                  value={state.items["33538"]}
              />
            }
            label="Xience-P"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33539"]}
                  onChange={handleCheckedChange("33539")}
                  value={state.items["33539"]}
              />
            }
            label="Xience-X"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33540"]}
                  onChange={handleCheckedChange("33540")}
                  value={state.items["33540"]}
              />
            }
            label="Xience-S"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33541"]}
                  onChange={handleCheckedChange("33541")}
                  value={state.items["33541"]}
              />
            }
            label="Promus-E"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33542"]}
                  onChange={handleCheckedChange("33542")}
                  value={state.items["33542"]}
              />
            }
            label="Promus-P"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33543"]}
                  onChange={handleCheckedChange("33543")}
                  value={state.items["33543"]}
              />
            }
            label="SYNERGY"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33544"]}
                  onChange={handleCheckedChange("33544")}
                  value={state.items["33544"]}
              />
            }
            label="Novori"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33545"]}
                  onChange={handleCheckedChange("33545")}
                  value={state.items["33545"]}
              />
            }
            label="Biomatrix"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33546"]}
                  onChange={handleCheckedChange("33546")}
                  value={state.items["33546"]}
              />
            }
            label="Biofreedom"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33547"]}
                  onChange={handleCheckedChange("33547")}
                  value={state.items["33547"]}
              />
            }
            label="Orsiro"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33548"]}
                  onChange={handleCheckedChange("33548")}
                  value={state.items["33548"]}
              />
            }
            label="DESyne"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33549"]}
                  onChange={handleCheckedChange("33549")}
                  value={state.items["33549"]}
              />
            }
            label="Biomime"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33550"]}
                  onChange={handleCheckedChange("33550")}
                  value={state.items["33550"]}
              />
            }
            label="Sequent DEB"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(diameter, mm)"
              id="DES or DEB size(diameter, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33551"),
                  value: state.items["33551"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="DES or DEB size(length, mm)"
              id="DES or DEB size(length, mm)"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33552"),
                  value: state.items["33552"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <p>Stenting technique4)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33553"]}
                  onChange={handleCheckedChange("33553")}
                  value={state.items["33553"]}
              />
            }
            label="none"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33554"]}
                  onChange={handleCheckedChange("33554")}
                  value={state.items["33554"]}
              />
            }
            label="Overlapping"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33555"]}
                  onChange={handleCheckedChange("33555")}
                  value={state.items["33555"]}
              />
            }
            label="Kissing stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33556"]}
                  onChange={handleCheckedChange("33556")}
                  value={state.items["33556"]}
              />
            }
            label="stenting"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33557"]}
                  onChange={handleCheckedChange("33557")}
                  value={state.items["33557"]}
              />
            }
            label="Culotte stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33558"]}
                  onChange={handleCheckedChange("33558")}
                  value={state.items["33558"]}
              />
            }
            label="Crushing"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33559"]}
                  onChange={handleCheckedChange("33559")}
                  value={state.items["33559"]}
              />
            }
            label="Direct stenting"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <p style={P_margin.child2Container}>Balloon technique5)</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33560"]}
                  onChange={handleCheckedChange("33560")}
                  value={state.items["33560"]}
              />
            }
            label="no additional balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33561"]}
                  onChange={handleCheckedChange("33561")}
                  value={state.items["33561"]}
              />
            }
            label="stent balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33562"]}
                  onChange={handleCheckedChange("33562")}
                  value={state.items["33562"]}
              />
            }
            label="NC balloon adjunctive"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33563"]}
                  onChange={handleCheckedChange("33563")}
                  value={state.items["33563"]}
              />
            }
            label="Kissing balloon"
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33564"]}
                  onChange={handleCheckedChange("33564")}
                  value={state.items["33564"]}
              />
            }
            label="sequential balloon"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                  checked={state.items["33565"]}
                  onChange={handleCheckedChange("33565")}
                  value={state.items["33565"]}
              />
            }
            label="POT"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA pre mean ref"
              id="QCA pre mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33566"),
                  value: state.items["33566"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA pre MLD"
              id="QCA pre MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33567"),
                  value: state.items["33567"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre % DS"
              id="pre % DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33568"),
                  value: state.items["33568"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="Lesion length"
              id="Lesion length"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33569"),
                  value: state.items["33569"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="QCA post mean ref"
              id="QCA post mean ref"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33570"),
                  value: state.items["33570"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="QCA in-stent MLD"
              id="QCA in-stent MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33571"),
                  value: state.items["33571"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post % stent DS"
              id="post % stent DS"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33572"),
                  value: state.items["33572"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="prox seg MLD"
              id="prox seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33573"),
                  value: state.items["33573"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="distal seg MLD"
              id="distal seg MLD"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33574"),
                  value: state.items["33574"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI flow"
              id="pre TIMI fow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33575"),
                  value: state.items["33575"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TIMI flow"
              id="post TIMI flow"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33576"),
                  value: state.items["33576"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TIMI frame c"
              id="pre TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33577"),
                  value: state.items["33577"]
              }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child2Container}>
          <CustomInput
              labelText="post TIMI frame C"
              id="post TIMI frame C"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33578"),
                  value: state.items["33578"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="pre TPG"
              id="pre TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33579"),
                  value: state.items["33579"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
              labelText="post TPG"
              id="post TPG"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  onChange: handleValueChange("33580"),
                  value: state.items["33580"]
              }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}></GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>
      </GridContainer>

      <GridContainer>
        <br></br>
        <br></br>
      </GridContainer>
    </CardBody>
  );
}