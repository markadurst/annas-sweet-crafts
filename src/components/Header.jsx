import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { getTotalItems } = useCart()

  return (
    <header style={{
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      padding: '1rem 0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ff6b9d'
            }}>
              <img 
                src="https://markadurst.github.io/annas-sweet-crafts/images/logo.jpg" 
                alt="Anna's Sweet Crafts Logo" 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #ff6b9d',
                  boxShadow: '0 4px 15px rgba(255, 107, 157, 0.3)'
                }}
              />
              <span>Anna's Sweet Crafts</span>
              <Heart className="pulse" size={24} style={{ color: '#ff6b9d' }} />
            </div>
          </Link>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: '#333',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ff6b9d'}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              Home
            </Link>
            <Link 
              to="/cart" 
              style={{ 
                textDecoration: 'none', 
                color: '#333',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ff6b9d'}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              <ShoppingCart size={20} />
              Cart
              {getTotalItems() > 0 && (
                <span style={{
                  background: '#ff6b9d',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '0.8rem',
                  minWidth: '20px',
                  textAlign: 'center'
                }}>
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
