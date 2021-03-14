import React, { Component } from 'react';
import Button from 'utils/Button';
import './QuantityBox.scss';

/**
 * QuantityBox
 */
class QuantityBox extends Component {
    updateHandler = (e, value) => {
        const newValue = value <= 0 ? 1 : value;

        const { onValueChange, maxValue, productId } = this.props;
        if (maxValue && newValue > maxValue) {
            return;
        }

        onValueChange(productId, newValue);
    };

    // eslint-disable-next-line require-jsdoc
    render() {
        const { value } = this.props;
        const steps = 1;

        return (
            <div className="QuantityBox">
                <div className="QuantityBoxWrapper">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <Button
                                name="decrement"
                                onClick={(e) => this.updateHandler(e, value - steps)}
                                type="button"
                                value={value > 1 ? -1 : 0}
                            >
                                -
                            </Button>
                        </div>
                        <input
                            className="form-control text-center"
                            disabled
                            min="0"
                            type="number"
                            value={value || 1}
                        />
                        <Button
                            name="increment"
                            onClick={(e) => this.updateHandler(e, value + steps)}
                            type="button"
                            value={1}
                        >
                            +
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuantityBox;
