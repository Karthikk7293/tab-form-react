
const Profile = ({ data, setData }: any) => {
    const { name, age, phone, email } = data;

    const handleChange = (e) => {
        setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))

    }
    return (
        <>
            <div className="tab-body">
                <form action="">
                    <div>
                        <label htmlFor="">User Name : </label>
                        <input type="text" name="name" value={name} placeholder="User name..." onChange={((e) => handleChange(e))} required />
                    </div>
                    <div>
                        <label htmlFor="">age : </label>
                        <input type="number" min={0} max={150} value={age} name="age" placeholder="User Age..." required />
                    </div>
                    <div>
                        <label htmlFor="">Phone : </label>
                        <input type="number" maxLength={15} minLength={9} value={phone} name="phone" placeholder="User Age..." required />
                    </div>
                    <div>
                        <label htmlFor=""> Email : </label>
                        <input type="email" name="email" value={email} placeholder="User email..." required />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;
