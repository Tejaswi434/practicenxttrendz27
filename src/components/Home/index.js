// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <ul>
      <Header />
    </ul>

    <div className="main_container">
      <div className="small_one">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air Fashion is a term used
          interchangeably to describe the creation of clothing, footwear,
          accessories, cosmetics, and jewellery of different cultural aesthetics
          and their mix and match into outfits that depict distinctive ways of
          dressing (styles and trends) as signifiers of social status,
          self-expression, and group belonging. As a multifaceted term, fashion
          describes an industry, styles, aesthetics, and trends. The term
          originates from the Latin word 'Facere,' which means 'to make and
          describes the manufacturing, mixing, and wearing of outfits adorned
          with specific cultural aesthetics, patterns, motifs, shapes, and cuts,
          allowing people to showcase their group belonging, values, meanings,
          beliefs, and ways of life. Given the rise in mass production of
          commodities and clothing at lower prices and global reach, reducing fs
          environmental impact and improving sustainability has become an urgent
          issue among politicians, brands, and consumers.
        </p>
        <button type="button">Shop Now</button>
      </div>
      <div className="small_two">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
