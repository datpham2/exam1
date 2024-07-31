import React from 'react'
// import useSelector 
import { useDispatch, useSelector } from 'react-redux'
import AddChemical from '../add_chemical/AddChemical'
import ChemicalItem from '../chemical_item/ChemicalItem'
import EditChemical from '../edit_chemical/EditChemical'
import { Container } from 'reactstrap'

export default function ChemicalApp() {
    const { chemicals, status } = useSelector(state => state.chemicals);
    const dispatch = useDispatch();
    return (
        <Container className="d-flex flex-column align-items-center mt-5 w-100"
        >
            <h1>Chemical App</h1>
            {
                status.action === 'editing' ? <EditChemical chemical={status.chemical} />
                    : <AddChemical />
            }
            <ul className="list-unstyled w-50 m-3 p-3 border border-5 border-secondary rounded
            ">
                {chemicals.map(chemical => (
                    <ChemicalItem key={chemical.id} chemical={chemical} />
                ))}
            </ul>
        </Container>
    )
}