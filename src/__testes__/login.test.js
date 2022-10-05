import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';
import AuthContextProvider from '../Context/AuthContext';
// import userEvent from '@testing-library/user-event';

test('test login', async () => {
    render(
        <AuthContextProvider>
            <Login />
        </AuthContextProvider>)

    const inputEmail = screen.getByTestId('login-email');
    const inputPassword = screen.queryByTestId('login-password');
    const submitButton = screen.queryByTestId('login-submit');


    fireEvent.input(inputEmail, { target: { value: 'qais@test.com' } });
    fireEvent.change(inputPassword, { target: { value: 123 } });
    // userEvent.type(inputEmail, 'qais@test.com');
    // userEvent.type(inputPassword, 123)

    expect(inputEmail).toHaveValue('qais@test.com');
    // userEvent.click(submitButton);
    expect(inputEmail).toHaveValue('qais@test.com');
    expect(inputPassword.value).toBe("123");

});

