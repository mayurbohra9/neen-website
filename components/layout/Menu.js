import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link></li>
                <li className="dropdown"><Link href="/about">About</Link></li>
                {/* <li className="dropdown"><Link href="/portfolio">Work</Link></li> */}
                <li className="dropdown"><Link href="/services">Services</Link>
                    <ul>
                        <li><Link href="/custom-research-&-consulting-service">Custom Research & Consulting</Link></li>
                        <li><Link href="/academic-&-writing-services-service">Academic & Writing Services</Link></li>
                        <li><Link href="/academic-&-writing-services-service">Data-driven Strategy & Reports</Link></li>
                        <li><Link href="/marketing-insights-&-evaluation-service">Marketing Insights & Evaluation</Link></li>
                        <li><Link href="/ui-ux-&-visual-ontent-service">UI/UX & Visual Content</Link></li>
                        <li><Link href="/patent-&-ip-solutions-service">Patent & IP Solutions</Link></li>
                        <li><Link href="/website-&-app-development-service">Website & App Development</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/blog">Blogs</Link>
                    {/* <ul>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul> */}
                </li> 
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </>
    )
}
