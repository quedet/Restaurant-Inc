import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function IndexPage () {
    const { mainFile, fileOne, fileTwo, Articles: { nodes: Menu } } = useStaticQuery(graphql`
        query {
            mainFile: file(relativePath: {eq: "gallery/victoria-shes-UC0HZdUitWY-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            fileOne: file(relativePath: {eq: "gallery/brooke-lark-HlNcigvUi4Q-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            fileTwo: file(relativePath: {eq: "gallery/chad-montano-MqT0asuoIcU-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            Articles: allContentfulMenu {
                nodes {
                    name
                    price
                    id
                    img {
                        gatsbyImageData
                        title
                        url
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Seo title={"Welcome"} />
            <div className="sections">
                <section className="section-item section-about">
                    <header className="section-item-header">
                        <div className="subtitle">Let us tell you</div>
                        <div className="title">OUR MISSION</div>
                        <div className="underline"></div>
                    </header>
                    <div className="section-item-content">
                        <p>Our mission is to provide happiness and joy through food to every customer who chooses to dine at Restaurant, while not exceeding, making the size of a pin hole on their pockets</p>
                    </div>
                </section>
                <section className="section-item section-gallery">
                    <div className="gallery-header">
                        <div>
                            ABOUT
                        </div>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-grid-item gallery-grid-item-main">
                            <header className="gallery-grid-item-header">
                                <GatsbyImage className="gallery-grid-item-header-media" image={mainFile.childImageSharp.gatsbyImageData} alt="main gallery image" />
                            </header>
                            <div className="gallery-grid-item-tags"><span>Awesome Frizes</span></div>
                        </div>
                        <div className="gallery-grid-item gallery-grid-item-one">
                            <header className="gallery-grid-item-header">
                                <GatsbyImage className="gallery-grid-item-header-media" image={fileOne.childImageSharp.gatsbyImageData} alt="Second gallery image" />
                            </header>
                            <div className="gallery-grid-item-tags"><span>Awesome Meat</span></div>
                        </div>
                        <div className="gallery-grid-item gallery-grid-item-two">
                            <header className="gallery-grid-item-header">
                                <GatsbyImage className="gallery-grid-item-header-media" image={fileTwo.childImageSharp.gatsbyImageData} alt="Third gallery image" />
                            </header>
                            <div className="gallery-grid-item-tags"><span>Awesome Pizza</span></div>
                        </div>
                    </div>
                </section>
                <section className="section-item">
                    <header className="section-item-header">
                        <div className="subtitle">Little taste</div>
                        <div className="title">FEATURED ITEMS</div>
                        <div className="underline"></div>
                    </header>
                    <div className="section-item-content section-item-content-menu">
                        { Menu && Menu.map(item => (
                            <article key={item.id} className="card-item">
                                <header className="card-item-header">
                                    <GatsbyImage className="card-item-header-media" image={item.img.gatsbyImageData} alt={item.img.title} />
                                </header>
                                <div className="card-item-content">
                                    <div className="card-item-content-top">
                                        <div role="heading" aria-level="3" className="card-item-content-name card-item-content-item">
                                            {item.name}
                                        </div>
                                        <div className="card-item-content-ingredient card-item-content-item">

                                        </div>
                                    </div>
                                    <div className="card-item-content-bottom">
                                        <div className="card-item-content-bottom-price card-item-footer-item">
                                            <p>${item.price}</p>
                                        </div>
                                        <div className="card-item-content-bottom-action card-item-footer-item">
                                            <button className="snipcart-add-item"
                                                data-item-id={item.id}
                                                data-item-name={item.name}
                                                data-item-price={item.price}
                                                data-item-image={item.img.url}
                                                data-item-url="https://restaurant-inc.netlify.app/"
                                            >ORDER</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    )
}