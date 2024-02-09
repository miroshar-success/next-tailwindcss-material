'use client';

import { useState } from 'react';
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

export function LoginCard() {
  // State to store form data and validation status
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Form submission handler
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
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email:formData.email, password:formData.password }),
        });

        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error Login user:', error);
      }
    }
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
                Sign In
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
                <div className="-ml-2.5">
                <Checkbox
                    label="Remember Me"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth type='submit'>
                Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                    as="a"
                    href="/register"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                >
                    Sign up
                </Typography>
                </Typography>
            </CardFooter>
        </Card>
        {message && <p>{message}</p>}
    </form>
  );
}
