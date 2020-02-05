import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid } from "@material-ui/core";
//test
export default function EtcPCIdata(props) {
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
      <h2>Etc PCI data</h2>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <h4 style={P_margin.child1Container}>Procedural complication</h4>
        </GridItem>
      </GridContainer>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("341")
            }}
            value={state.items["341"]}
            id="PCYN"
            labelText="PCYN"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
          <p>PC item</p>
        </GridItem>
      </GridContainer>

      <GridContainer>
        {state.items["341"] === "Empty" && (
          <>
          <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("342")}
                    //value={state.items["342"]}
                />
                }
                label="slow/no reflow (TIMI 0, 1)"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("334")}
                    //value={state.items["334"]}
                />
                }
                label="distal embolization"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("334")}
                    //value={state.items["334"]}
                />
                }
                label="SBO"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("334")}
                    //value={state.items["334"]}
                />
                }
                label="perforation or rupture"
            />
          </GridItem>
          </>
        )}

        {state.items["341"] === "Yes" && (
          <>
          <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["342"]}
                    onChange={handleCheckedChange("342")}
                    value={state.items["342"]}
                />
                }
                label="slow/no reflow (TIMI 0, 1)"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["343"]}
                    onChange={handleCheckedChange("343")}
                    value={state.items["343"]}
                />
                }
                label="distal embolization"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["344"]}
                    onChange={handleCheckedChange("344")}
                    value={state.items["344"]}
                />
                }
                label="SBO"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["345"]}
                    onChange={handleCheckedChange("345")}
                    value={state.items["345"]}
                />
                }
                label="perforation or rupture"
            />
          </GridItem>
          </>
        )}

        {state.items["341"] === "No" && (
          <>
          <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("342")}
                    //value={state.items["342"]}
                />
                }
                label="slow/no reflow(TIMI 0, 1)"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("343")}
                    //value={state.items["343"]}
                />
                }
                label="distal embolization"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("344")}
                    //value={state.items["344"]}
                />
                }
                label="SBO"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("345")}
                    //value={state.items["345"]}
                />
                }
                label="perforation or rupture"
            />
          </GridItem>
          </>
        )}
      </GridContainer>

      <GridContainer>
        {state.items["341"] === "Empty" && (
          <>
          <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("346")}
                    //value={state.items["346"]}
                />
                }
                label="Abrupt vessel closure"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("347")}
                    //value={state.items["347"]}
                />
                }
                label="major dissection"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("348")}
                    //value={state.items["348"]}
                />
                }
                label="emergency CABG"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}></GridItem>
          </>
        )}

        {state.items["341"] === "Yes" && (
          <>
          <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["346"]}
                    onChange={handleCheckedChange("346")}
                    value={state.items["346"]}
                />
                }
                label="Abrupt vessel closure"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["347"]}
                    onChange={handleCheckedChange("347")}
                    value={state.items["347"]}
                />
                }
                label="major dissection"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["348"]}
                    onChange={handleCheckedChange("348")}
                    value={state.items["348"]}
                />
                }
                label="emergency CABG"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}></GridItem>
          </>
        )}

        {state.items["341"] === "No" && (
          <>
          <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("342")}
                    //value={state.items["342"]}
                />
                }
                label="Abrupt vessel closure"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("334")}
                    //value={state.items["334"]}
                />
                }
                label="major dissection"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked=""
                    //onChange={handleCheckedChange("334")}
                    //value={state.items["334"]}
                />
                }
                label="emergency CABG"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}></GridItem>
          </>
        )}
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <h4 style={P_margin.child1Container}>Access site</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("349")
            }}
            value={state.items["349"]}
            id="Access site"
            labelText="Access site"
            items={[
              { title: "femoral" },
              { title: "radial" },
              { title: "both" },
            ]}
          />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <h4 style={P_margin.child1Container}>Closure device</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("3410")
            }}
            value={state.items["3410"]}
            id="Closure device type"
            labelText="Closure device type"
            items={[
              { title: "Perclose" },
              { title: "Angio-seal" },
              { title: "Femoseal" },
              { title: "Mynx" },
              { title: "Scion pad" },
              { title: "Quickclot" },
              { title: "TR band" },
              { title: "EZ clot" },
              { title: "manual" },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("3411")
            }}
            value={state.items["3411"]}
            id="Device success"
            labelText="Device success"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {state.items["3411"] === "Yes" && (
          <>
          <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("3412")
            }}
            value={state.items["3412"]}
            id="if, No"
            labelText="if, No"
            items={[
              { title: "retry" },
              { title: "switch to other device" },
              { title: "manual" },
            ]}
          />
          </GridItem>
          </>
        )}  

        {state.items["3411"] === "No" && (
          <>
          <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              //onChange: handleValueChange("3412")
            }}
            //value={state.items["3412"]}
            id="if, No"
            labelText="if, No"
            //items={[
              //{ title: "retry" },
              //{ title: "switch to other device" },
              //{ title: "manual" },
            //]}
          />
          </GridItem>
          </>
        )}  

        {state.items["3411"] === "Empty" && (
          <>
          <GridItem xs={12} sm={12} md={3}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              //onChange: handleValueChange("3412")
            }}
            //value={state.items["3412"]}
            id="if, No"
            labelText="if, No"
            //items={[
              //{ title: "retry" },
              //{ title: "switch to other device" },
              //{ title: "manual" },
            //]}
          />
          </GridItem>
          </>
        )}  
      </GridContainer>
    </CardBody>
  );
}