import React from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit, name, number, onChange }) => (
  <div>
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={onChange}
          placeholder="Enter contact name"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          required
          value={number}
          onChange={onChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  </div>
);
