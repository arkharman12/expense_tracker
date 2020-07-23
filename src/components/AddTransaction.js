import React, { useState, useContext } from 'react'

import { GlobalContext } from "../context/GlobalState";


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Description</label>
                <input type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    maxLength="25"
                    required 
                />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Enter amount (<span className="plus">+ income</span>, <span className="minus">- expense</span>)
                    </label>
                    <input 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="$"
                        min="-1000000" 
                        max="1000000"
                        required 
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
