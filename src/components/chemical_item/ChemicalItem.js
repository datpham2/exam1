// display chemical item

import { Button } from 'reactstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteChemical, editChemical } from '../../redux/chemicalSlice';

export default function ChemicalItem({chemical}) {
    const dispatch = useDispatch();
    const handle_delete = id => {
        dispatch(deleteChemical(id));
    }
    const handle_edit = chemical => {
        dispatch(editChemical(chemical));
    }
    return (
        <li className="d-flex justify-content-between align-items-center p-1 m-1 border border-5 border-secondary rounded w-100
        "
        >
            <span className="text-capitalize"
            >{chemical.name} - {chemical.formula}</span>
            <div>
                <Button color="danger" size="sm" className="mx-1" onClick={() => 
                    handle_delete(chemical.id)
                }>Delete</Button>
                <Button color="warning" size="sm" className="mx-1" 
                    onClick={() => handle_edit(chemical.id)}
                >Edit</Button>
            </div>
        </li>
    )
}