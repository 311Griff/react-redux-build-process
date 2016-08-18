import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { addToNum, subtractFromNum } from './actions';
import { selectAdded, selectMultiplied, selectNum, selectTotal } from './selectors';

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

App.propTypes = {
    addToNum: React.PropTypes.func,
    addedNumber: React.PropTypes.number,
    multipliedNumber: React.PropTypes.number,
    subtractFromNum: React.PropTypes.func,
    testNumber: React.PropTypes.number,
    totalNumber: React.PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
    addedNumber: selectAdded(),
    multipliedNumber: selectMultiplied(),
    testNumber: selectNum(),
    totalNumber: selectTotal(),
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToNum,
        subtractFromNum,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
