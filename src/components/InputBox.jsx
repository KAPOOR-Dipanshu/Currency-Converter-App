import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  currencyDisable = false,
  amountDisable = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

/**
 * A component that renders an input box with a label and a select dropdown for currency options.
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.label - The label for the input box.
 * @param {number} props.amount - The value of the input box.
 * @param {function} props.onAmountChange - A callback function to handle changes in the input box value.
 * @param {function} props.onCurrencyChange - A callback function to handle changes in the selected currency.
 * @param {string[]} props.currencyOptions - An array of currency options to be displayed in the select dropdown.
 * @param {string} props.selectCurrency - The currently selected currency.
 * @param {boolean} props.currencyDisable - A boolean value to disable the select dropdown.
 * @param {boolean} props.amountDisable - A boolean value to disable the input box.
 * @param {string} props.className - A string of additional classes to be applied to the component.
 * @returns {JSX.Element} - A JSX element representing the InputBox component.
 */