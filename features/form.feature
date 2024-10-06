Feature: OneCompiler Form

    @form
    Scenario: To fill the form
        When I click on run button
        Then I enter name as 'Shubham'
        And I enter email as 'a@b.com'
        Then I enter password as '12345678'
        And I enter confirm password as '12345678'
        Then I enter DOB as '08031994'
        And I select Gender as 'Male'
        Then I select Country as 'USA'
        And I click on music checkbox
        Then I click on sports checkbox
        And I click on reading checkbox
        Then I click on terms & conditions checkbox
        And I click on submit button
