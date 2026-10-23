
import { createContext, useContext } from 'react';

export default function Context() {
    const user = "Zaid";

const UserContext = createContext();

function Component1() {
    return <Component2 />;
}

function Component2() {
    return <Component3 />;
}

function Component3() {
    return <Component4 />;
}

function Component4() {
    const user = useContext(UserContext);

    return <h2>Hello, {user}!</h2>;
}


    return (
        <UserContext.Provider value={user}>
            <Component1 />
        </UserContext.Provider>
    );
}
