import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link></li>
                <li className="dropdown"><Link href="/about">About</Link></li>
                {/* <li className="dropdown"><Link href="/portfolio">Work</Link></li> */}
                <li className="dropdown"><Link href="/service">Service</Link>
                    <ul>
                        <li><Link href="/service-1">Custom Research & Consulting</Link></li>
                        <li><Link href="/service-2">Academic & Writing Services</Link></li>
                        <li><Link href="/service-3">Data-driven Strategy & Reports</Link></li>
                        <li><Link href="/service-4">Marketing Insights & Evaluation</Link></li>
                        <li><Link href="/service-5">UI/UX & Visual Content</Link></li>
                        <li><Link href="/service-6">Patent & IP Solutions</Link></li>
                        <li><Link href="/service-7">Website & App Development</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/blog">Blog</Link>
                    {/* <ul>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul> */}
                </li> 
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </>
    )
}
