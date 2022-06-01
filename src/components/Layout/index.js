import React from "react"
import FooterContainer from "./Footer"
import HeaderContainer from "./Header"

export default function Layout ({ children }) {
    return (
        <div className="rt-app">
            <header className="rt-header">
                <HeaderContainer />
            </header>
            <main className="rt-main">
                <div className="main-container">
                    { children }
                </div>
            </main>
            <footer className="rt-footer">
                <FooterContainer />
            </footer>
        </div>
    )
}