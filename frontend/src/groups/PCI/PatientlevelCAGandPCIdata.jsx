import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "components/CustomButtons/Button";
import CustomSelectBox from "components/CustomSelectBox/CustomSelectBox.js";

export default function PatientlevelCAGandPCIdata(props) {
  const { state, handleCheckedChange, handleValueChange } = props;
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
      <h2>Patient level CAG and PCI data</h2>
   
    <GridContainer>
        <GridItem xs={12} sm={12} md={3}><h4 style={P_margin.child1Container}>Significant stenosis location</h4></GridItem>
    </GridContainer>      
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={2} style={P_margin.child1Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["321"]}
                    onChange={handleCheckedChange("321")}
                    value={state.items["321"]}
                />
                }
                label="LM"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["322"]}
                    onChange={handleCheckedChange("322")}
                    value={state.items["322"]}
                />
                }
                label="LAD"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["323"]}
                    onChange={handleCheckedChange("323")}
                    value={state.items["323"]}
                />
                }
                label="LCX"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["324"]}
                    onChange={handleCheckedChange("324")}
                    value={state.items["324"]}
                />
                }
                label="RCA"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["325"]}
                    onChange={handleCheckedChange("325")}
                    value={state.items["325"]}
                />
                }
                label="SVG"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["326"]}
                    onChange={handleCheckedChange("326")}
                    value={state.items["326"]}
                />
                }
                label="AG"
            />
        </GridItem>
      </GridContainer>

      <GridContainer>
          <br></br>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>Syntax score_pre</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="Syntax score_pre"
                id="Syntax score_pre"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("327"),
                    value: state.items["327"]
                }}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={1}></GridItem>

        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>Syntax score_pre</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="Syntax score_post"
                id="Syntax score_post"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("328"),
                    value: state.items["328"]
                }}
            />
        </GridItem>        
      </GridContainer>

      <GridContainer>
          <br></br>
      </GridContainer>

    <GridContainer>
        <Button style={P_margin.child1Container}>Score 계산기</Button>
        <Button style={P_margin.child1Container}>Syntax score</Button>
    </GridContainer>

    <GridContainer>
        <br></br>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>Gensini's score</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="Gensini's score"
                id="Gensini's score"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("329"),
                    value: state.items["329"]
                }}
            />
        </GridItem>

        <GridItem xs={12} sm={12} md={1}></GridItem>

        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>CAB score</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomInput
                labelText="CAB score"
                id="CAB score"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3210"),
                    value: state.items["3210"]
                }}
            />
        </GridItem>        
      </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
            <h4 style={P_margin.child1Container}>CAB score</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
            <CustomSelectBox
                selectProps={{
                    autoWidth: true,
                    onChange: handleValueChange("3211")
                }}
                value={state.items["3211"]}
                id="Target vessel"
                labelText="Target vessel"
                items={[
                    { title: "LM" },
                    { title: "LAD" },
                    { title: "LCX" },
                    { title: "RCA" },
                    { title: "SVG" },
                    { title: "AG" },
                ]}
            />
        </GridItem>
    </GridContainer>

     {/* Lesion characteristics_all lesion */}
    
    <GridContainer>
        <br></br>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <h4 style={P_margin.child1Container}>
                Lesion characteristics_all lesion
            </h4>
        </GridItem>
    </GridContainer>    

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3212"]}
                    onChange={handleCheckedChange("3212")}
                    value={state.items["3212"]}
                />
                }
                label="heavy calcification"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3213"]}
                    onChange={handleCheckedChange("3213")}
                    value={state.items["3213"]}
                />
                }
                label="bifurcation"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3214"]}
                    onChange={handleCheckedChange("3214")}
                    value={state.items["3214"]}
                />
                }
                label="thrombus"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3215"]}
                    onChange={handleCheckedChange("3215")}
                    value={state.items["3215"]}
                />
                }
                label="CTO"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3216"]}
                    onChange={handleCheckedChange("3216")}
                    value={state.items["3216"]}
                />
                }
                label="ISR"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3217"]}
                    onChange={handleCheckedChange("3217")}
                    value={state.items["3217"]}
                />
                }
                label="BMS"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3218"]}
                    onChange={handleCheckedChange("3218")}
                    value={state.items["3218"]}
                />
                }
                label="ICR_DES"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3219"]}
                    onChange={handleCheckedChange("3219")}
                    value={state.items["3219"]}
                />
                }
                label="stent thrombosis"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3220"]}
                    onChange={handleCheckedChange("3220")}
                    value={state.items["3220"]}
                />
                }
                label="Ao-ostial_RCA"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3221"]}
                    onChange={handleCheckedChange("3221")}
                    value={state.items["3221"]}
                />
                }
                label="Ao-ostial_LM"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3222"]}
                    onChange={handleCheckedChange("3222")}
                    value={state.items["3222"]}
                />
                }
                label="Ao-ostial_SVG"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3223"]}
                    onChange={handleCheckedChange("3223")}
                    value={state.items["3223"]}
                />
                }
                label="branch-ostial_LAD"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3224"]}
                    onChange={handleCheckedChange("3224")}
                    value={state.items["3224"]}
                />
                }
                label="branch-ostial_LCX"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3225"]}
                    onChange={handleCheckedChange("3225")}
                    value={state.items["3225"]}
                />
                }
                label="aneurysm or ectasia"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
    </GridContainer>



    {/* PCI characteristics */}
    <GridContainer>
        <br></br>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <h4 style={P_margin.child1Container}>PCI characteristics</h4>
        </GridItem>
    </GridContainer>
    
    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <p style={P_margin.child2Container}>Other procedure</p>
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3226"]}
                    onChange={handleCheckedChange("3226")}
                    value={state.items["3226"]}
                />
                }
                label="Thrombosuction"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3227"]}
                    onChange={handleCheckedChange("3227")}
                    value={state.items["3227"]}
                />
                }
                label="Atherectomy-Rotablator"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3228"]}
                    onChange={handleCheckedChange("3228")}
                    value={state.items["3228"]}
                />
                }
                label="IABP"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3229"]}
                    onChange={handleCheckedChange("3229")}
                    value={state.items["3229"]}
                />
                }
                label="ECMO"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3230"]}
                    onChange={handleCheckedChange("3230")}
                    value={state.items["3230"]}
                />
                }
                label="TPM"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <br></br>
    </GridContainer>
   
    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <p style={P_margin.child2Container}>periPCI arrhythmia</p>
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3231"]}
                    onChange={handleCheckedChange("3231")}
                    value={state.items["3231"]}
                />
                }
                label="> 2`AVB"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3232"]}
                    onChange={handleCheckedChange("3232")}
                    value={state.items["3232"]}
                />
                }
                label="VT/VF_pre"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3233"]}
                    onChange={handleCheckedChange("3233")}
                    value={state.items["3233"]}
                />
                }
                label="VT/VF_in"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3234"]}
                    onChange={handleCheckedChange("3234")}
                    value={state.items["3234"]}
                />
                }
                label="VT/VF_post<48h"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3235"]}
                    onChange={handleCheckedChange("3235")}
                    value={state.items["3235"]}
                />
                }
                label="VT/VF_post>48h"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3236"]}
                    onChange={handleCheckedChange("3236")}
                    value={state.items["3236"]}
                />
                }
                label="new AF"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3237"]}
                    onChange={handleCheckedChange("3237")}
                    value={state.items["3237"]}
                />
                }
                label="AIVR"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
    </GridContainer>

    <GridContainer>
        <br></br>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <p style={P_margin.child2Container}>Stenting technique</p>
        </GridItem>
    </GridContainer>
    
    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3238"]}
                    onChange={handleCheckedChange("3238")}
                    value={state.items["3238"]}
                />
                }
                label="overlap stenting"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3239"]}
                    onChange={handleCheckedChange("3239")}
                    value={state.items["3239"]}
                />
                }
                label="2-stent in bifurcation"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3240"]}
                    onChange={handleCheckedChange("3240")}
                    value={state.items["3240"]}
                />
                }
                label="staged PCI"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3241"]}
                    onChange={handleCheckedChange("3241")}
                    value={state.items["3241"]}
                />
                }
                label="direct stenting (no pre-dilation)"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3242"]}
                    onChange={handleCheckedChange("3242")}
                    value={state.items["3242"]}
                />
                }
                label="multivessel stenting"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3243"]}
                    onChange={handleCheckedChange("3243")}
                    value={state.items["3243"]}
                />
                }
                label="DEB"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
    </GridContainer>

    <GridContainer>
        <br></br>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <p style={P_margin.child2Container}>Treated vessel</p>
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3244"]}
                    onChange={handleCheckedChange("3244")}
                    value={state.items["3244"]}
                />
                }
                label="LM"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3245"]}
                    onChange={handleCheckedChange("3245")}
                    value={state.items["3245"]}
                />
                }
                label="LAD"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3246"]}
                    onChange={handleCheckedChange("3246")}
                    value={state.items["3246"]}
                />
                }
                label="LCX"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3247"]}
                    onChange={handleCheckedChange("3247")}
                    value={state.items["3247"]}
                />
                }
                label="RCA"
            />
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child2Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3248"]}
                    onChange={handleCheckedChange("3248")}
                    value={state.items["3248"]}
                />
                }
                label="SVG"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3249"]}
                    onChange={handleCheckedChange("3249")}
                    value={state.items["3249"]}
                />
                }
                label="AG"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
        <GridItem xs={12} sm={12} md={3}></GridItem>
    </GridContainer>

    <GridContainer>
        <br></br>
    </GridContainer>


    {/* PCI - Stent */}

    <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <h4 style={P_margin.child1Container}>Stent</h4>
        </GridItem>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={4} style={P_margin.child1Container}>
            <CustomInput
                labelText="Total Number"
                id="Total Number"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3250"),
                    value: state.items["3250"]
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="Max. size"
                id="Max. size"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3251"),
                    value: state.items["3251"]
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="Min. size"
                id="Min. size"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3252"),
                    value: state.items["3252"]
                }}
            />
        </GridItem>
    </GridContainer>
            
    <GridContainer>
        <GridItem xs={12} sm={12} md={4} style={P_margin.child1Container}>
            <CustomInput
                labelText="Total stent length"
                id="Total stent length"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3253"),
                    value: state.items["3253"]
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="Maimal stent ballon pressure"
                id="Maimal stent ballon pressure"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: handleValueChange("3254"),
                    value: state.items["3254"]
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}></GridItem>
    </GridContainer>

    <GridContainer>
        <br></br>
    </GridContainer>

    <GridContainer>
        <GridItem xs={12} sm={12} md={3} style={P_margin.child1Container}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3255"]}
                    onChange={handleCheckedChange("3255")}
                    value={state.items["3255"]}
                />
                }
                label="IVUS"
            />
        </GridItem>
         <GridItem xs={12} sm={12} md={3}>   
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3256"]}
                    onChange={handleCheckedChange("3256")}
                    value={state.items["3256"]}
                />
                }
                label="FFR"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3257"]}
                    onChange={handleCheckedChange("3257")}
                    value={state.items["3257"]}
                />
                }
                label="IFR"
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.items["3258"]}
                    onChange={handleCheckedChange("3258")}
                    value={state.items["3258"]}
                />
                }
                label="OCT"
            />
        </GridItem>
    </GridContainer>
    </CardBody>
  );
}
