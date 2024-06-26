import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout({ logoutParams: { returnTo: "https://blue1708.github.io/proyecto-crm" } })}>
            logout
        </button>
    )
}