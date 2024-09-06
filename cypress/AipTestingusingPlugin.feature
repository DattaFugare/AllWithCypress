Feature: Api testing using plugin npm i cypress-plugin-api


Scenario Outline: Get users details ,add user and delete user
Given the API endpoint is url "<endpoint>"
When I send a  request "<method>"
Then the response code should be <status_code>
When I send a body with request "<method>"
 

Examples:
    | endpoint| method | status_code |
    | users/2 | GET  | 200  |
    |users    |POST  |   201|
    |users/2  |DELETE|204|

   
