import React, { createContext,  useState } from "react";
export const UserContext = createContext();

// user provider
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}



