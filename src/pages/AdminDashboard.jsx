import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Products', value: '1,234', icon: '📦' },
    { label: 'Total Orders', value: '3,456', icon: '📋' },
    { label: 'Total Customers', value: '5,678', icon: '👥' },
    { label: 'Total Revenue', value: '₹45.2L', icon: '💰' }
  ];

  const products = [
    { id: 1, image: '🖼️', name: 'Smartphone Pro', category: 'Electronics', price: 29999, stock: 45 },
    { id: 2, image: '💻', name: 'Gaming Laptop', category: 'Electronics', price: 89999, stock: 12 },
    { id: 3, image: '👕', name: 'Cotton T-Shirt', category: 'Fashion', price: 599, stock: 145 },
    { id: 4, image: '👟', name: 'Sports Shoes', category: 'Fashion', price: 4999, stock: 67 },
    { id: 5, image: '🛋️', name: 'Leather Sofa', category: 'Furniture', price: 35000, stock: 8 }
  ];

  const menuItems = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Products', icon: '📦' },
    { label: 'Orders', icon: '📋' },
    { label: 'Customers', icon: '👥' },
    { label: 'Logout', icon: '🚪' }
  ];

  const handleMenuClick = (item) => {
    if (item === 'Logout') {
      navigate('/');
      return;
    }
    setActiveMenu(item);
  };

  const handleEdit = (id) => {
    alert(`Edit product ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete product ${id}`);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>⚙️ Admin</h2>
        </div>
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`menu-item ${activeMenu === item.label ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.label)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-header">
          <h1>{activeMenu}</h1>
          <p>Manage your e-commerce store</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Management Table */}
        <div className="product-management">
          <div className="section-header">
            <h2>📦 Product Management</h2>
            <button className="add-product-btn">+ Add Product</button>
          </div>

          <div className="product-table">
            <div className="table-header">
              <div className="col-image">Image</div>
              <div className="col-name">Product Name</div>
              <div className="col-category">Category</div>
              <div className="col-price">Price</div>
              <div className="col-stock">Stock</div>
              <div className="col-actions">Actions</div>
            </div>

            <div className="table-body">
              {products.map((product) => (
                <div key={product.id} className="table-row">
                  <div className="col-image">{product.image}</div>
                  <div className="col-name">{product.name}</div>
                  <div className="col-category">{product.category}</div>
                  <div className="col-price">₹{product.price.toLocaleString()}</div>
                  <div className="col-stock">
                    <span className={`stock-badge ${product.stock > 20 ? 'in-stock' : 'low-stock'}`}>
                      {product.stock}
                    </span>
                  </div>
                  <div className="col-actions">
                    <button className="btn-edit" onClick={() => handleEdit(product.id)}>✏️ Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(product.id)}>🗑️ Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
