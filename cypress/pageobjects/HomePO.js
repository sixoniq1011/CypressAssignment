///<reference types = "cypress" />

const carePlanTemplatesButton = 'button[data-test="button-careplan-templates"]'
const lastTemplateOfPage = 'tbody tr:last-child'


class HomePO
{

    clickONCarePlantemplatesButton(){
        cy.get(carePlanTemplatesButton).click()
    }

    clickOnLastTemplate(){
        cy.get(lastTemplateOfPage).click()
    }
}
export default HomePO