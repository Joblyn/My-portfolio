// https://docs.cypress.io/api/table-of-contents

describe("HOME view", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("Job Oaikhenah: Frontend Engineer");
  });
});
