import { useRef } from 'react';
import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useState } from 'react';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
        {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form action="" className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    type: 'number',
                    id: 'amount_' + props.id,
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>please enter a valid amount</p>}
        </form>
    )
};


export default MealItemForm;