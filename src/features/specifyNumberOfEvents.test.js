

import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom/client';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import Event from '../components/Event';





const feature = loadFeature('./src/features/specifyNumberofEvents.feature');

defineFeature(feature, test => {

    test('default value of input field in the textbox is 32', ({ given, when, then }) => {


        let AppComponent;
        given('the user first opens the app', () => {
            AppComponent = render(<App />);
        });

        when('the user has not specified or filtered any number is the unfiltered list visible', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems).toBeInTheDocument();

            });
        });

        then(/^the default number of displayed events should be (\d+).$/, (arg0) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });



    test('User specifies the maximum events displayed per page', ({ given, when, then }) => {

        let AppComponent;

        given('the user has events displayed', () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems).toBeInTheDocument();
            });
        });

        when('value of input field changes when user types in it', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            waitFor(() => {
                expect(EventListDOM).toBeInTheDocument();
            });

        });

        then('the number of events displayed on page should update to the selected number.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            waitFor(() => {
                expect(allRenderedEventItems.length).toEqual(10);
            });

        });


    });

});