const statement = require('./index');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

test('adds 1 + 2 to equal 3', () => {
  let message = "Statement for BigCo" +
      "\n Hamlet: $650.00 (55 seats)" +
      "\n As You like it: $580.00 (35 seats)" +
      "\n Othello: $500.00 (40 seats)" +
      "\nAmount owed is $1,730.00" +
      "\nYou earned 47 credits\n";

  expect(statement(invoices[0], plays)).toBe(message);
});