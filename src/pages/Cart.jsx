import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()

  if (items.length === 0) {
    return (
      <div style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <ShoppingCart size={80} style={{ color: '#ff6b9d', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
              Your cart is empty! 🛒
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Add some cute crafts and jewelry to get started!
            </p>
            <Link to="/" className="btn">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="btn btn-secondary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <ArrowLeft size={18} />
              Continue Shopping
            </button>
          </Link>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            margin: 0
          }}>
            Shopping Cart 🛒
          </h1>
        </div>

        <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
          {/* Cart Items */}
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              Items ({getTotalItems()})
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map(item => (
                <div key={item.id} className="card" style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center'
                }}>
                  {/* Product Image */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `url(${item.image}) center/cover`,
                    borderRadius: '10px',
                    flexShrink: 0
                  }} />

                  {/* Product Info */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: '#333'
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#ff6b9d'
                    }}>
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <button
                      className="btn btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        padding: '6px 10px',
                        minWidth: '35px'
                      }}
                    >
                      <Minus size={16} />
                    </button>
                    <span style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      minWidth: '30px',
                      textAlign: 'center'
                    }}>
                      {item.quantity}
                    </span>
                    <button
                      className="btn btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        padding: '6px 10px',
                        minWidth: '35px'
                      }}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="btn"
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                      padding: '8px 12px',
                      minWidth: '40px'
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="card" style={{ position: 'sticky', top: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#333'
              }}>
                Order Summary
              </h2>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid #f0f0f0'
              }}>
                <span style={{ fontSize: '1.1rem', color: '#666' }}>
                  Items ({getTotalItems()})
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid #f0f0f0'
              }}>
                <span style={{ fontSize: '1.1rem', color: '#666' }}>
                  Shipping
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2ecc71' }}>
                  FREE! 🎉
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#333'
              }}>
                <span>Total</span>
                <span style={{ color: '#ff6b9d' }}>
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <Link to="/checkout" className="btn" style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '1.2rem',
                padding: '15px'
              }}>
                <ShoppingCart size={20} />
                Proceed to Checkout
              </Link>

              <p style={{
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#666',
                marginTop: '1rem'
              }}>
                💖 Made with love by Anna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
