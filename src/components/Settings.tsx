const Settings = () => {
    return (
        <div className="tab-body">
            <form action="">
                <div>
                    <label htmlFor="">Theme : </label>
                    <input type="radio" id="theme" value={"dark"} name="theme" placeholder="User theme..." required />
                    <input type="radio" id="theme" value={"white"} name="theme" placeholder="User theme..." required />
                </div>
                <div>
                    <label htmlFor="">age : </label>
                    <input type="number" min={0} max={150} name="age" placeholder="User Age..." required />
                </div>
                <div>
                    <label htmlFor=""> Message : </label>
                    <textarea name="email" rows={10} placeholder="User Message..." required />
                </div>
            </form>
        </div>
    )
};

export default Settings;
