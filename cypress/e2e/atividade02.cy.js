/// <reference types="cypress" />

describe('Simulação de ações de um usuário no Cypress.io', () => {

    const BASE_URL = 'https://example.cypress.io';

    beforeEach(() => {
        cy.visit(BASE_URL);
    });

    it('1. Interage com formulário, preenchendo um campo e validando texto preenchido', () => {
        cy.get('.home-list').contains('Actions').click(); 
        cy.url().should('include', '/commands/actions');

        const emailInput = 'input[placeholder="Email"]';
        const testEmail = 'teste_automacao@example.com';

        cy.get(emailInput)
          .type(testEmail)
          .should('have.value', testEmail); 

        cy.get('.action-disabled')
          .type('Texto com delay', { delay: 100, force: true }) 
          .should('have.value', 'Texto com delay');
    });

    it('2. Interage com elemento, focando um campo e verificando se há alteração de estado', () => {
        cy.get('.home-list').contains('Actions').click();
        cy.url().should('include', '/commands/actions');

        cy.get('.action-focus')
          .focus() 
          .should('have.focus'); 
          
        cy.visit(BASE_URL);
        cy.get('.navbar-brand').click();
        cy.url().should('eq', BASE_URL + '/');
    });

    it('3. Valida a existência de elementos chave da interface (cabeçalho e menu)', () => {
        cy.get('h1')
          .should('be.visible')
          .and('have.text', 'Kitchen Sink'); 

        cy.get('.navbar') 
          .should('be.visible');

        cy.get('.home-list')
          .should('contain', 'Commands');
    });

    it('4. Manipula uma lista e tenta localizar um item específico dentro dela', () => {
        cy.get('.home-list').contains('Querying').click();
        cy.url().should('include', '/commands/querying');

        cy.get('.query-list')
          .should('exist'); 

        cy.get('.query-list')
          .within(() => {
            cy.contains('li', 'apples')
              .should('be.visible') 
              .and('have.text', 'apples');
          });
          
        cy.get('.query-list > li').eq(1)
            .should('have.text', 'oranges');
    });
});