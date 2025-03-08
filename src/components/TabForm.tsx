import { useState } from "react"
import Profile from "./Profile"
import Settings from "./Settings"
import Interests from "./Interests"

export default function TabForm() {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            name: "Profile",
            Component: Profile
        },
        {
            name: "Interests",
            Component: Interests

        },
        {
            name: "Settings",
            Component: Settings
        }
    ]
    const [data, setData] = useState({
        email: "",
        name: "",
        age: 18,
        phone: 9087654631
    })
    const ActiveTabComponent = tabs[activeTab].Component

    const handleNext = () => {
        setActiveTab((prev) => prev + 1)

    }
    const handlePrev = () => {
        setActiveTab((prev) => prev - 1)
    }
    return (
        <div className="container">
            <div className="tab-container">
                {tabs.map(({ name }, index) => (
                    <div key={name}>
                        <button onClick={(() => setActiveTab(index))} className="tab-button" type="button">{name}</button>
                    </div>
                ))}
            </div>

            <div>
                <ActiveTabComponent data={data} setData={setData} />
                <div className="navigate-button">
                    <button type="button" onClick={() => handleNext()} >prev</button>
                    <button type="button" onClick={() => handlePrev()}  >next</button>
                </div>
            </div>
        </div>
    )
}