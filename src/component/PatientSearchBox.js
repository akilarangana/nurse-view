import React from "react";
import './PatientSummary.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './PatientSummary.css';
import axios from "axios";

export function PatientSearchBox({ onQuery }) {

    const [patientId, setPatientId] = React.useState(null);
    const [patinet, setPatient] = React.useState();

    const handlePatientIdChange = (e) => {
        const { value } = e.target;
        setPatientId(value);
    }


    const handlePatientSearch = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return axios.get("https://3.110.172.211:8080/channelling-manager/patients/getById?patientId="+patientId+"&visitDate="+today)
            .then((response) => {
                onQuery(response.data)
            });
    }

    return (
        <div className="main-div">
            <div>
                <div class="fieldBlock">
                    <TextField id="outlined-basic" name="age" label="Patient Number"
                        variant="outlined" onChange={handlePatientIdChange} />
                </div>
                <div >
                    <Button variant="contained" onClick={handlePatientSearch} id="drug-add-button">Search</Button>
                </div>
            </div>

        </div>
    );
}

export default PatientSearchBox;