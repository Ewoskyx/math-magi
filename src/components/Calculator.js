/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';

export default class calculator extends Component {
  render() {
    return (
      <div className="mainwrapper<button>">
        <div className="calcbody">
          <div className="display"><span className="result">0</span></div>
          <div className="keypad">
            <ul className="numbers">
              <li><button type="submit">AC</button></li>
              <li><button type="submit">+/-</button></li>
              <li><button type="submit">%</button></li>
              <li><button type="submit">7</button></li>
              <li><button type="submit">8</button></li>
              <li><button type="submit">9</button></li>
              <li><button type="submit">4</button></li>
              <li><button type="submit">5</button></li>
              <li><button type="submit">6</button></li>
              <li><button type="submit">1</button></li>
              <li><button type="submit">2</button></li>
              <li><button type="submit">3</button></li>
              <li className="lizero"><button type="submit">0</button></li>
              <li><button type="submit">.</button></li>
            </ul>
            <ul className="aritmetic">
              <li><button type="submit">÷</button></li>
              <li><button type="submit">x</button></li>
              <li><button type="submit">-</button></li>
              <li><button type="submit">+</button></li>
              <li><button type="submit">=</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
