import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Banner from "@/components/sections/home/Banner"
import About from "@/components/sections/home/About"
import Service from "@/components/sections/home/Service"
// import Portfolio from "@/components/sections/home/Portfolio"
import Testimonial from "@/components/sections/home/Testimonial"
// import Clients from "@/components/sections/home/Clients"
import Discuss from "@/components/sections/home/Discuss"
import OurProcess from "@/components/sections/home/Our_Process"

export const metadata = {
    title: 'Neen Inovations | One-stop solution for market & academic research',
    description: 'one-stop solution for market & academic research',
}

export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={5} footerStyle={5}>
                <Banner/>
                <About/>
                <Service/>
                <OurProcess/>
                {/* <Portfolio/> */}
                <Testimonial/>
                {/* <Clients/> */}
                <Discuss/>
            </Layout>
        </div>
    )
}