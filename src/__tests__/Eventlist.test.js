
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventList from '../components/EventList';
import { extractLocations, getEvents } from '../api';

import CitySearch from '../components/CitySearch';


describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        EventListComponent = render(<EventList />);
    })

    test('has an element with "list" role', () => {
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('renders correct number of events', async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={allEvents} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });


});
