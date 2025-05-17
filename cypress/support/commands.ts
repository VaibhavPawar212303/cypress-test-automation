/// <reference types="cypress" />

// Import aws-sdk so we can use it to query DynamoDB
import * as AWS from "aws-sdk";
// Adding our region & keys for the user created above in IAM
AWS.config.update({
  region: Cypress.env("REGION"),
  accessKeyId: Cypress.env("ACCESS_KEY_ID"),
  secretAccessKey: Cypress.env("SECRET_ACCESS_KEY"),
});
const dynamoDB = new AWS.DynamoDB.DocumentClient();
// Custom command creation
Cypress.Commands.add("getDynamoDBResultsUsingID", (tableName, cnpValue) => {
  const params = {
    TableName: tableName,
    ExpressionAttributeNames: {
      "#id": "id", // Mapping for "cnp" attribute (my primary key) - this is for security reasons
    },
    ExpressionAttributeValues: {
      ":cnpValue": cnpValue, // Mapping for "cnp" value
    },
    KeyConditionExpression: "#id = :cnpValue", // Search condition
  };

  return cy.wrap(
    new Promise((resolve, reject) => {
      dynamoDB.query(params, (err, data) => {
        // DynamoDB query method from AWS SDK
        if (err) {
          return reject(err);
        }
        resolve(data.Items); // Output query result
      });
    })
  );
});

Cypress.Commands.add("getDynamoDBResults", (tableName, cnpValue) => {
  const params = {
    TableName: tableName,
    ExpressionAttributeNames: {
      "#userid": "userid", // Mapping for "cnp" attribute (my primary key) - this is for security reasons
    },
    ExpressionAttributeValues: {
      ":cnpValue": cnpValue, // Mapping for "cnp" value
    },
    KeyConditionExpression: "#userid = :cnpValue", // Search condition
  };

  return cy.wrap(
    new Promise((resolve, reject) => {
      dynamoDB.query(params, (err, data) => {
        // DynamoDB query method from AWS SDK
        if (err) {
          return reject(err);
        }
        resolve(data.Items); // Output query result
      });
    })
  );
});

// Extending the Cypress namespace
declare global {
  namespace Cypress {
    interface Chainable {
      getDynamoDBResultsUsingID(tableName: string, cnpValue: string): Chainable<any>;
      getDynamoDBResults(tableName: string, cnpValue: string): Chainable<any>;
    }
  }
}
