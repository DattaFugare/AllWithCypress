import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let brokenLinks 
let activeLinks
let totalLinks
Given('user on the Active web page',()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
})
When('use should be able to find  links',()=>{
     brokenLinks = 0
     activeLinks = 0
    cy.get('a').each(($link, index) => {
        cy.log($link)
        const href = $link.attr('href')
        if (href) {


            cy.request({ url: href, failOnStatusCode: false }).then((response) => {


                if (response.status >= 400) {

                    cy.log(`**** link  ${index + 1} is Broken Link *** ${href} `)
                    brokenLinks++
                }
                else {
                    cy.log(`*** link  ${index + 1} is Active Link ***`)
                    activeLinks++

                }

            })

        }

    }).then(($links) => {
         totalLinks = $links.length
         InActive=totalLinks-brokenLinks+activeLinks
        cy.log(`**** total links **** ${totalLinks}`)
        cy.log(`**** broken links **** ${brokenLinks}`)
        cy.log(`**** active links **** ${activeLinks}`)

        cy.log(`**** Inactive links **** -${InActive}`)

    })


})
Then('count the total nummber of broken links on the Active web page',()=>{
    cy.log(`**** total links **** ${totalLinks}`)
        cy.log(`**** broken links **** ${brokenLinks}`)
        cy.log(`**** active links **** ${activeLinks}`)

})