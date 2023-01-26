import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Form, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          pattern="(?=.*\d).{7,10}"
          title="The password must contain at least one number and at least 7 and no more than 10 characters"
        />
      </Label>
      <Button>Register</Button>
    </Form>
  );
};
