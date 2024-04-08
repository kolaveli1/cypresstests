/// <reference types="cypress"/>

import Twilio from "./twilio";
import 'cypress-plugin-stripe-elements';

it('passes', () => {

    const twilio = new Twilio();
    const timewait = 300;


    cy.intercept('POST', 'https://test-dev.micromojo.app/login/verify').as('apiCall');
    cy.visit('https://mobile.micromojo.app/')

    cy.contains('Buy Lovegame').click()
    cy.wait(timewait)
    cy.get('[data-testid="rfs-btn"]').click()

    cy.wait(timewait)
    cy.get('.ReactFlagsSelect-module_filterBox__3m8EU > input').type("Denmark", {delay: 100})
    cy.get('.ReactFlagsSelect-module_label__27pw9').click()
    cy.wait(timewait)
    cy.get('input').type("51288115", {delay: 100})
    cy.wait(timewait)


    cy.get('.send-btn').click()
    cy.wait(10000)

    cy.get('body').then(($body) => {
        if ($body.find('.opacity-20').css('opacity') === '0.2') {
            cy.get('#name').type("Hello")
            cy.get('[placeholder="Brown"]').type("World", {delay: 100})
            cy.get('[name="email"]').type("hello@world.com", {delay: 100})
            cy.get('[name="confirmEmail"]').type("hello@world.com", {delay: 100})
            cy.get('.flex > input').click()
            cy.get('.footer-right-btn > div').click()
            cy.get('.footer-single-btn-light').click() 
            cy.wait(timewait)
            cy.get(':nth-child(1) > .flex > input').click()
            cy.wait(timewait)
            cy.get('.footer-right-btn').click()
            cy.wait(timewait)
            cy.get('#card-element').within(() => {
                cy.fillElementsInput('cardNumber', '4242424242424242');
            });
            cy.get('input[name="cardHolderName"]').type("Tester")
            cy.typeInStripeElement('exp-date', '1225');
            cy.typeInStripeElement('cvc', '123');
            cy.get('.footer-single-btn-dark').click();
            
        } else if ($body.find(':contains("Unlock Your Potential")').length) {
            cy.get('.footer-single-btn-light').click() 
            cy.wait(timewait)
            cy.get(':nth-child(1) > .flex > input').click()
            cy.wait(timewait)
            cy.get('.footer-right-btn').click()
            cy.wait(timewait)
            cy.get('#card-element').within(() => {
                cy.fillElementsInput('cardNumber', '4242424242424242');
            });
            cy.get('input[name="cardHolderName"]').type("Tester")
            cy.typeInStripeElement('exp-date', '1225');
            cy.typeInStripeElement('cvc', '123');
            cy.get('.footer-single-btn-dark').click();
        }
      })





});