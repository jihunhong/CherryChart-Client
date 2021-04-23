describe('App E2E', () => {
  it('page init', () => {
    cy.intercept('/api/chart/*').as('chartAPI');
    cy.visit('http://localhost:3000');

    cy.wait('@chartAPI').then(interception => {
      assert.isNotNull(interception.response.body);
      expect(interception.response.body.length).to.equal(100);
    });
  });
});
