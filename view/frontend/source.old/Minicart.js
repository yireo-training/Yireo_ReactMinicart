import Dropdown from './Minicart/Dropdown';
import CustomerData from './CustomerData';
import React from 'react';

class Minicart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: true
        };
    }

    toggleDropdown(event) {
        event.preventDefault();
        const currentState = this.state.showDropdown;
        this.setState({showDropdown: !currentState});
        return false;
    }

    render() {
        var cart = CustomerData.getCartFromLocalStorage();
        var cartSummaryCount = cart.summary_count;
        var showDropdown = this.state.showDropdown;

        return (
            <div>
                <a className="action showcart" href="#" onClick={this.toggleDropdown.bind(this)}>
                    <span className="text">My Cart</span>
                    {cartSummaryCount > 0 &&
                    <span className="counter qty">
                        <span className="counter-number">{cartSummaryCount}</span>
                        <span className="counter-label">{cartSummaryCount} items</span>
                    </span>
                    }
                </a>

                {showDropdown &&
                <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front">
                    <div className="block block-minicart empty ui-dialog-content ui-widget-content"
                         style={{display: "block"}}>
                        <div id="minicart-content-wrapper">


                            <Dropdown />

                            <div className="block-content">
                                <button type="button" id="btn-minicart-close" className="action close"
                                        data-action="close" title="Close">
                                    <span>Close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Minicart;