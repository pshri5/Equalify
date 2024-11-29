import { useState } from "react";
import { Header } from "../components/Header"
import { Card } from "../components/Card";
import { RupeeIcon } from "../icons/RupeeIcon";
import { GroupIcon } from "../icons/GroupIcon";
import { Footer } from "../components/Footer";
import { ExpenseTable } from "../components/ExpenseTable";

const recentExpenses = [
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Fooding",
        amount : 100,
        group : "New Friends",
        date : "28th Nov, 2024"
    }
];

export const Dashboard = () => {
    const [name,setName] = useState("Ankit Sharma");
    const [spending,setSpending] = useState(0);
    const [groupCount, setGroupCount] = useState(0);
    return <div>
        <Header name={name}/>
        <div className="px-10 md:px-16 lg:px-28">
            <div className="text-4xl font-bold my-10">Welcome {name}!</div>
            <div className="flex gap-6 lg:gap-10 flex-wrap my-10 justify-center lg:justify-start">
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Spendings</span>
                        <RupeeIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">{Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(spending)}</div>
                </Card>
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Groups</span>
                        <GroupIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">{groupCount}</div>
                </Card>
            </div>
            <div className="text-4xl font-bold mb-10">Recent Expenses</div>
            <div className="w-full">
                <ExpenseTable expenseData={recentExpenses} />
            </div>
        </div>
        <Footer />
    </div>
}