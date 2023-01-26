import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/contacts-operations';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { Input, Button, Form, Label } from './UpdateForm.styled';

export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setNumber] = useState(contactToUpdate.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      updateContact({
        ...contactToUpdate,
        name,
        number,
      })
    );
    closeForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button
        onClick={() => {
          Notiflix.Notify.info(`Contact with name ${name} was edited`);
        }}
      >
        Save
      </Button>
    </Form>
  );
};
