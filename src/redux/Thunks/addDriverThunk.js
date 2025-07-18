import { createAsyncThunk } from "@reduxjs/toolkit";

export const addDriverThunk = createAsyncThunk(

    // הפונקציה מקבלת את השם 
    'logonThunk',
    // פונקציה להפעלה 

    async ( {driver} ) => {
     
console.log(driver,"driver" );

        const response = await fetch(`https://localhost:7164/api/Driver/AddDriver`, {
            method: 'POST',
            body: JSON.stringify(driver),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
          const data = await response.text();
            return data;
        }
        else {
            throw new Error('faild to fetch');
        }
    }
)