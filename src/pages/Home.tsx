import React from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-components';

const App: React.FC = () => {
    return (
        <AmplifyAuthenticator>
            <div>
                <h1>Bienvenido a Mi Aplicación</h1>
                <AmplifySignOut />
            </div>
        </AmplifyAuthenticator>
    );
};

export default App;