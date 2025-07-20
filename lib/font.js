import { Outfit } from 'next/font/google'

export const Outfit_title = Outfit({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--title-font",
    display: 'swap',
})
