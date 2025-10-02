import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShoppingCart, Heart, Star, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedDesign, setSelectedDesign] = useState('')
  
  const product = getProductById(id)

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Product not found!</h2>
        <button className="btn" onClick={() => navigate('/')}>
          Go Back Home
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      const productToAdd = {
        ...product,
        selectedDesign: selectedDesign || null
      }
      addToCart(productToAdd)
    }
    setQuantity(1)
    setSelectedDesign('')
  }

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        {/* Back Button */}
        <button
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
          {/* Product Image */}
          <div>
            <div style={{
              width: '100%',
              height: '400px',
              background: `url(${product.image}) center/cover`,
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              {product.featured && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(45deg, #ff6b9d, #ff8fab)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '15px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Star size={16} />
                  Featured
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="card" style={{ height: 'fit-content' }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {product.name}
              </h1>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#ff6b9d'
                }}>
                  ${product.price}
                </span>
                <span style={{
                  background: '#2ecc71',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  ✓ In Stock
                </span>
              </div>

              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: '#333'
                }}>
                  Quantity:
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      padding: '8px 12px',
                      fontSize: '1.2rem',
                      minWidth: '40px'
                    }}
                  >
                    -
                  </button>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    minWidth: '30px',
                    textAlign: 'center'
                  }}>
                    {quantity}
                  </span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      padding: '8px 12px',
                      fontSize: '1.2rem',
                      minWidth: '40px'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Design Selector (for products with designs) */}
              {product.designs && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    Choose Design:
                  </label>
                  <select
                    value={selectedDesign}
                    onChange={(e) => setSelectedDesign(e.target.value)}
                    className="input"
                    style={{ width: '100%' }}
                  >
                    <option value="">Select a design...</option>
                    {product.designs.map((design, index) => (
                      <option key={index} value={design}>
                        {design}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                className="btn"
                onClick={handleAddToCart}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '1.2rem',
                  padding: '15px',
                  marginBottom: '1rem'
                }}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              {/* Product Info */}
              <div style={{
                background: 'rgba(255, 107, 157, 0.1)',
                padding: '1rem',
                borderRadius: '15px',
                marginTop: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: '#333'
                }}>
                  Product Details:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: '#666'
                }}>
                  <li>✨ Handmade with love</li>
                  <li>🌈 Safe for children</li>
                  <li>🎁 Perfect for gifts</li>
                  <li>💖 Made by Anna</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
