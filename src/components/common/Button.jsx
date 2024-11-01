import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';

const SEO = () => (
  <Head>
    <title>Your Name - Cybersecurity Expert</title>
    <meta name="description" content="..." />
    <meta name="keywords" content="..." />
    {/* Open Graph tags */}
    {/* Twitter cards */}
  </Head>
);

const Button = ({ 
  href, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '',
  fullWidth = false 
}) => {
  const baseStyles = "group relative overflow-hidden rounded-lg px-8 py-4 transition-all duration-300";
  const widthStyles = fullWidth ? "w-full" : "w-auto";
  
  const variants = {
    primary: `
      bg-green-500 
      hover:bg-green-600 
      text-white
    `,
    secondary: `
      border-2 
      border-green-500 
      hover:text-white
      [&>span]:text-green-500
      [&>span]:group-hover:text-white
    `
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${widthStyles}
        ${variants[variant]}
        ${className}
      `}
    >
      <span className="relative z-10 font-medium">
        {children}
      </span>
      <div className={`
        absolute inset-0 
        ${variant === 'primary' ? 'bg-green-600' : 'bg-green-500'}
        transform 
        ${variant === 'primary' ? 'translate-y-full' : '-translate-y-full'}
        transition-transform duration-300 
        group-hover:translate-y-0
      `}></div>
    </a>
  );
};

// Add API routes for contact form
const submitForm = async (data) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    // Handle response
  } catch (error) {
    // Error handling
  }
};

// Add admin dashboard for content management
const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [messages, setMessages] = useState([]);

  return (
    <div className="admin-dashboard">
      {/* Dashboard content */}
    </div>
  );
};

// Add service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

export default Button; 