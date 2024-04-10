Feature: Show and hide events details

    Scenario: An event element is collapsed by default.
        Given the user first opens the app
        When the user receives the full list of events
        Then all details of events are not visible by default.
    Scenario: User can expand an event to see its details
        Given the user gets a list of events
        When the user clicks the Show-Details-button
        Then the details will be shown for that chosen event
    Scenario: User can collapse an event to hide its details
        Given the user sees the details of an event
        When the user presses the Hide-Details-button
        Then the details of that event will be hidden



