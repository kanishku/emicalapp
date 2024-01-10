import React, { useState } from 'react';
import './App.css';

const EmiCalculator = () => {
 const [loanAmount, setLoanAmount] = useState('');
 const [tenure, setTenure] = useState('');
 const [interestRate, setInterestRate] = useState('');
 const [emi, setEmi] = useState('');

 const calculateEmi = () => {
    const p = parseFloat(loanAmount);
    const n = parseFloat(tenure);
    const r = parseFloat(interestRate) / 12 / 100;
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    setEmi(emi.toFixed(2));
 };

 return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <form>
        <div className="input-field">
          <label htmlFor="loan-amount">Loan Amount:</label>
          <input
            type="number"
            id="loan-amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="tenure">Years:</label>
          <input
            type="number"
            id="tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="interest-rate">Interest Rate (%):</label>
          <input
            type="number"
            id="interest-rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateEmi}>
          Calculate
        </button>
      </form>
      {emi && <p>Your Monthly Loan EMI: ${emi}</p>}
    </div>
 );
};

export default EmiCalculator;