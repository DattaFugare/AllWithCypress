Feature: Login API Testing

  Scenario Outline: Valid and invalid login tests
    Given the API endpoint is "<url>"
    When I send a POST request with "<email>" and "<password>"
    Then the response code should be "<status_code>"
    And the response message should be "<message>"

  Examples:
    | url               | email                        | password    | status_code | message              |
    | /auth/login       | dattatrayfugare77@gmail.com  | dattasujay1 | 200         |Login Successfully   |
    