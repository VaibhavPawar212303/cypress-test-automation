import registrationData from '../../fixtures/registrationData.json';
describe("Validate data in dynomodb", () => {
  it("should retrieve an item from DynamoDB", () => {
    registrationData.forEach(test => {
    cy.getDynamoDBResultsUsingID("cypress-demo-data2", test.id).then((items) => {
      // Log with the query result
      cy.log("DynamoDB Items:", JSON.stringify(items));
      // Assert that the user has correct data in DynamoDB
      expect(items[0].id).to.equal(test.id);
      expect(items[0].age).to.equal(test.age);
      expect(items[0].email).to.equal(test.email);
      expect(items[0].firstName).to.equal(test.firstName);
      expect(items[0].lastName).to.equal(test.lastName);
      expect(items[0].registrationDate).to.equal(test.registrationDate);
      expect(items[0].addresses[0].city).to.equal(test.addresses[0].city);
      expect(items[0].addresses[0].state).to.equal(test.addresses[0].state);
      expect(items[0].addresses[0].street).to.equal(test.addresses[0].street);
      expect(items[0].addresses[0].type).to.equal(test.addresses[0].type);
      expect(items[0].addresses[0].zipCode).to.equal(test.addresses[0].zipCode);
      expect(items[0].addresses[1].city).to.equal(test.addresses[1].city);
      expect(items[0].addresses[1].state).to.equal(test.addresses[1].state);
      expect(items[0].addresses[1].street).to.equal(test.addresses[1].street);
      expect(items[0].addresses[1].type).to.equal(test.addresses[1].type);
      expect(items[0].addresses[1].zipCode).to.equal(test.addresses[1].zipCode);
    });
    });
  });
});
