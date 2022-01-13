import React from 'react';
import { render } from '@testing-library/react/';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

const renderer = require('react-test-renderer');

it('matches snapshot 1 of Calculator component', () => {
  const clickHandler = () => true;
  const buttonName = '5';
  const tree = renderer.create(<Calculator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot 2 of Calculator component', () => {
  const clickHandler = () => true;
  const buttonName = '9';
  const tree = renderer.create(<Calculator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the props of component correctly', () => {
  const clickHandler = () => true;
  const buttonName = 'AC';
  const { getByTestId } = render(<Calculator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />);
  expect(getByTestId('calc')).toHaveTextContent('AC');
});
