'use client'
import Link from "next/link"

export default function Clients(){
    return (
        <> 

        <section className="clients-style-three">
            <span className="title-text">Some of Our Clients</span>
            <div className="outer-container">
                <div className="dark-logo">
                    <ul className="clients-logo">
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-19.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-20.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-21.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-22.png" alt=""/></Link></li>
                    </ul>
                    <ul className="clients-logo pl_200 pr_200">
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-23.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-24.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-25.png" alt=""/></Link></li>
                    </ul>
                </div>
                <div className="light-logo">
                    <ul className="clients-logo">
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-26.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-27.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-28.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-29.png" alt=""/></Link></li>
                    </ul>
                    <ul className="clients-logo pl_200 pr_200">
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-30.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-31.png" alt=""/></Link></li>
                        <li><Link href="/index-5"><img src="assets/images/clients/clients-32.png" alt=""/></Link></li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}
