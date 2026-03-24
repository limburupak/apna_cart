import React, { useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

  :root {
    --bg: #F2EDE8;
    --card: #FFFFFF;
    --navy: #16213E;
    --accent: #C9622F;
    --accent-light: #F5E6DC;
    --muted: #9A9A9A;
    --border: #E8E3DD;
    --green: #3A7D44;
    --red: #C9622F;
    --text: #1A1A1A;
    --shadow: 0 4px 24px rgba(0,0,0,0.07);
    --shadow-hover: 0 12px 40px rgba(0,0,0,0.13);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Outfit', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
  }

  /* NAVBAR */
  .navbar-custom {
    background: var(--navy);
    padding: 18px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 200;
    box-shadow: 0 2px 24px rgba(0,0,0,0.18);
  }
  .navbar-brand-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.7rem;
    color: #fff;
    letter-spacing: 0.5px;
  }
  .navbar-brand-text span { color: var(--accent); }
  .navbar-pill {
    background: var(--accent);
    color: #fff;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 20px;
    white-space: nowrap;
  }

  /* MAIN */
  .main-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px 120px;
  }

  /* ADD ITEM CARD */
  .add-item-wrapper {
    background: var(--card);
    border-radius: 20px;
    padding: 28px 32px;
    margin-bottom: 36px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    animation: fadeUp 0.4s ease both;
  }
  .add-item-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 18px;
  }
  .add-item-row {
    display: flex;
    gap: 14px;
    align-items: flex-end;
  }
  .field-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
  }
  .field-wrap label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--muted);
  }
  .field-wrap input {
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 12px 16px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.95rem;
    color: var(--text);
    background: #FAFAF8;
    outline: none;
    transition: border 0.2s, box-shadow 0.2s;
    width: 100%;
  }
  .field-wrap input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(201,98,47,0.12);
    background: #fff;
  }
  .btn-add-item {
    background: var(--navy);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 12px 28px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .btn-add-item:hover {
    background: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(201,98,47,0.3);
  }

  /* SECTION LABEL */
  .section-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
    margin-left: 8px;
  }

  /* PRODUCT CARD */
  .product-row {
    background: var(--card);
    border-radius: 18px;
    padding: 20px 24px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    transition: box-shadow 0.25s, transform 0.25s;
    animation: fadeUp 0.35s ease both;
  }
  .product-row:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  .product-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 13px;
    background: var(--navy);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    flex-shrink: 0;
  }
  .product-details { flex: 1; min-width: 0; }
  .product-title {
    font-weight: 600;
    font-size: 0.97rem;
    color: var(--text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-unit-price {
    font-size: 0.75rem;
    color: var(--muted);
    margin-top: 2px;
  }

  /* QTY CONTROLS */
  .qty-group {
    display: flex;
    align-items: center;
    background: #F5F3F0;
    border-radius: 11px;
    padding: 3px;
    border: 1px solid var(--border);
  }
  .btn-qty {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
  }
  .btn-qty-minus { background: #FFE5E0; color: var(--red); }
  .btn-qty-minus:hover { background: var(--red); color: #fff; }
  .btn-qty-plus { background: #DFF3E3; color: var(--green); }
  .btn-qty-plus:hover { background: var(--green); color: #fff; }
  .qty-num {
    min-width: 34px;
    text-align: center;
    font-weight: 700;
    font-size: 0.92rem;
    color: var(--navy);
  }

  /* SUBTOTAL */
  .product-subtotal { min-width: 88px; text-align: right; }
  .subtotal-label {
    font-size: 0.65rem;
    color: var(--muted);
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 1px;
  }
  .subtotal-amount {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--navy);
  }

  /* REMOVE */
  .btn-remove {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    border: 1.5px solid #FFCFCF;
    background: transparent;
    color: #D94F4F;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .btn-remove:hover {
    background: #D94F4F;
    border-color: #D94F4F;
    color: #fff;
    transform: scale(1.1);
  }

  /* EMPTY STATE */
  .empty-cart {
    text-align: center;
    padding: 56px 20px;
    color: var(--muted);
  }
  .empty-cart-icon { font-size: 3rem; margin-bottom: 12px; }

  /* FOOTER */
  .footer-custom {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: var(--navy);
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -4px 30px rgba(0,0,0,0.15);
    z-index: 200;
  }
  .btn-reset-footer {
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.22);
    color: rgba(255,255,255,0.65);
    border-radius: 10px;
    padding: 9px 22px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-reset-footer:hover { border-color: var(--accent); color: var(--accent); }
  .footer-total-label {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 1.8px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 2px;
    text-align: center;
  }
  .footer-total-amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
  }
  .btn-pay {
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 11px 30px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-pay:hover {
    background: #fff;
    color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(201,98,47,0.35);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */

  /* Tablet (max 768px) */
  @media (max-width: 768px) {
    .navbar-custom {
      padding: 14px 20px;
    }
    .navbar-brand-text {
      font-size: 1.35rem;
    }
    .main-content {
      padding: 24px 16px 110px;
    }
    .add-item-wrapper {
      padding: 20px 20px;
    }
    .add-item-row {
      flex-wrap: wrap;
    }
    .field-wrap {
      flex: 1 1 calc(50% - 7px);
      min-width: 120px;
    }
    .btn-add-item {
      width: 100%;
      padding: 13px;
    }
    .product-row {
      padding: 14px 16px;
      gap: 12px;
    }
    .product-subtotal {
      min-width: 70px;
    }
    .footer-custom {
      padding: 12px 20px;
    }
    .btn-reset-footer {
      padding: 8px 14px;
      font-size: 0.75rem;
    }
    .btn-pay {
      padding: 10px 18px;
      font-size: 0.8rem;
    }
    .footer-total-amount {
      font-size: 1.25rem;
    }
  }

  /* Mobile (max 480px) */
  @media (max-width: 480px) {
    .navbar-custom {
      padding: 12px 16px;
    }
    .navbar-brand-text {
      font-size: 1.15rem;
    }
    .navbar-pill {
      font-size: 0.65rem;
      padding: 4px 12px;
    }
    .main-content {
      padding: 16px 12px 130px;
    }
    .add-item-wrapper {
      padding: 16px;
      border-radius: 14px;
    }
    .add-item-row {
      flex-direction: column;
      gap: 12px;
    }
    .field-wrap {
      width: 100%;
      flex: unset;
    }
    .btn-add-item {
      width: 100%;
    }

    /* Product card stacks on mobile */
    .product-row {
      flex-wrap: wrap;
      padding: 14px;
      gap: 10px;
      border-radius: 14px;
    }
    .product-icon-box {
      width: 42px;
      height: 42px;
      font-size: 1.15rem;
    }
    .product-details {
      flex: 1;
    }
    .product-title {
      font-size: 0.9rem;
    }
    .qty-group {
      order: 3;
    }
    .product-subtotal {
      order: 4;
      min-width: unset;
      flex: 1;
      text-align: left;
    }
    .btn-remove {
      order: 5;
    }

    /* Footer compact on mobile */
    .footer-custom {
      padding: 10px 14px;
      gap: 8px;
    }
    .btn-reset-footer {
      padding: 7px 10px;
      font-size: 0.7rem;
    }
    .footer-total-amount {
      font-size: 1.1rem;
    }
    .btn-pay {
      padding: 9px 14px;
      font-size: 0.75rem;
      letter-spacing: 0.4px;
    }
  }
`;

const EMOJIS = ['📱', '💻', '🎧', '📷', '🖥️', '⌚', '🎮', '📺', '🔋', '🖨️'];

function Navbar({ count }) {
  return (
    <nav className="navbar-custom">
      <div className="navbar-brand-text">My<span>Shopping Cart</span></div>
      <div className="navbar-pill">{count} item{count !== 1 ? 's' : ''}</div>
    </nav>
  );
}

function AddItem({ addItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !price) return;
    addItem(name.trim(), Number(price));
    setName('');
    setPrice('');
  };

  return (
    <div className="add-item-wrapper">
      <div className="add-item-heading">Add New Product</div>
      <div className="add-item-row">
        <div className="field-wrap">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="e.g. Samsung Galaxy S24"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
        </div>
        <div className="field-wrap" style={{ maxWidth: 180 }}>
          <label>Price (₹)</label>
          <input
            type="number"
            placeholder="e.g. 49999"
            value={price}
            onChange={e => setPrice(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
        </div>
        <button className="btn-add-item" onClick={handleAdd}>+ Add</button>
      </div>
    </div>
  );
}

function Product({ product, index, incrementQuantity, decrementQuantity, removeProduct }) {
  return (
    <div className="product-row">
      <div className="product-icon-box">{EMOJIS[index % EMOJIS.length]}</div>
      <div className="product-details">
        <div className="product-title">{product.name}</div>
        <div className="product-unit-price">₹{product.price.toLocaleString('en-IN')} each</div>
      </div>
      <div className="qty-group">
        <button className="btn-qty btn-qty-minus" onClick={() => decrementQuantity(index)}>−</button>
        <div className="qty-num">{product.quantity}</div>
        <button className="btn-qty btn-qty-plus" onClick={() => incrementQuantity(index)}>+</button>
      </div>
      <div className="product-subtotal">
        <span className="subtotal-label">Subtotal</span>
        <span className="subtotal-amount">₹{(product.price * product.quantity).toLocaleString('en-IN')}</span>
      </div>
      <button className="btn-remove" onClick={() => removeProduct(index)} title="Remove">✕</button>
    </div>
  );
}

function Footer({ totalAmount, resetCart }) {
  return (
    <footer className="footer-custom">
      <button className="btn-reset-footer" onClick={resetCart}>Reset</button>
      <div>
        <span className="footer-total-label">Total Amount</span>
        <div className="footer-total-amount">₹{totalAmount.toLocaleString('en-IN')}</div>
      </div>
      <button className="btn-pay">Pay Now →</button>
    </footer>
  );
}

export default function App() {
  const initialProducts = [
    { price: 99999, name: "Iphone 13 Promax", quantity: 0 },
    { price: 9999, name: "Redmi Note 10S Max", quantity: 0 },
  ];

  const [productList, setProductList] = useState(initialProducts);

  const incrementQuantity = (index) => {
    const list = [...productList];
    list[index] = { ...list[index], quantity: list[index].quantity + 1 };
    setProductList(list);
  };

  const decrementQuantity = (index) => {
    const list = [...productList];
    const qty = list[index].quantity;
    list[index] = { ...list[index], quantity: qty > 0 ? qty - 1 : 0 };
    setProductList(list);
  };

  const removeProduct = (index) => {
    setProductList(productList.filter((_, i) => i !== index));
  };

  const addItem = (name, price) => {
    setProductList([...productList, { name, price, quantity: 0 }]);
  };

  const resetCart = () => {
    setProductList(initialProducts.map(p => ({ ...p, quantity: 0 })));
  };

  const totalAmount = productList.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <>
      <style>{styles}</style>
      <Navbar count={productList.length} />
      <main className="main-content">
        <AddItem addItem={addItem} />
        <div className="section-label">Your Cart</div>
        {productList.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p>Your cart is empty. Add some products above!</p>
          </div>
        ) : (
          productList.map((product, i) => (
            <Product
              key={i}
              product={product}
              index={i}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeProduct={removeProduct}
            />
          ))
        )}
      </main>
      <Footer totalAmount={totalAmount} resetCart={resetCart} />
    </>
  );
}