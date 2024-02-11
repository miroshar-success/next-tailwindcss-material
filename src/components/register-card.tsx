'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function RegisterCard() {
  const router = useRouter();
  // State to store form data and validation status
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Handle register action
  const handleSubmit = async (e) => {
    e.preventDefault();
     // Validate form fields
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    setFormErrors(errors);

    // Submit form if no errors
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });

        const data = await response.json();
        setMessage(data.message);
        if(data.status == '201'){
          router.push('/');
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
        <Card className="w-96">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                Sign Up
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input
                label="Email"
                size="lg"
                type="email"
                name="email"
                id="email"
                icon={<AtSymbolIcon />}
                value={formData.email}
                onChange={handleInputChange}
                error={formErrors.email}
                />
                {formErrors.email && <Typography variant="error">{formErrors.email}</Typography>}
                <Input
                label="Password"
                size="lg"
                type="password"
                name="password"
                id="password"
                minLength={6}
                icon={<KeyIcon />}
                value={formData.password}
                onChange={handleInputChange}
                error={formErrors.password}
                />
                {formErrors.password && <Typography variant="error">{formErrors.password}</Typography>}
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth type='submit'>
                Sign Up
                </Button>
            </CardFooter>
        </Card>
        {message && <p>{message}</p>}
    </form>
  );
}
