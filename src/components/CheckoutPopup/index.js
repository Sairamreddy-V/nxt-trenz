import {Component} from 'react'
import './index.css'

class CheckoutPopup extends Component {
  state = {isCashOnDelivery: false, isOrderPlaced: false}
  onPaymentMode = () => {
    this.setState({isCashOnDelivery: false})
  }
  cashonDelivery = () => {
    this.setState({isCashOnDelivery: true})
  }
  onConfirmOrder = () => {
    this.setState({isOrderPlaced: true})
  }
  render() {
    const {isCashOnDelivery, isOrderPlaced} = this.state
    return (
      <div className="popup-card">
        {isOrderPlaced ? (
          <p className="order-placedtext">
            Your order has been placed successfully
          </p>
        ) : (
          <>
            <div className="item-total-container">
              <h1 className="item">{this.props.items}items</h1>
              <p className="total">
                total Amount:
                <span className="total-span">{this.props.total}</span>
              </p>
            </div>
            <button className="button" onClick={this.onPaymentMode}>
              card
            </button>
            <button className="button" onClick={this.onPaymentMode}>
              Net Banking
            </button>
            <button className="button" onClick={this.onPaymentMode}>
              UPI
            </button>
            <button className="button" onClick={this.onPaymentMode}>
              Wallet
            </button>
            <button className="button" onClick={this.cashonDelivery}>
              Cash on Delivery
            </button>
            {!isCashOnDelivery && (
              <button
                className="confirm-order-button"
                onClick={this.onConfirmOrder}
              >
                Confirm Order
              </button>
            )}
          </>
        )}
      </div>
    )
  }
}

export default CheckoutPopup
