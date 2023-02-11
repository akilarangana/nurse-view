import Button from '@mui/material/Button';
import './App.css';
import PatientSearchBox from './component/PatientSearchBox';
import PatientSummary from './component/PatientSummary';
import PrescriptionTable from './component/PrescriptionTable';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import configData from "config.json";

function App() {

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleDoneClick = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(configData.SERVER_URL +"/inventory/update", {
        method: "PUT",
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(query.visitData.prescriptionList)
      });
      if (res.status === 200) {
        console.log('on success')
        handleSuccess();
        setQuery("");
      } else {
        alert('Some error occured.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSuccess = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Drug data updated Successfully!
            </Alert>
          </Snackbar>
        </div>
      </div>

    </div>
  );
}

export default App;
