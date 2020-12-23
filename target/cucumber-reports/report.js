$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/AccountTask.feature");
formatter.feature({
  "name": "Test Accounts object",
  "description": "  I want to make sure all the fields appear on the account object",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify All the objects in the drop down",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountTest.I_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.I_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter  username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.I_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter  password as \"Pa55word\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.I_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "AccountTest.I_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Accounts tab",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the New button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.I_click_the_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the type dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTaskdropDown.i_should_see_the_type_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify all the drop down feilds presented  in the type drop down",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTaskdropDown.i_verify_all_the_drop_down_feilds_presented_in_the_type_drop_down()"
});
formatter.result({
  "status": "passed"
});
});