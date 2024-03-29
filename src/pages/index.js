import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Header from '../components/header'
import styles from '../globals/style.css'

const IndexPage = () => (
  <div>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Dak Tengur
        </h1>
        <p>Just a quick go at building a React based portfolio</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
    <div className="CardGroup">
      <div className="Cards">
        <h2>Featured projects</h2>
        <Link to="../pages/portfolio/in-construction.js">
          <Card
            title="Volo"
            role="Product Designer"
            image={require('../assets/png/home/img-home-coming-soon.png')}/>
        </Link>
        <Link to="../pages/portfolio/salve-app.js">
          <Card
            title="Salve - App"
            role="UI/UX Designer"
            image={require('../assets/png/home/img-home-salve-app-reskin.png')}/>
        </Link>
        <Link to="../pages/portfolio/farmers-weekly.js">
          <Card
            title="Farmers Weekly"
            role="Product Designer"
            image={require('../assets/png/home/img-home-fwi.png')}/>
        </Link>
        <Link to="../pages/portfolio/salve.js">
          <Card
            title="Salve"
            role="UI/UX Designer"
            image={require('../assets/png/home/img-home-salve.png')}/>
        </Link>
        <Link to="../pages/portfolio/estore.js">
          <Card
            title="Cisco eStore"
            role="UI/UX Designer"
            image={require('../assets//png/home/img-home-estore.png')}/>
        </Link>
      </div>
    </div>
  </div>
)

export default IndexPage