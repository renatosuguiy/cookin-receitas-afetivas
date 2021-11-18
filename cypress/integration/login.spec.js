context('Login', () => {
    it('Enters landing page, tries to go to the Login page and enter Recipe page', () => {
        cy.visit('http://localhost:3000');
        cy.viewport(1440, 900);

        cy.contains("Entrar").click();

        cy.intercept("POST", "/login", {
            statusCode: 201,
            body: {
                accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBjb21wZUBlbWFpbC5jb20iLCJpYXQiOjE2MzY0ODU2NTAsImV4cCI6MTYzNjQ4OTI1MCwic3ViIjoiMiJ9.bshw8mx1ZvLIaW56DOF34NsxFpsCXqBlJ9xy4_BakuQ",
                user: {
                    email: "ivan@mail.com",
                    name: "Ivan",
                    sexo: "m",
                    id: 5
                }
            },
        }).as("loginUser");

        cy.intercept("GET", "/recipes", {
            statusCode: 201,
            body: [{
                title: "Bolo de Maçã Vegano",
                ingredients: [
                    "1 maçã em cubos",
                    "1/2 xícara de suco de laranja",
                    "3/4 de xícara de óleo",
                    "1 xícara de açúcar",
                    "2 xícaras de farinha de trigo",
                    "1 colher de sopa de fermento em pó",
                    "Pitada de sal"
                ],
                instructions: [
                    "Bater no liquidificador a laranja, o suco, o óleo, o açúcar e o sal e reservar.",
                    "Misturar em uma tigela a farinha e o fermento em pó.",
                    "Incorporar a mistura do liquidificador na farinha com o fermento.",
                    "Colocar a massa em uma forma untada e enfarinhada.",
                    "Assar por 40 a 50 minutos em forno pré-aquecido a 180ºC."
                ],
                category: "doce",
                author: "Mark",
                favorites_users: [],
                myrecipesId: 1,
                userId: "1"
            }]
        }).as("recipes");

        cy.get("input[name=email]").type("ivan@mail.com");
        cy.get("input[name=password]").type("aA@12345");
        cy.get("button[type=submit]").click();

        cy.contains("Ivan");
        cy.contains("Receitas Públicas");
        cy.contains("Minhas Receitas");
        cy.contains("Receitas Favoritas");
    })
})