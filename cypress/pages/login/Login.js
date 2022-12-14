class Login{
    username = '#userName'
    password = '#password'
    login = '#login'
    name = '#name'//invalid username & pass

    submitLogin(username, password){
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.login).click()
    }
    
    getusername(){
        return cy.get(this.username)
    }

    getpassword(){
        return cy.get(this.password)
    }

    getlogin(){
        return cy.get(this.login)
    }

    getname(){
        return cy.get(this.name)
    }



}

class Register extends Login{
    newuser = '#newUser'
    firstname = '#firstname'
    lastname = '#lastname'
    register = '#register'
    submitRegister(username, password, firstName, lastName){
        cy.get(this.firstname).type(firstName)
        cy.get(this.lastname).type(lastName)
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
    }
}

export const LoginPage = new Login()
export const RegisterPage = new Register()