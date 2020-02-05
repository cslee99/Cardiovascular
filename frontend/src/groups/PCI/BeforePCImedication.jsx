import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function BeforePCImedication(props) {
  const { state, handleValueChange, handleCheckedChange } = props;

  return (
    <CardBody>
      <h2>Before PCI medication</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
            <CustomSelectBox
                selectProps={{
                autoWidth: true,
                onChange: handleValueChange("311")
                }}
                value={state.items["311"]}
                id="P2Y12I loading"
                labelText="P2Y12I loading"
                items={[{ title: "Yes" }, { title: "No" }]}
            />
        </GridItem>

        {/* NOTE death is yes */}
        {state.items["311"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("312"),
                  value: state.items["312"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="dose"
                id="dose"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("313"),
                  value: state.items["313"]
                }}
              />
            </GridItem>
          </>
        )}

        {state.items["311"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("312"),
                  //value: state.items["312"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="dose"
                id="dose"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("313"),
                  //value: state.items["313"]
                }}
              />
            </GridItem>
          </>
        )}

        {state.items["311"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("312"),
                  //value: state.items["312"]
                  
                }}
              />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="dose"
                id="dose"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("313"),
                  //value: state.items["313"]
                }}
              />
            </GridItem>
          </>
        )}

        <GridItem xs={12} sm={12} md={1}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
            <CustomSelectBox
                selectProps={{
                autoWidth: true,
                onChange: handleValueChange("314")
                }}
                value={state.items["314"]}
                id="Stain loading"
                labelText="Stain loading"
                items={[{ title: "Yes" }, { title: "No" }]}
            />
        </GridItem>

        {/* NOTE death is yes */}
        {state.items["314"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={3}>
              <CustomInput
                labelText="name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("315"),
                  value: state.items["315"]
                }}
              />
              <CustomInput
                labelText="dose"
                id="dose"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("316"),
                  value: state.items["316"]
                }}
              />
            </GridItem>
          </>
        )}
        </GridContainer>

        <GridContainer>
          <br></br>
        </GridContainer>
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["317"]}
                    onChange={handleCheckedChange("317")}
                    value={state.items["317"]}
                />
                }
                label="UFH"
          />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["318"]}
                    onChange={handleCheckedChange("318")}
                    value={state.items["318"]}
                />
                }
                label="LMWH"
          />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <br></br>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={1}>
            <CustomSelectBox
                selectProps={{
                autoWidth: true,
                onChange: handleValueChange("319")
                }}
                value={state.items["319"]}
                id="GPI"
                labelText="GPI"
                items={[{ title: "Yes" }, { title: "No" }]}
            />
          </GridItem>

          {state.items["319"] === "Yes" && (
            <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomSelectBox
                  selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3110")
                  }}
                  value={state.items["3110"]}
                  id="GPI1"
                  labelText="GPI1"
                  items={[{ title: "abciximab" }, { title: "tirofiban" }]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomSelectBox
                  selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3111")
                  }}
                  value={state.items["3111"]}
                  id="GPI2"
                  labelText="GPI2"
                  items={[{ title: "routine" }, { title: "bailout" }]}
                />
              </GridItem>
            </>
          )}
          {state.items["319"] === "No" && (
            <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomSelectBox
                  selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3110")
                  }}
                  value={state.items["3110"]}
                  id="GPI1"
                  labelText="GPI1"
                  //items={[{ title: "abciximab" }, { title: "tirofiban" }]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomSelectBox
                  selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3111")
                  }}
                  value={state.items["3111"]}
                  id="GPI2"
                  labelText="GPI2"
                  //items={[{ title: "routine" }, { title: "bailout" }]}
                />
              </GridItem>
            </>
          )}
          {state.items["319"] === "Empty" && (
            <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomSelectBox
                  selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3110")
                  }}
                  value={state.items["3110"]}
                  id="GPI1"
                  labelText="GPI1"
                  //items={[{ title: "abciximab" }, { title: "tirofiban" }]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomSelectBox
                  selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3111")
                  }}
                  value={state.items["3111"]}
                  id="GPI2"
                  labelText="GPI2"
                  //items={[{ title: "routine" }, { title: "bailout" }]}
                />
              </GridItem>
            </>
          )}

        <GridItem xs={12} sm={12} md={1}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
            <CustomSelectBox
                selectProps={{
                autoWidth: true,
                onChange: handleValueChange("3112")
                }}
                value={state.items["3112"]}
                id="thrombolytics"
                labelText="thrombolytics"
                items={[{ title: "Yes" }, { title: "No" }]}
            />
        </GridItem>

        {state.items["3112"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Needle time"
                id="Needle time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("3113"),
                  value: state.items["3113"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["3112"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Needle time"
                id="Needle time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("3113"),
                  value: state.items["3113"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["3112"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Needle time"
                id="Needle time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("3113"),
                  //value: state.items["3113"]
                }}
              />
            </GridItem>
          </>
        )}

      </GridContainer>
    </CardBody>
  );
}