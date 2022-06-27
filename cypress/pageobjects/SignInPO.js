///<reference types = "cypress" />

const signInOption = 'button.MuiButton-outlined' 
const emailTextBox = 'input[name="email"]'
const signInWithPasswordButton = 'button[data-test="button-sign-in-email-and-password"]'
const passwordTextBox = 'input[name="password"]'
const signInButton = 'button[data-test="button-sign-in"]'


class SignInPO
{

    clickOnSignButton(){
        cy.get(signInOption).click()
    }

    performLogin(username, password){
        cy.get(signInWithPasswordButton).click()
        cy.get(emailTextBox).type(username)
        cy.get(passwordTextBox).type(password)
        cy.get(signInButton).click()
    }

}
export default SignInPO