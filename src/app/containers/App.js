// Require core libraries
import React from 'react';

// pure function - renders view from props
function App() {
    return (
        <div className="row">
            <div className="columns small-12 text-center main-section">
                <h1>Hello World!</h1>
                <img width={200} height={200} src="src/images/logo.png" alt="logo" />
            </div>
        </div>
    );
}

export default App;
