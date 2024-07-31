// this will be a form that will allow the user to add a chemical to the list of chemicals

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { addChemical } from '../../redux/chemicalSlice';

export default function AddChemical() {
    const [name, setName] = useState('');
    const [formula, setFormula] = useState('');
    const dispatch = useDispatch();
    return (
        <Form className="w-25 add
        "
        >
            <FormGroup>
                <Label for="name">Name</Label>
                <Input autoFocus
                    type="text" name="name" id="name" placeholder="Enter chemical name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="formula">Formula</Label>
                <Input
                    type="text" name="formula" id="formula" placeholder="Enter chemical formula"
                    value={formula}
                    onChange={e => setFormula(e.target.value)}
                />
            </FormGroup>
            <Button color="success" onClick={() => {
                // empty the input fields
                setName('');
                setFormula('');
                dispatch(addChemical({ name, formula }));
            }}
            >Add</Button>
        </Form>
    )
}