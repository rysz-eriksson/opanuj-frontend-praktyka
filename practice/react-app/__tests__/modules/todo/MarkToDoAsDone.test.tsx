// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDoContainer from '../../../src/modules/todo/ToDoContainer'

afterEach(cleanup);

test('clicking "Done" button marks todo as done', async () => {
    render(<ToDoContainer />)

    await userEvent.type(screen.getByLabelText('Title'), 'grocceries');
    await userEvent.type(screen.getByLabelText('Description'), 'veggies');
    await userEvent.click(screen.getByText('Add'));

    await userEvent.click(screen.getByText('Done'));
    
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
})