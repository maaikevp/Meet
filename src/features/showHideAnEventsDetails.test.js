import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom/client';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {

    // scenario 1

    test('An event element is collapsed by default.', ({ given, when, then }) => {

        let AppComponent;
        given('the user first opens the app', () => {
            AppComponent = render(<App />);
        });

        when('the user receives the full list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('all details of events are not visible by default.', async () => {

            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });


    // scenario 2

    test('User can expand an event to see its details', ({ given, when, then }) => {

        let AppComponent;
        given('the user gets a list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        when('the user clicks the Show-Details-button', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);
        });

        then('the details will be shown for that chosen event', () => {

            const EventDOM = AppComponent.container.firstChild;
            const eventDetails = EventDOM.querySelector('.details');
            waitFor(() => {
                expect(eventDetails).toBeInTheDocument();
            });

        });

    });



    // // scenario 3

    test('User can collapse an event to hide its details', ({ given, when, then }) => {

        let AppComponent;
        given('the user sees the details of an event', async () => {
            AppComponent = render(<App />);
            const EventDOM = AppComponent.container.firstChild;
            const eventDetails = EventDOM.querySelector('.details');
            waitFor(() => {
                expect(eventDetails).toBeInTheDocument();
            });
        });

        when('the user presses the Hide-Details-button', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];
            userEvent.click(button);

        });

        then('the details of that event will be hidden', () => {

            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            waitFor(() => {
                expect(eventDetails).not.toBeInTheDocument();
            });

        });

    });
});

