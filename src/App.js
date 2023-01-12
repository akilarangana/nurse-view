import logo from './logo.svg';
import './App.css';
import PatientSearchBox from './component/PatientSearchBox';
import PatientSummary from './component/PatientSummary';
import PrescriptionTable from './component/PrescriptionTable';
import { useState } from "react";
import Grid from '@mui/material/Grid';


function App() {

  const [query, setQuery] = useState("");

  return (
    <div>
      <PatientSearchBox onQuery={setQuery} />
      <div className='patient-summary'>
        <PatientSummary query={query} />
        <Grid item xs={12}>
          <PrescriptionTable query={query} />
        </Grid>

      </div>

    </div>
  );
}

export default App;
