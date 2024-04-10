Feature: Specify Number of Events:
    Scenario: default value of input field in the textbox is 32
        Given the user first opens the app
        When the user has not specified or filtered any number is the unfiltered list visible
        Then  the default number of displayed events should be 32.
    Scenario: User specifies the maximum events displayed per page
        Given the user has events displayed
        When value of input field changes when user types in it
        Then the number of events displayed on page should update to the selected number.



