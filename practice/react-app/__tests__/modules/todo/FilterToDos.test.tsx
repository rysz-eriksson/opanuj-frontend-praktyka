// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDoContainer from '../../../src/modules/todo/ToDoContainer'

afterEach(cleanup);

test('checking filter checkbox filters out finished todos', async () => {
    render(<ToDoContainer />)

    await userEvent.type(screen.getByLabelText('Title'), 'grocceries');
    await userEvent.type(screen.getByLabelText('Description'), 'veggies');
    await userEvent.click(screen.getByText('Add'));
    expect(screen.queryAllByRole('listitem').length).toEqual(1)

    await userEvent.click(screen.getByText('Done'));
    await userEvent.click(screen.getByRole('checkbox'));

    expect(screen.queryAllByRole('listitem').length).toEqual(0)
})