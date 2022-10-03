import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';

xtest('test login', () => {
    render(<Login />);
    const inputEmail = screen.getAllByTestId('email');
    const inputPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('submit');
    fireEvent.change(inputEmail, { target: { value: 'qais@test.com' } });
    fireEvent.change(inputPassword, { target: { value: '123' } });
    fireEvent.click(submitButton);

    expect(inputEmail.value).toBe('qais@test.com');
    expect(inputPassword.value).toBe('123');


})