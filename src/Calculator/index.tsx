import React, { useState } from "react";
import Decimal from "decimal.js";

const Calculator: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState<string>("0");
    const [currentValue, setCurrentValue] = useState<string>("");

    const [operator, setOperator] = useState<string | null>(null);
    const [previousValue, setPreviousValue] = useState<number | null>(null);

    const handleNumberClick = (number: number) => {
        setCurrentValue(currentValue + number.toString());
        setInputValue(currentValue + number.toString());
    };

    const handleOperatorClick = (operator: string) => {
        if (result !== null) {
            setPreviousValue(result);
        } else {
            setPreviousValue(parseFloat(currentValue));
        }

        setResult(null);
        setOperator(operator);
        setCurrentValue("");
    };

    const handleEqualsClick = () => {
        let newResult: number | null = null;

        if (inputValue !== "") {
            const left = new Decimal(previousValue!);
            const right = new Decimal(currentValue);
            let expression: Decimal;

            switch (operator) {
                case "+":
                    expression = left.plus(right);
                    break;
                case "-":
                    expression = left.minus(right);
                    break;
                case "*":
                    expression = left.times(right);
                    break;
                case "/":
                    expression = left.dividedBy(right);
                    break;
                default:
                    expression = new Decimal(inputValue);
                    break;
            }

            newResult = expression.toNumber();
        } else {
            newResult = previousValue;
        }

        setResult(newResult);
        setInputValue(newResult !== null ? newResult.toString() : '')
    }

    const handleDeleteClick = () => {
        setCurrentValue(currentValue.slice(0, -1));
        setInputValue(inputValue.slice(0, -1));
    };

    const handleClearClick = () => {
        setResult(null);
        setInputValue("");
        setOperator(null);
        setPreviousValue(null);
        setCurrentValue("");
    };

    const handleDecimalClick = () => {
        if (!currentValue.includes(".")) {
            setCurrentValue(currentValue + ".");
            setInputValue(inputValue + ".");
        }
    };

    return (
        <div>
            <h1>Calc</h1>
            <div>
                {result !== null ? (
                    <input type="text" value={result} readOnly />
                ) : (
                    <input type="text" value={inputValue} readOnly />
                )}
            </div>
            <div>
                <button onClick={() => handleNumberClick(7)}>7</button>
                <button onClick={() => handleNumberClick(8)}>8</button>
                <button onClick={() => handleNumberClick(9)}>9</button>
                <button onClick={() => handleDeleteClick()}>Del</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick(4)}>4</button>
                <button onClick={() => handleNumberClick(5)}>5</button>
                <button onClick={() => handleNumberClick(6)}>6</button>
                <button onClick={() => handleOperatorClick("+")}>+</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick(1)}>1</button>
                <button onClick={() => handleNumberClick(2)}>2</button>
                <button onClick={() => handleNumberClick(3)}>3</button>
                <button onClick={() => handleOperatorClick("-")}>-</button>
            </div>
            <div>
                <button onClick={() => handleDecimalClick()}>.</button>
                <button onClick={() => handleNumberClick(0)}>0</button>
                <button onClick={() => handleOperatorClick("/")}>/</button>
                <button onClick={() => handleOperatorClick("*")}>x</button>
            </div>
            <div>
                <button onClick={handleClearClick}>Reset</button>
                <button onClick={() => handleEqualsClick()}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
