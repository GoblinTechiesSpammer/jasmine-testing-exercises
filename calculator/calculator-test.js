const UITest = {
  amount: 100000,
  years: 30,
  rate: 0.0265
};

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(UITest)).toEqual('402.96');
});


it('should return a result with 2 decimal places', function() {
  expect(Number.isInteger(parseFloat(calculateMonthlyPayment(UITest)))).toEqual(false);
});

