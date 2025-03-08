import type React from "react";
import type { ProfileTypes } from "../types";

interface Props {
    data: ProfileTypes;
    setData: React.Dispatch<React.SetStateAction<ProfileTypes>>
}

const Profile = (props: Props) => {
    const { name, age, phone, email } = props.data;

    const handleChange = (value: string, item: string) => {

        props.setData((prev: ProfileTypes) => ({ ...prev, [item]: value }));
    };
    return (
        <>
            <div className="tab-body">
                <form action="">
                    <div>
                        <label htmlFor="">User Name : </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="User name..."
                            onChange={(e) => handleChange(e.target.value, "name")}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">age : </label>
                        <input
                            type="number"
                            min={0}
                            max={150}
                            value={age}
                            name="age"
                            placeholder="User Age..."
                            onChange={(e) => handleChange(e.target.value, "age")}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Phone : </label>
                        <input
                            type="number"
                            maxLength={15}
                            minLength={9}
                            value={phone}
                            name="phone"
                            placeholder="User Age..."
                            onChange={(e) => handleChange(e.target.value, "phone")}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor=""> Email : </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="User email..."
                            onChange={(e) => handleChange(e.target.value, "email")}
                            required
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;
