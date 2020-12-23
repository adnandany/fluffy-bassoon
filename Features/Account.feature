
Feature: Test Accounts object
  I want to make sure all the fields appear on the account object


  Scenario: Verify all the fields are present in the Accounts object
    Given I open chrome browser
    And I am on the login page
    And I enter  username as "test.user@gmail.com.test"
    And I enter  password as "Pa55word"
    When I click the login button
    Then I should see the dashboard
    And I click the Accounts tab
    And I click the New button
    And I should see Account Name field
    And I should see Account Number field
    And I should see Type field with different option

  Scenario: Test invalid credentials
    Given I open chrome browser
    And I am on the login page
    And I enter  username as "test123.user@gmail.com.test"
    And I enter  password as "Pa55word"
    When I click the login button
    Then I should see the error message

  Scenario Outline: Test Invalid credentials using multiple  values
    Given I open chrome browser
    And I am on the login page
    And I enter  username as "<username>"
    And I enter  password as "<password>"
    When I click the login button
    Then I should see the error message

    Examples: 
      | username               | password       |
      | wrongemail1@gmail.com | Wrong PAssword |
      | wrongemail1@gmail.com | Wrong PAssword |
      | wrongemail1@gmail.com | Wrong PAssword |
   
    
 Scenario Outline: Create and save account
  Given I open chrome browser
    And I am on the login page
    And I enter  username as "<username>"
    And I enter  password as "<password>"
    When I click the login button
    And  I create an account    
      
      
      Examples:
       | username               | password       |
      | test.user@gmail.com.test | Pa55word |
      
      
      
