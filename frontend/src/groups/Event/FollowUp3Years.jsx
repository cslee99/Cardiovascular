import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

export default function FollowUp3Years(props) {
  const { state, handleValueChange } = props;

  return (
    <CardBody>
      <h2>FollowUp3Years</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("241")
            }}
            value={state.items["241"]}
            id="Death"
            labelText="Death"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE death is yes */}
        {state.items["241"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("242"),
                  value: state.items["242"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("243")
                }}
                value={state.items["243"]}
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
        {state.items["241"] === "No" && (
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
                  onChange: handleValueChange("243")
                }}
                value={state.items["243"]}
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
        {state.items["241"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("242"),
                  //value: state.items["242"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("243")
                }}
                value={state.items["243"]}
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
              onChange: handleValueChange("244")
            }}
            value={state.items["244"]}
            id="MI"
            labelText="MI"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE MI is yes */}
        {state.items["244"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("245"),
                  value: state.items["245"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("246")
                }}
                value={state.items["246"]}
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
        {state.items["244"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("245"),
                  //value: state.items["245"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("246")
                }}
                value={state.items["246"]}
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
        {state.items["244"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("245"),
                  //value: state.items["245"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("246")
                }}
                value={state.items["246"]}
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
              onChange: handleValueChange("247")
            }}
            value={state.items["247"]}
            id="Ischemic stroke"
            labelText="Ischemic stroke"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>
        {state.items["247"] === "Yes" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleValueChange("248"),
                value: state.items["248"]
              }}
            />
          </GridItem>
        )}
        {state.items["247"] === "No" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("248"),
                //value: state.items["248"]
              }}
            />
          </GridItem>
        )}
        {state.items["247"] === "Empty" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("248"),
                //value: state.items["248"]
              }}
            />
          </GridItem>
        )}

        <GridItem xs={12} sm={12} md={3}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("249")
            }}
            value={state.items["249"]}
            id="TLR"
            labelText="TLR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TLR is yes */}
        {state.items["249"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2410"),
                  value: state.items["2410"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2411")
                }}
                value={state.items["2411"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["249"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2410"),
                  //value: state.items["2410"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2411")
                }}
                value={state.items["2411"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["249"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2410"),
                  //value: state.items["2410"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2411")
                }}
                value={state.items["2411"]}
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
              onChange: handleValueChange("2412")
            }}
            value={state.items["2412"]}
            id="TVR"
            labelText="TVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TVR is yes */}
        {state.items["2412"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2413"),
                  value: state.items["2413"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2414")
                }}
                value={state.items["2414"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2412"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2413"),
                  //value: state.items["2413"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2414")
                }}
                value={state.items["2414"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2412"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2413"),
                  //value: state.items["2413"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2414")
                }}
                value={state.items["2414"]}
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
              onChange: handleValueChange("2415")
            }}
            value={state.items["2415"]}
            id="OVR"
            labelText="OVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE OVR is yes */}
        {state.items["2415"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2416"),
                  value: state.items["2416"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2417")
                }}
                value={state.items["2417"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2415"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2416"),
                  //value: state.items["2416"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2417")
                }}
                value={state.items["2417"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2415"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2416"),
                  //value: state.items["2416"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2417")
                }}
                value={state.items["2417"]}
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
              onChange: handleValueChange("2418")
            }}
            value={state.items["2418"]}
            id="Stent_thrombosis"
            labelText="Stent_thrombosis"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2418"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2419"),
                  value: state.items["2419"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2420")
                }}
                value={state.items["2420"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2418"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2419"),
                  //value: state.items["2419"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2420")
                }}
                value={state.items["2420"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2418"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2419"),
                  //value: state.items["2419"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2420")
                }}
                value={state.items["2420"]}
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
              onChange: handleValueChange("2421")
            }}
            value={state.items["2421"]}
            id="readmission_HF"
            labelText="readmission_HF"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2421"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2422"),
                  value: state.items["2422"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2421"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2422"),
                  //value: state.items["2422"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2421"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_HF_Date"
                id="readmission_HF_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2422"),
                  //value: state.items["2422"]
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
              onChange: handleValueChange("2423")
            }}
            value={state.items["2423"]}
            id="readmission_PAD"
            labelText="readmission_PAD"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2423"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2424"),
                  value: state.items["2424"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2423"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2424"),
                  //value: state.items["2424"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2423"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PAD_Date"
                id="readmission_PAD_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2424"),
                  //value: state.items["2424"]
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
              onChange: handleValueChange("2425")
            }}
            value={state.items["2425"]}
            id="readmission_PTE"
            labelText="readmission_PTE"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2425"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2426"),
                  value: state.items["2426"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2425"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2426"),
                  //value: state.items["2426"]
                }}
              />
            </GridItem>
          </>
        )}
        {state.items["2425"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="readmission_PTE_Date"
                id="readmission_PTE_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2426"),
                  //value: state.items["2426"]
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
              onChange: handleValueChange("2427")
            }}
            value={state.items["2427"]}
            id="Bleeding"
            labelText="Bleeding"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Bleeding is yes */}
        {state.items["2427"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2428"),
                  value: state.items["2428"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2429")
                }}
                value={state.items["2429"]}
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
                  onChange: handleValueChange("2430")
                }}
                value={state.items["2430"]}
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
            {state.items["2430"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2431"),
                    value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "Empty" && (
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
                  onChange: handleValueChange("2432")
                }}
                value={state.items["2432"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2432"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2433"),
                    value: state.items["2433"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2432"] === "No" && (
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
            {state.items["2432"] === "Empty" && (
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
        {state.items["2427"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2428"),
                  //value: state.items["2428"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2429")
                }}
                value={state.items["2429"]}
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
                  onChange: handleValueChange("2430")
                }}
                value={state.items["2430"]}
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
            {state.items["2430"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2432")
                }}
                value={state.items["2432"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2432"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                   // onChange: handleValueChange("2433"),
                   // value: state.items["2433"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2432"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2433"),
                    //value: state.items["2433"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2432"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2433"),
                    //value: state.items["2433"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
        {state.items["2427"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2428"),
                  //value: state.items["2428"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2429")
                }}
                value={state.items["2429"]}
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
                  onChange: handleValueChange("2430")
                }}
                value={state.items["2430"]}
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
            {state.items["2430"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2430"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2431"),
                    //value: state.items["2431"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2432")
                }}
                value={state.items["2432"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2432"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2433"),
                    //value: state.items["2433"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2432"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2433"),
                    //value: state.items["2433"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2432"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2433"),
                    //value: state.items["2433"]
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
                  onChange: handleValueChange("2434")
                }}
                value={state.items["2434"]}
                id="Cancer"
                labelText="Cancer"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2434"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2435"),
                    value: state.items["2435"]
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
                    onChange: handleValueChange("2436"),
                    value: state.items["2436"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2434"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2435"),
                    //value: state.items["2435"]
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
                    //onChange: handleValueChange("2436"),
                    //value: state.items["2436"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2434"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Cancer_date"
                  id="Cancer_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2435"),
                    //value: state.items["2435"]
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
                    //onChange: handleValueChange("2436"),
                    //value: state.items["2436"]
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
                  onChange: handleValueChange("2437")
                }}
                value={state.items["2437"]}
                id="f/u_CAG"
                labelText="f/u_CAG"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2437"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2438"),
                    value: state.items["2438"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2437"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2438"),
                    //value: state.items["2438"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2437"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_CAG_date"
                  id="f/u_CAG_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2438"),
                    //value: state.items["2438"]
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
                  onChange: handleValueChange("2439")
                }}
                value={state.items["2439"]}
                id="f/u_loss"
                labelText="f/u_loss"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2439"] === "Yes" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2440"),
                    value: state.items["2440"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2439"] === "No" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2440"),
                    //value: state.items["2440"]
                  }}
                />
              </GridItem>
              </>
            )}
            {state.items["2439"] === "Empty" && (
              <>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="f/u_loss_date"
                  id="f/u_loss_date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2440"),
                    //value: state.items["2440"]
                  }}
                />
              </GridItem>
              </>
            )}
          </GridContainer>
    </CardBody>
  );
}
