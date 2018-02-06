import React from 'react'
import Link from 'gatsby-link'
import './styles.css'

const Header = () => (
  <div className="header-container">
    <div
      style={{
        margin: '0 auto',
        padding: '15px',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <h1 style={{ margin: 0 }}>
          Poetrik
        </h1>
        <h4 style={{ margin: 0 }}>
          Experiments in creative writing
        </h4>
      </Link>
    </div>
  </div>
)

export default Header
