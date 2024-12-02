import axios from "axios";
import { atom, selector } from "recoil";
const dotenv = require('dotenv');

const recentExpenseSelector = selector({
    key : 'expenseSelector',
    get : async() => {
        const response = await axios.get('/api/v1/users/expenses')
    }
})