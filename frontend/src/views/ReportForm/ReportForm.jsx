import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
// core components
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";

import { elementState } from "./elementState.js";

// Report Component
import AdmissionData from "groups/AdmissionData/AdminssionData";
import Event from "groups/Event/Event";
import PCI from "groups/PCI/PCI";
import Lab from "groups/Lab/Lab";
import Medication from "groups/Medication/Medication";
import Test from "groups/Test/Test";


// ANCHOR 레포트폼
export default function ReportForm({ history }) {
  const [state, setState] = useState({
    id: null,
    page_number: 1,
    selected: 1,
    items: elementState
  });

  let { id } = useParams();

  useEffect(() => {
    async function fetchReport() {
      const { data } = await axios.get(`/report/${id}`);

      setState({
        ...state,
        id: id,
        items: JSON.parse(data)
      });
    }

    if (id) {
      fetchReport();
    }
  }, []);

  const setReportId = id => {
    setState({
      ...state,
      id: id
    });
  };
  const handleValueChange = e_number => e => {
    setState({
      ...state,
      items: { ...state.items, [e_number]: e.target.value }
    });
  };

  const handleCheckedChange = e_number => e => {
    setState({
      ...state,
      items: { ...state.items, [e_number]: e.target.checked }
    });
  };

  const handleDateChange = e_number => date => {
    setState({
      ...state,
      items: { ...state.items, [e_number]: date }
    });
  };

  const handlePrev = () => {
    if(state.selected <= 1)
    {
      setState({ ...state, selected: (state.selected % 7)});
    }
    else
    {
      setState({ ...state, selected: (state.selected % 7) -1 });
    }
    
  }  

  const handleNext = () => {
    if(state.selected % 6 >= 1)
    {
      setState({ ...state, selected: (state.selected % 6) + 1});
    }
    else if(state.selected === 0){
      setState({ ...state, selected: (state.selected % 6) + 1 });
    }
  }

  //top scoll 활용 --> 이 기능을 handleprev, handlenext에 주면 된다.
    

  return (
    <div>
      <Button onClick={handlePrev} color="primary">
        Prev
      </Button>
      
      <Button onClick={handleNext} color="primary">
        Next
      </Button>

      <GridContainer container spacing={0} alignItems="center" justify="center">
        {state.selected === 1 && (
          <AdmissionData
            state={state}
            toast={toast}
            number={state.selected}
            setReportId={setReportId}
            handleNext={handleNext}
            handleValueChange={handleValueChange}
            handleDateChange={handleDateChange}
            handleCheckedChange={handleCheckedChange}
          />
        )}
        {state.selected === 2 && (
          <Event
            state={state}
            toast={toast}
            number={state.selected}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleValueChange={handleValueChange}
            handleCheckedChange={handleCheckedChange}
          />
        )}
        {state.selected === 3 && (
          <PCI
            state={state}
            toast={toast}
            number={state.selected}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleValueChange={handleValueChange}
            handleCheckedChange={handleCheckedChange}
          />
        )}
        {state.selected === 4 && (
          <Lab
            state={state}
            toast={toast}
            number={state.selected}
            handlePrev={handlePrev}
            handleValueChange={handleValueChange}
            handleCheckedChange={handleCheckedChange}
          />
        )}
        {state.selected === 5 && (
          <Test
            state={state}
            toast={toast}
            number={state.selected}
            handlePrev={handlePrev}
            handleValueChange={handleValueChange}
            handleCheckedChange={handleCheckedChange}
          />
        )}
        {state.selected === 6 && (
          <Medication
            state={state}
            toast={toast}
            number={state.selected}
            handlePrev={handlePrev}
            handleValueChange={handleValueChange}
            handleCheckedChange={handleCheckedChange}
          />
        )}
      </GridContainer>
    </div>
  );
}
