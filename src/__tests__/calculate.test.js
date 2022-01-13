import calculate from '../logic/calculate';
import operate from '../logic/operate';

it('returns null all properties if the parameter is "AC"', () => {
  const testObj = operate(3, 3, '+');
  const result = calculate(testObj, 'AC');
  expect(result.total).toBe(null);
  expect(result.next).toBe(null);
});

it('returns the current object if next is 0 and parameter is 0', () => {
  const result = calculate(operate(0, 0, '+'), '0');
  expect(result).toEqual(result);
});
