import React from "react";
import { FormGroup, Input, Label, Form } from "reactstrap";

export default function FormView() {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="umur">Umur</Label>
        <Input
          type="number"
          name="umur"
          id="umur"
          placeholder="Umur with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="alamat">Alamat</Label>
        <Input
          type="number"
          name="alamat"
          id="alamat"
          placeholder="Alamat with a placeholder"
        />
      </FormGroup>
    </Form>
  );
}
