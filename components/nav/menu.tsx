'use client'

import { links } from '@/database/links'
import { useLanguage } from '@/store/use-language'
import { useMenu } from '@/store/use-menu'
import Link from 'next/link'
import { Container } from '../container'
import LanguageSelector from './language-selector'
import { Button } from '../ui/button'
import { useNewsletter } from '@/store/use-newsletter'
import { motion } from 'framer-motion'

export const Menu = () => {
  const { language } = useLanguage()
  const { closeMenu } = useMenu()
  const { openNewsletter } = useNewsletter()

  return (
    <motion.div
      key='menu background'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 h-full w-full bg-black/60 backdrop-blur-sm'
    >
      <motion.div
        key='menu'
        initial={{ opacity: 0, scaleY: 0.5 }}
        animate={{
          opacity: 1,
          scaleY: 1,

          transition: {
            duration: 0.2,
            ease: [0.82, 0, 0.19, 0],
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        transition={{ delay: 0.1 }}
        className='fixed right-0 top-0 z-10 h-full w-full origin-top bg-[#9C6ACA] py-4 xl:h-[57%]'
      >
        <Container className='w-full'>
          <div className='flex w-full items-center justify-between'>
            <Link
              href='/#home'
              className='ffs-12 place-self-center text-2xl text-white md:text-3xl lg:text-4xl'
              onClick={() => closeMenu()}
            >
              rozmluv se
            </Link>

            <div className='flex items-center gap-2 pt-1 text-sm sm:gap-3 sm:text-base md:gap-6'>
              <Link
                href='https://linktr.ee/rozmluv.se'
                target='_blank'
                className='font-stabil text-white'
              >
                Aktuality
              </Link>
              <Link
                href='https://linktr.ee/rozmluv.se'
                target='_blank'
                className='font-stabil text-white'
              >
                Shop
              </Link>
              <LanguageSelector color='white' />
              <Button
                variant='ghost'
                onClick={() => closeMenu()}
                className='m-0 p-0 font-stabil text-white hover:bg-transparent hover:text-white sm:text-base'
              >
                {language === 'cz' && 'Zavřít'}
                {language === 'en' && 'Close'}
                {language === 'de' && '!text!'}
                {language === 'ua' && '!text!'}
              </Button>
            </div>
          </div>

          <div className='grid gap-10 pt-10 sm:pt-16 xl:grid-cols-2'>
            <ul className='grid gap-4 sm:grid-cols-2'>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : '_parent'}
                  onClick={() => closeMenu()}
                  className='ffs-12-hover text-3xl font-black text-white'
                >
                  {language === 'cz' && link.labelCz}
                  {language === 'en' && link.labelEn}
                  {language === 'de' && link.labelDe}
                  {language === 'ua' && link.labelUa}
                </Link>
              ))}
            </ul>

            <div className='flex gap-20 font-stabil text-base text-white'>
              <div className='flex flex-col gap-4'>
                <Link
                  href='https://www.facebook.com/rozmluv.se'
                  target='_blank'
                >
                  Facebook
                </Link>
                <Link
                  href='https://www.instagram.com/rozmluv.se/'
                  target='_blank'
                >
                  Instagram
                </Link>
                <Link
                  href='https://www.linkedin.com/company/rozmluv-se/?originalSubdomain=cz'
                  target='_blank'
                >
                  Linkedin
                </Link>
                <Link href='https://www.tiktok.com/@rozmluv.se' target='_blank'>
                  TikTok
                </Link>
              </div>
              <div className='flex flex-col gap-4'>
                <Link href='/blog' onClick={() => closeMenu()}>
                  Blog
                </Link>
                <Button
                  variant='ghost'
                  onClick={() => openNewsletter()}
                  className='m-0 h-auto w-auto p-0 text-base hover:bg-transparent hover:text-white'
                >
                  Newsletter
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </motion.div>
  )
}
