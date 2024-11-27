import { useState } from "react";
import { Header } from "../components/Header"
import { Card } from "../components/Card";
import { RupeeIcon } from "../icons/RupeeIcon";
import { GroupIcon } from "../icons/GroupIcon";

export const Dashboard = () => {
    const [name,setName] = useState("Ankit Sharma");
    return <div>
        <Header />
        <div className="px-10 md:px-16 lg:px-28">
            <div className="text-4xl font-bold my-10">Welcome {name}!</div>
            <div className="flex gap-6 lg:gap-10 flex-wrap my-10 justify-center lg:justify-start">
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Spendings</span>
                        <RupeeIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">₹ 5,610.00</div>
                </Card>
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Groups</span>
                        <GroupIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">10</div>
                </Card>
            </div>
            <div className="text-4xl font-bold mb-10">Recent Expenses</div>
            <div className="w-full">
                <table className="table-auto border-collapse border rounded-lg w-full">
                    <thead className="text-xl">
                        <th className="rounded-tl-lg border py-2 bg-brand-950 text-brand-50 ">Description</th>
                        <th className="border py-2 bg-brand-950 text-brand-50">Amount</th>
                        <th className="rounded-tr-lg md:rounded-none border py-2 bg-brand-950 text-brand-50">Group</th>
                        <th className="hidden md:block rounded-tr-lg border py-2 bg-brand-950 text-brand-50">Date</th>
                    </thead>
                    <tbody className="text-center text-lg">
                        <tr>
                            <td className="border py-2">Food</td>
                            <td className="border py-2">₹ 500.00</td>
                            <td className="border py-2">Friends</td>
                            <td className="hidden md:block rounded border py-2">27th Nov, 2024</td>
                        </tr>
                        <tr>
                            <td className="border py-2">Food</td>
                            <td className="border py-2">₹ 500.00</td>
                            <td className="border py-2">Friends</td>
                            <td className="hidden md:block rounded border py-2">27th Nov, 2024</td>
                        </tr>
                        <tr>
                            <td className="border py-2">Food</td>
                            <td className="border py-2">₹ 500.00</td>
                            <td className="border py-2">Friends</td>
                            <td className="hidden md:block rounded border py-2">27th Nov, 2024</td>
                        </tr>
                        <tr>
                            <td className="border py-2">Food</td>
                            <td className="border py-2">₹ 500.00</td>
                            <td className="border py-2">Friends</td>
                            <td className="hidden md:block rounded border py-2">27th Nov, 2024</td>
                        </tr>
                        <tr>
                            <td className="border py-2">Food</td>
                            <td className="border py-2">₹ 500.00</td>
                            <td className="border py-2">Friends</td>
                            <td className="hidden md:block rounded border py-2">27th Nov, 2024</td>
                        </tr>
                    </tbody>
                    <tfoot className="text-center text-lg text-brand-50 font-bold">
                        <td className="rounded-bl-lg bg-brand-950 py-2">Total</td>
                        <td colSpan="3" className="rounded-br-lg bg-brand-950 py-2">₹ 500.00</td>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
}