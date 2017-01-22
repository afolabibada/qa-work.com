$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("forgotpsw.feature");
formatter.feature({
  "line": 1,
  "name": "Forgot Password Test",
  "description": "",
  "id": "forgot-password-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a user I want to reset password using forgot Password link",
  "description": "",
  "id": "forgot-password-test;as-a-user-i-want-to-reset-password-using-forgot-password-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@forgotpsw"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click forgotten password link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see forgotten password message",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click continue message",
  "keyword": "And "
});
formatter.match({
  "location": "test_step.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 65285409623,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 4261763771,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 553603133,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_click_forgotten_password_link()"
});
formatter.result({
  "duration": 2035619936,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_see_forgotten_password_message()"
});
formatter.result({
  "duration": 534458148,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_enter_email_address()"
});
formatter.result({
  "duration": 1611241853,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_click_continue_message()"
});
formatter.result({
  "duration": 2582904196,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login User Test",
  "description": "",
  "id": "login-user-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "As a Registered user I want to Login successfully",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003cemail\u003e\" details",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cpassw\u003e\" details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the brower",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 18,
      "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;;1"
    },
    {
      "cells": [
        "maxtest964@gmail.com",
        "passwoo123"
      ],
      "line": 19,
      "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "test_step.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 25318271757,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 551010604,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 2006159758,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a Registered user I want to Login successfully",
  "description": "",
  "id": "login-user-test;as-a-registered-user-i-want-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \"maxtest964@gmail.com\" details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cpassw\u003e\" details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the brower",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "test_step.i_click_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "test_step.i_log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register NewUser Test",
  "description": "",
  "id": "register-newuser-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a new user I want to register successfully",
  "description": "",
  "id": "register-newuser-test;as-a-new-user-i-want-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on My Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a welcome message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter all the user data in the registration form",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click the continue button in the Register form",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "my account is created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "test_step.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 24255798543,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_click_on_My_Account_Link()"
});
formatter.result({
  "duration": 5033182415,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_see_a_welcome_message()"
});
formatter.result({
  "duration": 184608460,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_enter_all_the_user_data_in_the_registration_form()"
});
formatter.result({
  "duration": 28619162127,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_click_the_continue_button_in_the_Register_form()"
});
formatter.result({
  "duration": 2431103464,
  "status": "passed"
});
formatter.match({
  "location": "test_step.my_account_is_created()"
});
formatter.result({
  "duration": 200136427,
  "status": "passed"
});
formatter.match({
  "location": "test_step.i_log_out()"
});
formatter.result({
  "duration": 1350229509,
  "status": "passed"
});
});