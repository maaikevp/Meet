import { render, fireEvent } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NumberOfEvents from '../components/NumberOfEvents';
import { waitFor } from "@testing-library/react"; // had to added to get 'queryByText' right - otherwise it couldn't read the data



describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} />);
    })

    test('NumberOfEvents component contains an element with role of textbox', () => {
        waitFor(() => expect(NumberOfEventsComponent.getByRole('textbox')).toBeInTheDocument());
    });


    test('default value of input field is 32', () => {
        waitFor(() => expect(NumberOfEventsComponent.getByRole('textbox').value).toBe('32'));
    });

    // FireEvent is something happening, like a user click
    test('value of input field changes when user types in it', async () => {
        fireEvent.change(NumberOfEventsComponent.getByRole('textbox'), { target: { value: '20' } });
        waitFor(() => expect(NumberOfEventsComponent.getByRole('textbox').value).toBe('20'));
    });

});



// test('updates number of events when user types', async () => {
//     const input = NumberOfEventsComponent.queryByRole('textbox');
//     await userEvent.type(input, '{backspace}{backspace}10');
//     expect(input).toHaveValue('10');
// });




