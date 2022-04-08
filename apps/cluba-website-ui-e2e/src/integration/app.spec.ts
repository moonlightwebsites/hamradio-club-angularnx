import { getGreeting, getTitle } from '../support/app.po';

describe('cluba-website-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    //cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(' Welcome to : Ham Radio Club AAAB 👋 ');
  });
});


//TODO: not working yet
describe('links-test', () => {
  it('should find these links', () => {
    cy.request({url:'http://www.cnn.com', followRedirect: false}).its('status').should('eq', 301)
    .and
    cy.request({url:'http://www.junksdsdsf.com', followRedirect: false}).its('status').should('eq', 200);

    //cy.request({url:'http://www.cnn.com', followRedirect: false}).its('status').should('be.oneOf', [200, 301]);
    //cy.request({url:'http://www.junksdsdsf.com', followRedirect: false}).its('status').should('be.oneOf', [200, 301]);
  })
});

describe('link-learn.arrl.org', () => {
  beforeEach(() => cy.visit('http://learn.arrl.org'));
  it('should find the page', () => {
    getTitle().contains('ARRL Learning Center');
  })
});

/* describe('link-satern.org', () => {
  beforeEach(() => cy.visit('http://www.satern.org'));
  it('should find the page', () => {
    getTitle().contains('Satern');
  })
}); */