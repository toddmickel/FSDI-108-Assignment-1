import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 0,
  };
  render() {
    return (
      <div className="container-sm qp-page">
        <button
          onClick={this.decreaseQuantity}
          className="btn btn-primary btn-sm"
        >
          -
        </button>
        <label className="qp-label">{this.state.quantity}</label>
        <button
          onClick={this.increaseQuantity}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
      </div>
    );
  }

  increaseQuantity = () => {
    let quan = this.state.quantity;
    quan++;
    this.setState({
      quantity: quan,
    });
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 0) {
      let quan = this.state.quantity;
      quan--;
      this.setState({
        quantity: quan,
      });
    }
  };
}

export default QuantityPicker;
