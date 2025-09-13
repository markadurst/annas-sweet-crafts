import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Heart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order processing
    setIsSubmitted(true)
    clearCart()
    
    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  if (items.length === 0 && !isSubmitted) {
    return (
      <div style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
              Your cart is empty! 🛒
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Add some items to your cart first!
            </p>
            <Link to="/" className="btn">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <CheckCircle size={80} style={{ color: '#2ecc71', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
              Order Placed Successfully! 🎉
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
              Thank you for your order! Anna will prepare your items with love. 💖
            </p>
            <div style={{
              background: 'rgba(255, 107, 157, 0.1)',
              padding: '2rem',
              borderRadius: '20px',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1rem' }}>
                <strong>What happens next?</strong>
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: '#666'
              }}>
                <li>✨ Anna will carefully prepare your items</li>
                <li>📦 Your order will be packaged with love</li>
                <li>🚚 Items will be shipped within 2-3 days</li>
                <li>📧 You'll receive a confirmation email</li>
              </ul>
            </div>
            <p style={{ fontSize: '1rem', color: '#666' }}>
              Redirecting you back to the store...
            </p>
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
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <button className="btn btn-secondary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <ArrowLeft size={18} />
              Back to Cart
            </button>
          </Link>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            margin: 0
          }}>
            Checkout 💳
          </h1>
        </div>

        <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
          {/* Checkout Form */}
          <div>
            <div className="card">
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Heart size={24} style={{ color: '#ff6b9d' }} />
                Shipping Information
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input"
                    style={{ width: '100%' }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                    style={{ width: '100%' }}
                    placeholder="Enter your email"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="input"
                    style={{ width: '100%' }}
                    placeholder="Enter your address"
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{
                      display: 'block',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: '#333'
                    }}>
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="input"
                      style={{ width: '100%' }}
                      placeholder="Enter your city"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{
                      display: 'block',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: '#333'
                    }}>
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="input"
                      style={{ width: '100%' }}
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 107, 157, 0.1)',
                  padding: '1rem',
                  borderRadius: '15px',
                  marginBottom: '2rem'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    💳 Payment will be processed securely at checkout
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '1.2rem',
                    padding: '15px'
                  }}
                >
                  <Star size={20} />
                  Place Order
                </button>
              </form>
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

              <div style={{ marginBottom: '1.5rem' }}>
                {items.map(item => (
                  <div key={item.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    <div>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        margin: 0,
                        color: '#333'
                      }}>
                        {item.name}
                      </p>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        margin: 0
                      }}>
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#ff6b9d'
                    }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

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
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#333'
              }}>
                <span>Total</span>
                <span style={{ color: '#ff6b9d' }}>
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
