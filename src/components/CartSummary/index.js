// Write your code here
import Popup from 'reactjs-popup'
import CheckoutPopup from '../CheckoutPopup'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      const mapping = cartList.map(eachItem => {
        totalAmount = totalAmount + eachItem.price * eachItem.quantity
      })
      const numberOfItem = cartList.length
      return (
        <span className="summery-container">
          <h1>
            Order Total: Rs
            <span className="amount-span-element"> {totalAmount}</span>
          </h1>
          <p>{numberOfItem} items in cart</p>
          <Popup
            modal
            trigger={<button className="checkout-button">Checkout</button>}
          >
            <div className="popup-page">
              <CheckoutPopup items={numberOfItem} total={totalAmount} />
            </div>
          </Popup>
        </span>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummery
