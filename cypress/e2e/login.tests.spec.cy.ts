describe("Validate connection with dynomodb", () => {
  it("should retrieve an item from DynamoDB", () => {
    cy.getDynamoDBResults("cypress-learning", "user-002").then((items) => {
      // Log with the query result
      cy.log("DynamoDB Items:", JSON.stringify(items));
      // Assert that the student has a specific name in DynamoDB
      expect(items[0].name).to.equal("Ganesh");
    });
  });
});
