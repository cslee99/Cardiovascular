import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function FollowUp30Days(props) {
  const { state, handleValueChange, handleCheckedChange } = props;
  return (
    <CardBody>
      <h2>Follow up_30day</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("221")
            }}
            value={state.items["221"]}
            id="Death"
            labelText="Death"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE death is yes */}
        {state.items["221"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("222"),
                  value: state.items["222"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("223")
                }}
                value={state.items["223"]}
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
        {state.items["221"] === "No" && (
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
                  onChange: handleValueChange("223")
                }}
                value={state.items["223"]}
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
        {state.items["221"] === "Empty" && (
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
                  onChange: handleValueChange("223")
                }}
                value={state.items["223"]}
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
              onChange: handleValueChange("224")
            }}
            value={state.items["224"]}
            id="MI"
            labelText="MI"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE MI is yes */}
        {state.items["224"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("225"),
                  value: state.items["225"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("226")
                }}
                value={state.items["226"]}
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
        {state.items["224"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("225"),
                  //value: state.items["225"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("226")
                }}
                value={state.items["226"]}
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
        {state.items["224"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("225"),
                  //value: state.items["225"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("226")
                }}
                value={state.items["226"]}
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
              onChange: handleValueChange("227")
            }}
            value={state.items["227"]}
            id="Ischemic stroke"
            labelText="Ischemic stroke"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>
        {state.items["227"] === "Yes" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleValueChange("228"),
                value: state.items["228"]
              }}
            />
          </GridItem>
        )}
        {state.items["227"] === "No" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("228"),
                //value: state.items["228"]
              }}
            />
          </GridItem>
        )}
        {state.items["227"] === "Empty" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("228"),
                //value: state.items["228"]
              }}
            />
          </GridItem>
        )}

        <GridItem xs={12} sm={12} md={3}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("229")
            }}
            value={state.items["229"]}
            id="TLR"
            labelText="TLR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TLR is yes */}
        {state.items["229"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2210"),
                  value: state.items["2210"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2211")
                }}
                value={state.items["2211"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["229"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2210"),
                  //value: state.items["2210"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2211")
                }}
                value={state.items["2211"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["229"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2210"),
                  //value: state.items["2210"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2211")
                }}
                value={state.items["2211"]}
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
              onChange: handleValueChange("2212")
            }}
            value={state.items["2212"]}
            id="TVR"
            labelText="TVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TVR is yes */}
        {state.items["2212"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2213"),
                  value: state.items["2213"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2214")
                }}
                value={state.items["2214"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2212"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2213"),
                  //value: state.items["2213"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2214")
                }}
                value={state.items["2214"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2212"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2213"),
                  //value: state.items["2213"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2214")
                }}
                value={state.items["2214"]}
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
              onChange: handleValueChange("2215")
            }}
            value={state.items["2215"]}
            id="OVR"
            labelText="OVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE OVR is yes */}
        {state.items["2215"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2216"),
                  value: state.items["2216"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2217")
                }}
                value={state.items["2217"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2215"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2216"),
                  //value: state.items["2216"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2217")
                }}
                value={state.items["2217"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2215"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2216"),
                  //value: state.items["2216"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2217")
                }}
                value={state.items["2217"]}
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
              onChange: handleValueChange("2218")
            }}
            value={state.items["2218"]}
            id="Stent_thrombosis"
            labelText="Stent_thrombosis"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2218"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2219"),
                  value: state.items["2219"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2220")
                }}
                value={state.items["2220"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2218"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2219"),
                  //value: state.items["2219"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2220")
                }}
                value={state.items["2220"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2218"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2219"),
                  //value: state.items["2219"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2220")
                }}
                value={state.items["2220"]}
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
              onChange: handleValueChange("2221")
            }}
            value={state.items["2221"]}
            id="readmission_HF"
            labelText="readmission_HF"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2221"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2222"),
                  value: state.items["2222"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2221"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2222"),
                  //value: state.items["2222"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2221"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2222"),
                  //value: state.items["2222"]
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
              onChange: handleValueChange("2223")
            }}
            value={state.items["2223"]}
            id="readmission_PAD"
            labelText="readmission_PAD"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2223"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2224"),
                  value: state.items["2224"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2223"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2224"),
                  //value: state.items["2224"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2223"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2224"),
                  //value: state.items["2224"]
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
              onChange: handleValueChange("2225")
            }}
            value={state.items["2225"]}
            id="readmission_PTE"
            labelText="readmission_PTE"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2225"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2226"),
                  value: state.items["2226"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2225"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2226"),
                  //value: state.items["2226"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2225"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2226"),
                  //value: state.items["2226"]
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
              onChange: handleValueChange("2227")
            }}
            value={state.items["2227"]}
            id="Bleeding"
            labelText="Bleeding"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Bleeding is yes */}
        {state.items["2227"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2228"),
                  value: state.items["2228"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2229")
                }}
                value={state.items["2229"]}
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
                  onChange: handleValueChange("2230")
                }}
                value={state.items["2230"]}
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
            {state.items["2230"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2231"),
                    value: state.items["2231"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2230"] === "CNS" && (
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
            {state.items["2230"] === "GI" && (
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
            {state.items["2230"] === "GU" && (
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
            {state.items["2230"] === "Retroperitoneal" && (
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
            {state.items["2230"] === "type Pulmonary" && (
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
            {state.items["2230"] === "Empty" && (
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
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2232")
                }}
                value={state.items["2232"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2232"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2233"),
                    value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2232"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2232"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
        {state.items["2227"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2228"),
                  //value: state.items["2228"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2229")
                }}
                value={state.items["2229"]}
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
                  onChange: handleValueChange("2230")
                }}
                value={state.items["2230"]}
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
            {state.items["2230"] === "other" && (
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
            {state.items["2230"] === "CNS" && (
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
            {state.items["2230"] === "GI" && (
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
            {state.items["2230"] === "GU" && (
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
            {state.items["2230"] === "Retroperitoneal" && (
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
            {state.items["2230"] === "type Pulmonary" && (
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
            {state.items["2230"] === "Empty" && (
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
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2232")
                }}
                value={state.items["2232"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2232"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                   // onChange: handleValueChange("2233"),
                   // value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2232"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2232"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
        {state.items["2227"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2228"),
                  //value: state.items["2228"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2229")
                }}
                value={state.items["2229"]}
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
                  onChange: handleValueChange("2230")
                }}
                value={state.items["2230"]}
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
            {state.items["2230"] === "other" && (
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
            {state.items["2230"] === "CNS" && (
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
            {state.items["2230"] === "GI" && (
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
            {state.items["2230"] === "GU" && (
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
            {state.items["2230"] === "Retroperitoneal" && (
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
            {state.items["2230"] === "type Pulmonary" && (
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
            {state.items["2230"] === "Empty" && (
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
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2232")
                }}
                value={state.items["2232"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2232"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2232"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2232"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2233"),
                    //value: state.items["2233"]
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
                  onChange: handleValueChange("2234")
                }}
                value={state.items["2234"]}
                id="Cancer"
                labelText="Cancer"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2234"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2235"),
                    value: state.items["2235"]
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
                    onChange: handleValueChange("2236"),
                    value: state.items["2236"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2234"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2235"),
                    //value: state.items["2235"]
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
                    //onChange: handleValueChange("2236"),
                    //value: state.items["2236"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2234"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2235"),
                    //value: state.items["2235"]
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
                    //onChange: handleValueChange("2236"),
                    //value: state.items["2236"]
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
                  onChange: handleValueChange("2237")
                }}
                value={state.items["2237"]}
                id="f/u_CAG"
                labelText="f/u_CAG"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2237"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2238"),
                    value: state.items["2238"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2237"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2238"),
                    //value: state.items["2238"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2237"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2238"),
                    //value: state.items["2238"]
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
                  onChange: handleValueChange("2239")
                }}
                value={state.items["2239"]}
                id="f/u_loss"
                labelText="f/u_loss"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2239"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2240"),
                    value: state.items["2240"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2239"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2240"),
                    //value: state.items["2240"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2239"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2240"),
                    //value: state.items["2240"]
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
                  onChange: handleValueChange("2241"),
                }}
                value={state.items["2241"]}
                id="stain_S/E"
                labelText="stain_S/E"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            {state.items["2241"] === "Empty" && (
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

            {state.items["2241"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2242"]}
                      onChange={handleCheckedChange("2242")}
                      value={state.items["2242"]}
                    />
                  }
                  label="myalgia"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2243"]}
                      onChange={handleCheckedChange("2243")}
                      value={state.items["2243"]}
                    />
                  }
                  label="fatigue"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2244"]}
                      onChange={handleCheckedChange("2244")}
                      value={state.items["2244"]}
                    />
                  }
                  label="dizziness"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2245"]}
                      onChange={handleCheckedChange("2245")}
                      value={state.items["2245"]}
                    />
                  }
                  label="headache"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2246"]}
                      onChange={handleCheckedChange("2246")}
                      value={state.items["2246"]}
                    />
                  }
                  label="GI_problem"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2247"]}
                      onChange={handleCheckedChange("2247")}
                      value={state.items["2247"]}
                    />
                  }
                  label="itching"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.items["2248"]}
                      onChange={handleCheckedChange("2248")}
                      value={state.items["2248"]}
                    />
                  }
                  label="drug_stop_or_change_d/t_S/E"
                />
              </GridItem>
              </>
            )}

            {state.items["2241"] === "No" && (
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
