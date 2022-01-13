import operate from '../logic/operate';

it('throws error if trying to divide by 0', () => {
  const result = operate(6, 0, '÷');
  expect(result).toBe("Can't divide by 0.");
});

it('return the multiplication of two number if parameter is "x"', () => {
  const result = operate(6, 2, 'x');
  expect(result).toBe('12');
});

it('return the remainder of two number if parameter is "%"', () => {
  const result = operate(6, 2, '%');
  expect(result).toBe('0');
});

it('throws error if the parameter is 0 for remainder operation', () => {
  const result = operate(6, 0, '%');
  expect(result).toBe("Can't find modulo as can't divide by 0.");
});

it('throws error if there is no valid operator', () => {
  const operation = '?';
  expect(() => operate(6, 8, '?')).toThrow(`Unknown operation '${operation}'`);
});
