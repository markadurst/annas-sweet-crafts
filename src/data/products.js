export const products = [
  {
    id: 1,
    name: "🌈 Rainbow Friendship Bracelet",
    price: 8.99,
    image: "./images/27b1568a3556a57c8aee9cc5f8fd63db.jpeg",
    description: "A beautiful handmade bracelet with rainbow colors that brings joy and friendship! Made with love and care.",
    category: "jewelry",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "✨ Sparkly Unicorn Necklace",
    price: 12.99,
    image: "./images/60d21d4d704534552c15d52d21c37688.jpeg",
    description: "Magical unicorn necklace that sparkles in the sunlight! Perfect for little princesses who love magic.",
    category: "jewelry",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "🎀 Pink Princess Hair Clip",
    price: 6.99,
    image: "./images/69b4948b669bb260f6820b0affe38935.jpeg",
    description: "Adorable pink hair clip with a cute bow! Makes any hairstyle look extra special and princess-like.",
    category: "accessories",
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "🦋 Butterfly Ring Set",
    price: 15.99,
    image: "./images/9114d6d753b7475c0e9d35379bad2439.jpeg",
    description: "Set of 3 beautiful butterfly rings in different colors! Each one is unique and handcrafted with love.",
    category: "jewelry",
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "🌺 Flower Crown",
    price: 18.99,
    image: "./images/a7b52c21632516a0a8613d332c2f2522.jpeg",
    description: "Beautiful flower crown made with colorful artificial flowers! Perfect for dress-up and pretend play.",
    category: "accessories",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "💎 Gemstone Earrings",
    price: 9.99,
    image: "./images/d586ee9394ed36fdd1d1ed55ba9f2eb4.jpeg",
    description: "Cute little gemstone earrings that are safe for sensitive ears! Available in multiple colors.",
    category: "jewelry",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "🎨 Hand-painted Keychain",
    price: 5.99,
    image: "./images/f55d3125b1b8bdce13e6b3650f86e4a0.jpeg",
    description: "Unique hand-painted keychain with cute designs! Each one is different and made with special care.",
    category: "accessories",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "🌟 Star Anklet",
    price: 7.99,
    image: "./images/fddec23c8038ae7d3cb6f4a901f1f14e.jpeg",
    description: "Delicate anklet with tiny stars that jingle softly! Perfect for summer days and dancing around.",
    category: "jewelry",
    inStock: true,
    featured: false
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}
