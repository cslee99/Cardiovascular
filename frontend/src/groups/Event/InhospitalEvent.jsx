import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";
import CardBody from "components/Card/CardBody.js";

export default function InhospitalEvent(props) {
  const { state, handleValueChange } = props;

  return (
    <CardBody>
      <h2>InhospitalEvent</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("211")
            }}
            value={state.items["211"]}
            id="Death"
            labelText="Death"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE death is yes */}
        {state.items["211"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("212"),
                  value: state.items["212"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("213")
                }}
                value={state.items["213"]}
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
        {state.items["211"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("212"),
                  //value: state.items["212"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("213")
                }}
                value={state.items["213"]}
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
        {state.items["211"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("212"),
                  //value: state.items["212"],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("213")
                }}
                value={state.items["213"]}
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
              onChange: handleValueChange("214")
            }}
            value={state.items["214"]}
            id="MI"
            labelText="MI"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE MI is yes */}
        {state.items["214"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("215"),
                  value: state.items["215"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("216")
                }}
                value={state.items["216"]}
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
        {state.items["214"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("215"),
                  //value: state.items["215"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("216")
                }}
                value={state.items["216"]}
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
        {state.items["214"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Date"
                id="Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("215"),
                  //value: state.items["215"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("216")
                }}
                value={state.items["216"]}
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
              onChange: handleValueChange("217")
            }}
            value={state.items["217"]}
            id="Ischemic stroke"
            labelText="Ischemic stroke"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>
        {state.items["217"] === "Yes" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: handleValueChange("218"),
                value: state.items["218"]
              }}
            />
          </GridItem>
        )}
        {state.items["217"] === "No" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("218"),
                //value: state.items["218"]
              }}
            />
          </GridItem>
        )}
        {state.items["217"] === "Empty" && (
          <GridItem xs={12} sm={12} md={2}>
            <CustomInput
              labelText="Ischemic stroke_Date"
              id="Ischemic stroke_Date"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                //onChange: handleValueChange("218"),
                //value: state.items["218"]
              }}
            />
          </GridItem>
        )}

        <GridItem xs={12} sm={12} md={3}></GridItem>

        <GridItem xs={12} sm={12} md={1}>
          <CustomSelectBox
            selectProps={{
              autoWidth: true,
              onChange: handleValueChange("219")
            }}
            value={state.items["219"]}
            id="TLR"
            labelText="TLR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TLR is yes */}
        {state.items["219"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2110"),
                  value: state.items["2110"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2111")
                }}
                value={state.items["2111"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["219"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2110"),
                  //value: state.items["2110"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2111")
                }}
                value={state.items["2111"]}
                id="TLR_Tx"
                labelText="TLR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["219"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TLR_Date"
                id="TLR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2110"),
                  //value: state.items["2110"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2111")
                }}
                value={state.items["2111"]}
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
              onChange: handleValueChange("2112")
            }}
            value={state.items["2112"]}
            id="TVR"
            labelText="TVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE TVR is yes */}
        {state.items["2112"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2113"),
                  value: state.items["2113"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2114")
                }}
                value={state.items["2114"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2112"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2113"),
                  //value: state.items["2113"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2114")
                }}
                value={state.items["2114"]}
                id="TVR_Tx"
                labelText="TVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2112"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="TVR_Date"
                id="TVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2113"),
                  //value: state.items["2113"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2114")
                }}
                value={state.items["2114"]}
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
              onChange: handleValueChange("2115")
            }}
            value={state.items["2115"]}
            id="OVR"
            labelText="OVR"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE OVR is yes */}
        {state.items["2115"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2116"),
                  value: state.items["2116"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2117")
                }}
                value={state.items["2117"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2115"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2116"),
                  //value: state.items["2116"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2117")
                }}
                value={state.items["2117"]}
                id="OVR_Tx"
                labelText="OVR_Tx"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2115"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="OVR_Date"
                id="OVR_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2116"),
                  //value: state.items["2116"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2117")
                }}
                value={state.items["2117"]}
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
              onChange: handleValueChange("2118")
            }}
            value={state.items["2118"]}
            id="Stent_thrombosis"
            labelText="Stent_thrombosis"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Stent thrombosis is yes */}
        {state.items["2118"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2119"),
                  value: state.items["2119"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2120")
                }}
                value={state.items["2120"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2118"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2119"),
                  //value: state.items["2119"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2120")
                }}
                value={state.items["2120"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
              />
            </GridItem>
          </>
        )}
        {state.items["2118"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Stent_thrombosis_Date"
                id="Stent_thrombosis_Date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2119"),
                  //value: state.items["2119"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2120")
                }}
                value={state.items["2120"]}
                id="Stent_thrombosis_type"
                labelText="Stent_thrombosis_type"
                //items={[{ title: "PCI" }, { title: "CABG" }]}
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
              onChange: handleValueChange("2121")
            }}
            value={state.items["2121"]}
            id="Bleeding"
            labelText="Bleeding"
            items={[{ title: "Yes" }, { title: "No" }]}
          />
        </GridItem>

        {/* NOTE Bleeding is yes */}
        {state.items["2121"] === "Yes" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: handleValueChange("2122"),
                  value: state.items["2122"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2123")
                }}
                value={state.items["2123"]}
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
                  onChange: handleValueChange("2124")
                }}
                value={state.items["2124"]}
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
            {state.items["2124"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2125"),
                    value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2126")
                }}
                value={state.items["2126"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2126"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleValueChange("2127"),
                    value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2126"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2126"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
        {state.items["2121"] === "No" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2122"),
                  //value: state.items["2122"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2123")
                }}
                value={state.items["2123"]}
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
                  onChange: handleValueChange("2124")
                }}
                value={state.items["2124"]}
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
            {state.items["2124"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2126")
                }}
                value={state.items["2126"]}
                //id="Bleeding_transfusion"
                //labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2126"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2126"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2126"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}


        {state.items["2121"] === "Empty" && (
          <>
            <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="Bleeding_date"
                id="Bleeding_date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  //onChange: handleValueChange("2122"),
                  //value: state.items["2122"]
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2123")
                }}
                value={state.items["2123"]}
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
                  onChange: handleValueChange("2124")
                }}
                value={state.items["2124"]}
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
            {state.items["2124"] === "other" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "CNS" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "GI" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "GU" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "Retroperitoneal" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "type Pulmonary" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2124"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="other_description"
                  id="other_description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2125"),
                    //value: state.items["2125"]
                  }}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={1}>
              <CustomSelectBox
                selectProps={{
                  autoWidth: true,
                  onChange: handleValueChange("2126")
                }}
                value={state.items["2126"]}
                id="Bleeding_transfusion"
                labelText="Bleeding_transfusion"
                //items={[{ title: "Yes" }, { title: "No" }]}
              />
            </GridItem>
            {state.items["2126"] === "Yes" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2126"] === "No" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
            {state.items["2126"] === "Empty" && (
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="unit"
                  id="unit"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    //onChange: handleValueChange("2127"),
                    //value: state.items["2127"]
                  }}
                />
              </GridItem>
            )}
          </>
        )}
      </GridContainer>
    </CardBody>
  );
}
