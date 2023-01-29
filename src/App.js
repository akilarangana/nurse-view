import Button from '@mui/material/Button';
import './App.css';
import PatientSearchBox from './component/PatientSearchBox';
import PatientSummary from './component/PatientSummary';
import PrescriptionTable from './component/PrescriptionTable';
import { useState } from "react";
import Grid from '@mui/material/Grid';


function App() {

  const [query, setQuery] = useState("");

  const handleDoneClick = async (e) => {
    e.preventDefault();
   console.log(query.visitData.prescriptionList);

    try {
        let res = await fetch("https://3.110.172.211:8080/channelling-manager/inventory/update", {
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(query.visitData.prescriptionList)
        });
        let resJson = await res.json();
        if (res.status === 200) {
           // handleSuccess();
        } else {
            alert('Some error occured.');
        }
    } catch (err) {
        console.log(err);
    }
}

  return (
    <div>
      <PatientSearchBox onQuery={setQuery} />
      <div className='patient-summary'>
        <PatientSummary query={query} />
        <Grid item xs={12}>
          <PrescriptionTable query={query} />
        </Grid>
        <div id="buttonDiv">
        <Button variant="contained" onClick={handleDoneClick} id="done-button">Done</Button>
        </div>
      </div>

    </div>
  );
}

export default App;
