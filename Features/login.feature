
@tag
Feature: Test Login functionality
I want to make sure the login functionality is working

  @login
  Scenario: Vrify login functionality using valid  crexentials 
    Given i am on the login page 
    And I entered valid username 
    And I entered Valid password 
    When i click the login  button
    Then i should see  the dashboard
    

Scenario: Verify login functionality using invalid  credentials
Given i am on the login page 
And I entered the  invalid  username
And I entered  the  invalid password
Then I should see the error message




