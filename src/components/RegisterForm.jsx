import React, { useState } from "react";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";
import '../../resources/css/RegisterForm.css'; 


const RegisterForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage('');

    try {
      const response = await axios.post('/postregister', form, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="regformbg">
      <form onSubmit={handleSubmit}  autoComplete="off">
        <div>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <div style={{ color: 'red' }}>{errors.name[0]}</div>}
        </div>

        <div className="mt-4">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="off" />
          {errors.email && <div style={{ color: 'red' }}>{errors.email[0]}</div>}
        </div>

        <div className="mt-4">
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
          {errors.password && <div style={{ color: 'red' }}>{errors.password[0]}</div>}
        </div>

        <div className="mt-4">
          <label>Confirm Password</label>
          <input type="password" name="password_confirmation" value={form.password_confirmation} onChange={handleChange} />
        </div>

        <div className="flex items-center justify-end mt-4">
          <input type="submit" name="submit" value="Register"/>
        </div>

        {message && <p style={{ color: 'green' }}>{message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
