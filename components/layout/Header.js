import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header5({ scroll, handleMobileMenu, isSidebar, handleSidebar }) {

    return (
        <>

        <header className={`main-header home home-5 header-style header-style-four ${scroll ? "fixed-header" : ""}`}>
            
            <div className="header-lower">
                <div className="outer-box">
                    <div className="logo-box">                        
                        <figure className="light-logo"><Link href="/"><img src="neen-black.png" alt=""/></Link></figure>
                        <figure className="dark-logo"><Link href="/"><img src="neen-white.png" alt=""/></Link></figure>
                    </div>
                    <div className="menu-area">
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                        </nav>
                    </div>
                    <div className="menu-right-content">
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="icon-31"></i></div>
                    </div>
                </div>
            </div>


            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="logo-box">
                             <figure className="light-logo"><Link href="/"><img src="/assets/images/neen-black.png" alt=""/></Link></figure>
                        <figure className="dark-logo"><Link href="/"><img src="/assets/images/neen-white.png" alt=""/></Link></figure>
                        </div>
                        <div className="menu-area">
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="icon-31"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
