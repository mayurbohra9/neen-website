import "@/node_modules/react-modal-video/css/modal-video.css"
import Aos_Animation from "@/components/elements/AosAnimation"
import ToggleBodyClass from "@/components/elements/Togglebtn"
import "public/assets/css/bootstrap.css"
import "public/assets/css/color.css"
import "public/assets/css/aos.css"
import "public/assets/css/style.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode'
import {Outfit_title } from '@/lib/font'
export const metadata = {
    title: 'Neen Inovations | One-stop solution for market & academic research',
    description: 'one-stop solution for market & academic research',
}

export default function RootLayout({ children }) { 

    return (
        <html lang="en" className={`${Outfit_title.variable}`}>
            <body>
                <Aos_Animation/>
                <ToggleBodyClass/>
                {children}
            </body>
        </html>
    )
}
