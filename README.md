# Anna's Sweet Crafts 🌟

A cute and colorful ecommerce website for handmade crafts and jewelry, designed especially for children!

## Features ✨

- **Beautiful Store Front**: Colorful, child-friendly design with gradients and animations
- **Product Catalog**: Browse handmade crafts and jewelry with cute descriptions
- **Individual Product Pages**: Detailed view of each item with quantity selection
- **Shopping Cart**: Add/remove items, update quantities, and view totals
- **Checkout Flow**: Complete order process (payment integration ready for future)
- **Responsive Design**: Works great on desktop, tablet, and mobile devices

## Products Included 🛍️

- Rainbow Friendship Bracelets
- Sparkly Unicorn Necklaces
- Pink Princess Hair Clips
- Butterfly Ring Sets
- Flower Crowns
- Gemstone Earrings
- Hand-painted Keychains
- Star Anklets

## Getting Started 🚀

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Your Browser**
   Navigate to `http://localhost:5173` to see the store!

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with cart
│   └── ProductCard.jsx # Product display card
├── context/            # React context for state management
│   └── CartContext.jsx # Shopping cart state management
├── data/               # Sample product data
│   └── products.js     # Product catalog
├── pages/              # Main application pages
│   ├── Home.jsx        # Store homepage
│   ├── ProductPage.jsx # Individual product details
│   ├── Cart.jsx        # Shopping cart
│   └── Checkout.jsx    # Order checkout
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and animations
```

## Customization 🎨

### Adding New Products
Edit `src/data/products.js` to add new items:

```javascript
{
  id: 9,
  name: "Your Product Name",
  price: 12.99,
  image: "https://your-image-url.com/image.jpg",
  description: "Cute description of your product!",
  category: "jewelry", // or "accessories"
  inStock: true,
  featured: false // true for featured products
}
```

### Styling
The app uses a custom CSS system with:
- Gradient backgrounds and buttons
- Cute animations (bounce, pulse)
- Child-friendly color palette
- Responsive grid layouts

### Adding Payment Integration
The checkout flow is ready for payment integration. You can add your preferred payment provider (Stripe, PayPal, etc.) in the `Checkout.jsx` component.

## Technologies Used 🛠️

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Cute icons
- **CSS3** - Custom styling with animations

## Future Enhancements 💡

- Payment integration (Stripe, PayPal)
- User accounts and order history
- Product reviews and ratings
- Inventory management
- Admin dashboard
- Email notifications
- Search and filtering
- Wishlist functionality

## Made with Love 💖

This store was created with love for Anna's Sweet Crafts handmade jewelry and accessories. Every detail is designed to bring joy and sparkle to little crafters and jewelry lovers!

---

**Happy Shopping! 🌈✨🦋**
