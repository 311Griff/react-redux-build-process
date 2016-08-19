// Require core libraries
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

// Require component actions
import { addToNum, subtractFromNum } from './actions';

// Require selectors for props
import { selectAdded, selectMultiplied, selectNum, selectTotal } from './selectors';

// pure function - renders view from props. No direct access to app state is needed.
function App({
    addToNum, // eslint-disable-line no-shadow
    addedNumber,
    multipliedNumber,
    subtractFromNum, // eslint-disable-line no-shadow
    testNumber,
    totalNumber,
}) {
    return (
        <div className="row">
            <div className="columns small-12 text-center main-section">
                <hr />
                <img width={50} height={50} src="src/images/logo.png" alt="logo" />
                <hr />
                <div>
                    <button style={{ marginRight: '10px' }} className="button" onClick={subtractFromNum}>
                        Subtract
                    </button>

                    <button className="button" onClick={addToNum}>
                        Add
                    </button>
                </div>
                <h1>
                    Number: {testNumber}
                </h1>
                <p>
                   Plus 3: {addedNumber}
                </p>
                <p>
                    Times 3: {multipliedNumber}
                </p>
                <p>
                    Total of all numbers: {totalNumber}
                </p>
            </div>
        </div>
    );
}

// props validation - fail improper data coming into the component
App.propTypes = {
    addToNum: React.PropTypes.func,
    addedNumber: React.PropTypes.number,
    multipliedNumber: React.PropTypes.number,
    subtractFromNum: React.PropTypes.func,
    testNumber: React.PropTypes.number,
    totalNumber: React.PropTypes.number,
};

// uses selectors (reselect) to grab data required for the component from the redux's immutable store
const mapStateToProps = createStructuredSelector({
    addedNumber: selectAdded(),
    multipliedNumber: selectMultiplied(),
    testNumber: selectNum(),
    totalNumber: selectTotal(),
});

// inject actions (functions to update state) into the component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToNum,
        subtractFromNum,
    }, dispatch);
}

// connects the component to the redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
