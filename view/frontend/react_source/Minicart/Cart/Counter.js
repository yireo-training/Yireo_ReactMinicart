import React from 'react';

class Counter extends React.Component {
    render() {
        var count = this.props.count;

        return (
            <div className="items-total">
                <span className="count">{count}</span> &nbsp;
                {count >= 2 &&
                    <span>Items in Cart</span>
                }
                {count === 1 &&
                    <span>Item in Cart</span>
                }
            </div>
        );
    }
}

export default Counter;