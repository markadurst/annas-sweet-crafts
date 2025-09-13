import React from 'react'
import ProductCard from '../components/ProductCard'
import { products, getFeaturedProducts } from '../data/products'
import { Star, Sparkles, Heart } from 'lucide-react'

const Home = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        {/* Hero Section with Large Logo */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '3rem 2rem',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '30px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, #ff9a9e, #fecfef)',
            borderRadius: '50%',
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, #a8e6cf, #88d8a3)',
            borderRadius: '50%',
            opacity: 0.3
          }} />
          
          {/* Large Logo */}
          <div style={{ marginBottom: '2rem' }}>
            <img 
              src="./images/logo.jpg" 
              alt="Anna's Sweet Crafts Logo" 
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '6px solid #ff6b9d',
                boxShadow: '0 8px 30px rgba(255, 107, 157, 0.4)',
                marginBottom: '1rem',
                animation: 'pulse 3s infinite'
              }}
            />
          </div>

          {/* Store Name and Description */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Star className="bounce" size={40} style={{ color: '#ff6b9d' }} />
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ff6b9d, #9b59b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Anna's Sweet Crafts
            </h1>
            <Heart className="pulse" size={40} style={{ color: '#ff6b9d' }} />
          </div>
          
          <p style={{
            fontSize: '1.3rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Discover magical handmade crafts and jewelry made with love! 
            Each piece is carefully crafted to bring joy and sparkle to your day. ✨
          </p>
        </div>

        {/* Featured Products */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <Sparkles size={32} style={{ color: '#ff6b9d' }} />
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#333',
              margin: 0
            }}>
              Featured Products
            </h2>
            <Sparkles size={32} style={{ color: '#ff6b9d' }} />
          </div>
          
          <div className="grid grid-3">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            All Products
          </h2>
          
          <div className="grid grid-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Fun Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '1rem'
          }}>
            Made with 💖 by Anna for all the little crafters and jewelry lovers!
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '2rem' }}>🌈</span>
            <span style={{ fontSize: '2rem' }}>✨</span>
            <span style={{ fontSize: '2rem' }}>🦋</span>
            <span style={{ fontSize: '2rem' }}>🎀</span>
            <span style={{ fontSize: '2rem' }}>💎</span>
            <span style={{ fontSize: '2rem' }}>🌟</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
