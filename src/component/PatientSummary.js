import React from "react";
import './PatientSummary.css';
import Grid from '@mui/material/Grid';

export function PatientSummary(row) {



    console.log(row)
    return (
        <div className="patient-summary-main-div">
            {(row && row.query) &&

                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <React.Fragment>
                            <Grid item xs={4}>
                                <label><b>Name : </b></label> <label>{row.query.patientName}</label>
                            </Grid>
                            <Grid item xs={4}>
                                <label><b>Age : </b></label> <label>{row.query.age}</label>
                            </Grid>
                            <Grid item xs={4}>
                                <label><b>Date of Birth : </b></label> <label>{row.query.birthDay}</label>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item spacing={3}>
                        <React.Fragment>
                            <Grid item xs={4}>
                                <label><b>Gender : </b></label> <label>{row.query.gender}</label>
                            </Grid>
                            <Grid item xs={4}>
                                <label><b>Phone Number : </b></label> <label>{row.query.phoneNumber}</label>
                            </Grid>
                            <Grid item xs={4}>
                                <label><b>Home Town : </b></label> <label>{row.query.homeTown}</label>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>


            }
        </div>
    );
}

export default PatientSummary;