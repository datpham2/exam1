// create a slice for chemical data

import { createSlice } from '@reduxjs/toolkit'

const chemicalSlice = createSlice({
    name: 'chemicals',
    initialState: {
        "chemicals": [
            {"id": 1, "name": "Hydrochloric Acid", "formula": "HCl"},
            {"id": 2, "name": "Sodium Chloride", "formula": "NaCl"},
            {"id": 3, "name": "Sulfuric Acid", "formula": "H2SO4"},
            {"id": 4, "name": "Ammonia", "formula": "NH3"},
            {"id": 5, "name": "Ethanol", "formula": "C2H5OH"},
            // sample data to be used for adding, editing, and deleting chemicals
            // {"id": 6, "name": "Methanol", "formula": "CH3OH"},
            // {"id": 7, "name": "Acetic Acid", "formula": "CH3COOH"},
            // {"id": 8, "name": "Sodium Hydroxide", "formula": "NaOH"},
            // {"id": 9, "name": "Hydrogen Peroxide", "formula": "H2O2"},
            // {"id": 10, "name": "Nitric Acid", "formula": "HNO3"}
        ],
        status: {
            "action": "add",
            
        },
    },
    reducers: {
        addChemical: (state, action) => {
            const { name, formula } = action.payload
            const id = state.chemicals.length + 1
            state.chemicals.push({ id, name, formula })
        },
        editChemical: (state, action) => {
            const chemical = action.payload
            console.log('chemical', chemical)
            state.status = { action: 'editing', chemical: chemical }
        },
        deleteChemical: (state, action) => {
            const id = action.payload
            state.chemicals = state.chemicals.filter(chemical => chemical.id !== id)
        }
    }
})

export const { addChemical, editChemical, deleteChemical } = chemicalSlice.actions

export default chemicalSlice.reducer

