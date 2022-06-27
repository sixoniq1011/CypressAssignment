///<reference types = "cypress" />

import SignInPO from '../pageobjects/SignInPO'
import HomePO  from '../pageobjects/HomePO'
import TemplatePO from '../pageobjects/TemplatePO'

const signIn = new SignInPO()
const home = new HomePO()
const template = new TemplatePO()

describe('Admin Delete Functionality', ()=>{
    it('Verify Admin is able to Update a form from care plan template', ()=>{
        // Step 1 : Navigate to URl 
        cy.visit(Cypress.config().baseUrl)

        //Step 2 : Click on the SingIn button and Login with the admin account 
        signIn.clickOnSignButton()
        signIn.performLogin(Cypress.env('dev').email, Cypress.env('dev').password)

        //Step 3 : Navigate to care plan templates tab
        home.clickONCarePlantemplatesButton()

        //Step 4 : Click on any care plan template
        home.clickOnLastTemplate()

        //Step 5 : Change the status to In Review and click on Update and verify pop up message ‘Template updated - NEW REVISION CREATED’
        template.clickOnStatusDropdownAndSelectInReviewOption()
        template.clickOnupdateButton()
        template.verifyTostMessage("Template updated - existing revision updated")

        // Step 6 : Navigate to Forms and Fields Tab
        template.clickOnFromAndFieldTab()

        //Step 7 : Click on delete icon for forms assigned under Directly Assigned
        template.clickOnDeleteIcon()

        //Step 8 : Click on OK to delete selected form and verify the pop up message “Removed form assignment and updated template”
        template.verifyTostMessage("Removed form assignment and updated template")
        
        //Step 9 : Navigate to overview tab and click on Update and verify the pop up message “Template updated - existing revision updated”
        template.clickOnOverviewTab()
        template.clickOnupdateButton()
        template.verifyTostMessage("Template updated - existing revision updated")

    })
})