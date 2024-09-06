import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let Response;
let url;

Given('the API endpoint is url {string}',(endpoint)=>{


     url="https://reqres.in/api/"+endpoint;



})
When('I send a  request {string}',(method)=>{
   

    

        cy.api(method,url).then((res)=>{

            Response=res  ;
        })
})

Then('the response code should be {int}',(status_code)=>{

    
    expect(Response.status).to.eq(status_code);



});
When('I send a body with request {string}',(method)=>{

    cy.api(method,url,{
        name: "Dattatray",
        job: "QA ",
      } 
  ).then((res)=>{

        Response=res  

    })
  

})


