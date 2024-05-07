// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillElementsInput', (field, value) => {
    cy.get(`iframe[name^="__privateStripeFrame"]`).then($iframe => {
        const $body = $iframe.contents().find('body');
        let stripeElementSelector = `input[name="${field}"]`;
        cy.wrap($body).find(stripeElementSelector).click().type(value, { delay: 10 });
    });
});

  Cypress.Commands.add('typeInStripeElement', (elementName, text) => {
    cy.get(`iframe[name^="__privateStripeFrame"]`).then(iframes => {
      const stripeIframe = [...iframes].find(iframe => iframe.contentWindow.document.querySelector(`input[name="${elementName}"]`));
      cy.wrap(stripeIframe.contentDocument.body).find(`input[name="${elementName}"]`).click().type(text);
    });
  });
 