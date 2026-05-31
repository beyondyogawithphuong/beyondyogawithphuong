import { Lora, Montserrat } from 'next/font/google'

export const lora = Lora({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
