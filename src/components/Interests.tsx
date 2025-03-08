
const Interests = () => {
    return (
        <>
            <div className="tab-body">
                <form action="">
                    <div>
                        <label htmlFor="">User Name : </label>
                        <input type="text" name="userName" placeholder="User name..." required />
                    </div>
                    <div>
                        <label htmlFor="">age : </label>
                        <input type="number" min={0} max={150} name="age" placeholder="User Age..." required />
                    </div>
                    <div>
                        <label htmlFor=""> Email : </label>
                        <input type="email" name="email" placeholder="User email..." required />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Interests;
