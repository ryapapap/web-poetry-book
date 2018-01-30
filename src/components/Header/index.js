import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#80461B',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
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
