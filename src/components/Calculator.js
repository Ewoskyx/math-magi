import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Nums from './Nums';
import Operator from './Operator';
import { keyboard, operators } from './Keyboard';

export default class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {},
    };
  }

  clickHandler = (e) => {
    const { calculatorObj } = this.state;
    const buttonName = e.target.innerText;
    const dataObj = calculate(calculatorObj, buttonName);
    this.setState({ calculatorObj: dataObj });
  }

  render() {
    const { calculatorObj: { total, next, operation } } = this.state;
    const screen = `${((total || '') + (operation || '') + (next || '')) || '0'}`;
    return (
      <>
        <div className="calcbody">
          <div className="display"><p className="result">{screen}</p></div>
          <div className="keypad">
            <ul className="numbers">
              {keyboard.map((item) => {
                const { id, buttonName } = item;
                return (
                  <Nums
                    key={id}
                    buttonName={buttonName}
                    clickHandler={this.clickHandler}
                  />
                );
              })}
            </ul>
            <ul className="aritmetic">
              {operators.map((item) => {
                const { id, buttonName } = item;
                return (
                  <Operator
                    key={id}
                    buttonName={buttonName}
                    clickHandler={this.clickHandler}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
