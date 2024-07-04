// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDoContainer from '../../../src/modules/todo/ToDoContainer'

afterEach(cleanup);

test('add todo form inputs are displayed', async () => {
    render(<ToDoContainer />)

    expect(screen.getByText('Add Todo')).toHaveRole('heading');

    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  
    expect(screen.getByText('Add')).toHaveRole('button');
})

test('creating a todo via form creates todo item in the list', async () => {
    const title = 'grocceries';
    const desc = 'veggies';
    const order = '1'
    render(<ToDoContainer />)


    await userEvent.type(screen.getByLabelText('Title'), title);
    await userEvent.type(screen.getByLabelText('Description'), desc);
    await userEvent.click(screen.getByText('Add'));

    const listItem = screen.getByRole('listitem');
    expect(listItem.textContent).includes(order)
    expect(listItem.textContent).includes(title)
    expect(listItem.textContent).includes(desc)
    expect(screen.getByText('Delete')).toHaveRole('button');
    expect(screen.getByText('Done')).toHaveRole('button');

})