///<reference types = "cypress" />

const toastMessage = '.MuiAlert-message'
const statusDropdown = '#mui-component-select-status'
const statusList = 'ul > li'
const updateButton = 'button[data-test="button-create-careplan"]'
const formAndFieldTab = 'button[data-test="new-careplan-template-forms-tab"]'
const overViewTab = '[data-test="new-careplan-template-overview-tab"]'
const directlyAssignedAddButton = '[data-test="directly-assigned-forms-table"] ~ div:nth-child(3) > button'
const formNameTextBox = '#formName-input'
const firstName = '[data-testid="MUIDataTableBodyRow-0"]'
const createButton = '[data-test="directly-assigned-submit-form"]'
const delteIcon = '[data-testid="DeleteIcon"]'


class TemplatePO
{

    clickOnStatusDropdownAndSelectInReviewOption(){
        cy.get(statusDropdown).click()
        cy.get(statusList).each(($el, index, $list)=>{
            if($el.text()=="In Review"){
                cy.wrap($el).click()
            }
        })
    }

    clickOnupdateButton(){
        cy.get(updateButton).click()
    }

    verifyTostMessage(message){
        cy.get(toastMessage).should('contain.text', message)
    }

    clickOnFromAndFieldTab(){
        cy.get(formAndFieldTab).click()
    }

    addDirectlyAssginedData(){
        cy.get(directlyAssignedAddButton).click()
        cy.get(formNameTextBox).click()
        cy.get(firstName).click()
        cy.get(createButton).click()
    }

    clickOnDeleteIcon(){
        cy.get(delteIcon).should('not.exist').then(()=>{
            this.addDirectlyAssginedData()
        })
        cy.get(delteIcon).click()
        cy.contains("OK").click()
    }

    clickOnOverviewTab(){
        cy.get(overViewTab).click()
    }


}
export default TemplatePO