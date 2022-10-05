import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Singup from '../components/Singup';
import AuthContextProvider from '../Context/AuthContext';
// import userEvent from '@testing-library/user-event';

test('test singup', () => {
    render(
        <AuthContextProvider>
            <Singup />
        </AuthContextProvider>)

    const inputuserName = screen.queryByTestId('singup-name');
    const inputEmail = screen.queryByTestId('singup-email');
    const inputPassword = screen.queryByTestId('singup-password');
    const submitButton = screen.queryByTestId('singup-submit');

    // userEvent.type(inputEmail, 'qais@test.com')

    fireEvent.change(inputuserName, { target: { value: 'test' } });
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
    fireEvent.change(inputPassword, { target: { value: 123 } });

    expect(inputuserName).toHaveValue('test');
    expect(inputEmail).toHaveValue('test@test.com');
    expect(inputPassword.value).toBe("123");
    // fireEvent.click(submitButton);

});