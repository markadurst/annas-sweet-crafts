import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card" style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}>
        {/* Product Image */}
        <div style={{
          width: '100%',
          height: '200px',
          background: `url(${product.image}) center/cover`,
          borderRadius: '15px',
          marginBottom: '1rem',
          position: 'relative'
        }}>
          {product.featured && (
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'linear-gradient(45deg, #ff6b9d, #ff8fab)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#333',
            lineHeight: '1.3'
          }}>
            {product.name}
          </h3>
          
          <p style={{
            color: '#666',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.description}
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <span style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: '#ff6b9d'
            }}>
              ${product.price}
            </span>
            
            <span style={{
              fontSize: '0.8rem',
              color: '#2ecc71',
              fontWeight: 'bold'
            }}>
              ✓ In Stock
            </span>
          </div>

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
              fontSize: '1rem'
            }}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
