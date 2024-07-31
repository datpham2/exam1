// this will be a form that will allow the user to edit a chemical in the list of chemicals embedded
// in each chemical item

import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default function EditChemical(
    // pass the chemical to be edited as a prop
    chemical
) {
    return (
        <Form className="w-25 edit">
            <FormGroup>
                <Label for="name">Name</Label>
                <Input autoFocus type="text" name="name" id="name" placeholder="Enter chemical name" 
                    value={chemical.name}
                />
            </FormGroup>
            <FormGroup>
                <Label for="formula">Formula</Label>
                <Input type="text" name="formula" id="formula" placeholder="Enter chemical formula"
                    value={chemical.formula}
                />
            </FormGroup>
            <Button color="warning">Edit</Button>
        </Form>
    )
}