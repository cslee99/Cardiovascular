import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function FollowUp1Years(props) {
  const { state, handleValueChange, handleCheckedChange } = props;

  return (
    <CardBody>
      <h2>FollowUp1Years</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("231")
            }}
            value={state.items["231"]}
            id="Death"
            labelText="Death"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE death is yes */}
        {state.items["231"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("232"),
                  value: state.items["232"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("233")
                }}
                value={state.items["233"]}
                id="reason"
                labelText="reason"
                items={[
                  { title: "cardiac death" },
                  { title: "vascular death" },
                  { title: "non-cardiac death" }
                ]}
              />
            </GridItem>
          </>
        )}
        {state.items["231"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("222"),
                  //value: state.items["222"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("233")
                }}
                value={state.items["233"]}
                id="reason"
                labelText="reason"
                //items={[
                  //{ title: "cardiac death" },
                  //{ title: "vascular death" },
                  //{ title: "non-cardiac death" }
                //]}
              />
            </GridItem>
          </>
        )}
        {state.items["231"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("232"),
                  //value: state.items["232"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("233")
                }}
                value={state.items["233"]}
                id="reason"
                labelText="reason"
                //items={[
                  //{ title: "cardiac death" },
                  //{ title: "vascular death" },
                  //{ title: "non-cardiac death" }
                //]}
              />
            </GridItem>
          </>
        )}

        <GridItem xs={12} sm={12} md={1}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("234")
            }}
            value={state.items["234"]}
            id="MI"
            labelText="MI"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE MI is yes */}
        {state.items["234"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("235"),
                  value: state.items["235"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("236")
                }}
                value={state.items["236"]}
                id="Target vessel"
                labelText="Target vessel"
                items={[
                  { title: "Yes" },
                  { title: "No" },
                ]}
              />
            </GridItem>
          </>
        )}
        {state.items["234"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("235"),
                  //value: state.items["235"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("236")
                }}
                value={state.items["236"]}
                id="Target vessel"
                labelText="Target vessel"
                //items={[
                  //{ title: "Yes" },
                  //{ title: "No" },
                //]}
              />
            </GridItem>
          </>
        )}
        {state.items["234"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("235"),
                  //value: state.items["235"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("236")
                }}
                value={state.items["236"]}
                id="Target vessel"
                labelText="Target vessel"
                //items={[
                  //{ title: "Yes" },
                  //{ title: "No" },
                //]}
              />
            </GridItem>
          </>
        )}
      </GridContainer>

      {/* //////////////////////////////////////////////////////////////// */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("237")
            }}
            value={state.items["237"]}
            id="Ischemic stroke"
            labelText="Ischemic stroke"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>
        {state.items["237"] === "Yes" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleValueChange("238"),
                value: state.items["238"]
              }}
            />
          </GridItem>
        )}
        {state.items["237"] === "No" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("238"),
                //value: state.items["238"]
              }}
            />
          </GridItem>
        )}
        {state.items["237"] === "Empty" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("238"),
                //value: state.items["238"]
              }}
            />
          </GridItem>
        )}

        <GridItem xs={12} sm={12} md={3}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("239")
            }}
            value={state.items["239"]}
            id="TLR"
            labelText="TLR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TLR is yes */}
        {state.items["239"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2310"),
                  value: state.items["2310"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2311")
                }}
                value={state.items["2311"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["239"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2310"),
                  //value: state.items["2310"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2311")
                }}
                value={state.items["2311"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["239"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2310"),
                  //value: state.items["2310"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2311")
                }}
                value={state.items["2311"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
      </GridContainer>

      {/* //////////////////////////////////////////////////////////////// */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2312")
            }}
            value={state.items["2312"]}
            id="TVR"
            labelText="TVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TVR is yes */}
        {state.items["2312"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2313"),
                  value: state.items["2313"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2314")
                }}
                value={state.items["2314"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2312"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2313"),
                  //value: state.items["2313"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2314")
                }}
                value={state.items["2314"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2312"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2313"),
                  //value: state.items["2313"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2314")
                }}
                value={state.items["2314"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}

        <GridItem xs={12} sm={12} md={1}></GridItem>
        {/* //////////////////////////////////////////////////////// */}

        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2315")
            }}
            value={state.items["2315"]}
            id="OVR"
            labelText="OVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE OVR is yes */}
        {state.items["2315"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2316"),
                  value: state.items["2316"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2317")
                }}
                value={state.items["2317"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2315"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2316"),
                  //value: state.items["2316"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2317")
                }}
                value={state.items["2317"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2315"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2316"),
                  //value: state.items["2316"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2317")
                }}
                value={state.items["2317"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
      </GridContainer>

      {/* /////////////////////////////////////////////////////////// */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2318")
            }}
            value={state.items["2318"]}
            id="Stent_thrombosis"
            labelText="Stent_thrombosis"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2318"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2319"),
                  value: state.items["2319"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2320")
                }}
                value={state.items["2320"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2318"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2319"),
                  //value: state.items["2319"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2320")
                }}
                value={state.items["2320"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2318"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2319"),
                  //value: state.items["2319"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2320")
                }}
                value={state.items["2320"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}


        <GridItem xs={12} sm={12} md={1}></GridItem>


        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2321")
            }}
            value={state.items["2321"]}
            id="readmission_HF"
            labelText="readmission_HF"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2321"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2322"),
                  value: state.items["2322"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2321"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2322"),
                  //value: state.items["2322"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2321"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2322"),
                  //value: state.items["2322"]
                }}
              />
            </GridItem>
          </>
        )}
      </GridContainer>

      {/* /////////////////////////////////////////////////////// */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2323")
            }}
            value={state.items["2323"]}
            id="readmission_PAD"
            labelText="readmission_PAD"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2323"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2324"),
                  value: state.items["2324"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2323"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2324"),
                  //value: state.items["2324"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2323"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2324"),
                  //value: state.items["2324"]
                }}
              />
            </GridItem>
          </>
        )}


        <GridItem xs={12} sm={12} md={3}></GridItem>


        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2325")
            }}
            value={state.items["2325"]}
            id="readmission_PTE"
            labelText="readmission_PTE"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2325"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2326"),
                  value: state.items["2326"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2325"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2326"),
                  //value: state.items["2326"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2325"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2326"),
                  //value: state.items["2326"]
                }}
              />
            </GridItem>
          </>
        )}
      </GridContainer>

      

      {/* /////////////////////////////////////////////////////// */}

      
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("2327")
            }}
            value={state.items["2327"]}
            id="Bleeding"
            labelText="Bleeding"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Bleeding is yes */}
        {state.items["2327"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2328"),
                  value: state.items["2328"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2329")
                }}
                value={state.items["2329"]}
                id="Bledding_Type"
                labelText="Bledding_Type"
                items={[
                  { title: "type 1" },
                  { title: "type 2" },
                  { title: "type 3a" },
                  { title: "type 3b" },
                  { title: "type 3c" },
                  { title: "type 5" }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2330")
                }}
                value={state.items["2330"]}
                id="Bledding_Site"
                labelText="Bledding_Site"
                items={[
                  { title: "CNS" },
                  { title: "GI" },
                  { title: "GU" },
                  { title: "Retroperitoneal" },
                  { title: "type Pulmonary" },
                  { title: "other" }
                ]}
              />
            </GridItem>
            {state.items["2330"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2331"),
                    value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2231"),
                    //value: state.items["2231"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2332")
                }}
                value={state.items["2332"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2332"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2333"),
                    value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2332"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2332"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
        {state.items["2327"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2328"),
                  //value: state.items["2328"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2329")
                }}
                value={state.items["2329"]}
                id="Bledding_Type"
                labelText="Bledding_Type"
                //items={[
                  //{ title: "type 1" },
                  //{ title: "type 2" },
                  //{ title: "type 3a" },
                  //{ title: "type 3b" },
                  //{ title: "type 3c" },
                  //{ title: "type 5" }
                //]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2330")
                }}
                value={state.items["2330"]}
                id="Bledding_Site"
                labelText="Bledding_Site"
                //items={[
                  //{ title: "CNS" },
                  //{ title: "GI" },
                  //{ title: "GU" },
                  //{ title: "Retroperitoneal" },
                  //{ title: "type Pulmonary" },
                  //{ title: "other" }
                //]}
              />
            </GridItem>
            {state.items["2330"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2332")
                }}
                value={state.items["2332"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2332"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                   // onChange: handleValueChange("2333"),
                   // value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2332"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2332"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
        {state.items["2327"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2328"),
                  //value: state.items["2328"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2329")
                }}
                value={state.items["2329"]}
                id="Bledding_Type"
                labelText="Bledding_Type"
                //items={[
                  //{ title: "type 1" },
                  //{ title: "type 2" },
                  //{ title: "type 3a" },
                  //{ title: "type 3b" },
                  //{ title: "type 3c" },
                  //{ title: "type 5" }
                //]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2330")
                }}
                value={state.items["2330"]}
                id="Bledding_Site"
                labelText="Bledding_Site"
                //items={[
                  //{ title: "CNS" },
                  //{ title: "GI" },
                  //{ title: "GU" },
                  //{ title: "Retroperitoneal" },
                  //{ title: "type Pulmonary" },
                  //{ title: "other" }
                //]}
              />
            </GridItem>
            {state.items["2330"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2330"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2331"),
                    //value: state.items["2331"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2332")
                }}
                value={state.items["2332"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2332"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2332"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2332"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2333"),
                    //value: state.items["2333"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
      </GridContainer>

      {/* ///////////////////////////////////////////////////// */}

      <GridContainer>
        <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2334")
                }}
                value={state.items["2334"]}
                id="Cancer"
                labelText="Cancer"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2334"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2335"),
                    value: state.items["2335"]
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_location"
                  id="Cancer_location"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2336"),
                    value: state.items["2336"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2334"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2335"),
                    //value: state.items["2335"]
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_location"
                  id="Cancer_location"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2336"),
                    //value: state.items["2336"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2334"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2335"),
                    //value: state.items["2335"]
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_location"
                  id="Cancer_location"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2336"),
                    //value: state.items["2336"]
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
                  onChange: handleValueChange("2337")
                }}
                value={state.items["2337"]}
                id="f/u_CAG"
                labelText="f/u_CAG"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2337"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2338"),
                    value: state.items["2338"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2337"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2338"),
                    //value: state.items["2338"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2337"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2338"),
                    //value: state.items["2338"]
                  }}
                />
              </GridItem>
              </>
            )}
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2339")
                }}
                value={state.items["2339"]}
                id="f/u_loss"
                labelText="f/u_loss"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2339"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2340"),
                    value: state.items["2340"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2339"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2340"),
                    //value: state.items["2340"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2339"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2340"),
                    //value: state.items["2340"]
                  }}
                />
              </GridItem>
              </>
            )}
          </GridContainer>


          {/* /////////////////////////////////////////////////// */}

          <GridContainer>
            <br></br>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox 
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2341"),
                }}
                value={state.items["2341"]}
                id="stain_S/E"
                labelText="stain_S/E"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            {state.items["2341"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="myalgia"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="fatigue"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="dizziness"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="headache"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="GI_problem"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="itching"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked=""
                    onChange=""
                    value=""
                    />
                  }
                  label="drug_stop_or_change_d/t_S/E"
                />
              </GridItem>
              </>
            )}

            {state.items["2341"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2342"]}
                      onChange={handleCheckedChange("2342")}
                      value={state.items["2342"]}
                    />
                  }
                  label="myalgia"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2343"]}
                      onChange={handleCheckedChange("2343")}
                      value={state.items["2343"]}
                    />
                  }
                  label="fatigue"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2344"]}
                      onChange={handleCheckedChange("2344")}
                      value={state.items["2344"]}
                    />
                  }
                  label="dizziness"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2345"]}
                      onChange={handleCheckedChange("2345")}
                      value={state.items["2345"]}
                    />
                  }
                  label="headache"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2346"]}
                      onChange={handleCheckedChange("2346")}
                      value={state.items["2346"]}
                    />
                  }
                  label="GI_problem"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2347"]}
                      onChange={handleCheckedChange("2347")}
                      value={state.items["2347"]}
                    />
                  }
                  label="itching"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2348"]}
                      onChange={handleCheckedChange("2348")}
                      value={state.items["2348"]}
                    />
                  }
                  label="drug_stop_or_change_d/t_S/E"
                />
              </GridItem>
              </>
            )}

            {state.items["2341"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="myalgia"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="fatigue"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="dizziness"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="headache"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="GI_problem"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="itching"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked=""
                      onChange=""
                      value=""
                    />
                  }
                  label="drug_stop_or_change_d/t_S/E"
                />
              </GridItem>
              </>
            )}
      </GridContainer>
    </CardBody>
  );
}
