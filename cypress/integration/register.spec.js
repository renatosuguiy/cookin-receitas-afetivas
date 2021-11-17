import { cyan } from "@mui/material/colors"

context('Register', () => {
    it('Enters landing page, tries to go to the register page and register a new user', () => {
        cy.visit('http://localhost:3000');
        cy.viewport(1440, 900);

        cy.contains("Registre-se").click();

        cy.intercept("POST", "/register", {
            statusCode: 201,
            body: {
                name: "Ivan",
                email: "ivan@mail.com",
                id: 1,
            },
        }).as("new-user");

        cy.get("input[name=name]").type("Ivan");
        cy.get("input[name=email]").type("ivan@mail.com");
        cy.get("input[name=password]").type("aA@12345");
        cy.get("input[name=confirmPassword]").type("aA@12345");
        cy.get('select').select('Masculino')
        cy.get("button[type=submit]").click();

        cy.contains("Login")
    })
})