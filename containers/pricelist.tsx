'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionTitle } from '@/components/section-title'

interface Props {
  data: any
}

export const Pricelist = ({ data }: Props) => {
  const { language } = useLanguage()

  return (
    <section id='pricelist' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Ceník'
            titleEn='Pricelist'
            titleDe='Preisliste'
            titleUa='прайслист'
          />

          <div>
            <InfoText
              textCz='Online i offline lekce stojí stejně. Uvedené ceny jsou včetně DPH. Jak se přihlásíš, zaplatíš a vystornuješ, najdeš'
              textEn='Both online and offline lessons cost the same. The prices include VAT. To log in, to pay or to cancel your lesson, please click'
              textDe='Online- und Offline-Unterricht kosten das Gleiche. Die Preise enthalten die Mehrwertsteuer. Um herauszufinden, wie du dich anmeldest, bezahlst und stornierst, klicke'
              textUa='Вартість онлайн та офлайн занять однакова. Ціни вказані з ПДВ. Як зареєструватися, оплатити та забронювати заняття, можна дізнатися за посиланням'
              href='/payment'
              linkCz='tadydle ←'
              linkEn='here ←'
              linkDe='hier ←'
              linkUa='це ←'
            />

            <div className='mt-14 hidden grid-cols-2 gap-8 lg:grid'>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {data.slice(0, 2).map((item: any) => (
                  <AccordionItem
                    key={item.labelCz + item.row1Cz}
                    value={item.labelCz}
                    style={{ backgroundColor: `#${item.color}` }}
                    className='h-min rounded-2xl'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.labelCz}
                        {language === 'en' && item.labelEn}
                        {language === 'de' && item.labelDe}
                        {language === 'ua' && item.labelUa}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.row1Cz && (
                        <>
                          {language === 'cz' && item.row1Cz}
                          {language === 'en' && item.row1En}
                          {language === 'de' && item.row1De}
                          {language === 'ua' && item.row1Ua}
                        </>
                      )}
                      <br />
                      {item.row2Cz && (
                        <>
                          {language === 'cz' && item.row2Cz}
                          {language === 'en' && item.row2En}
                          {language === 'de' && item.row2De}
                          {language === 'ua' && item.row2Ua}
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {data.slice(2, 4).map((item: any) => (
                  <AccordionItem
                    key={item.labelCz + item.row1Cz}
                    value={item.labelCz}
                    style={{ backgroundColor: `#${item.color}` }}
                    className='h-min rounded-2xl'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.labelCz}
                        {language === 'en' && item.labelEn}
                        {language === 'de' && item.labelDe}
                        {language === 'ua' && item.labelUa}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.row1Cz && (
                        <>
                          {language === 'cz' && item.row1Cz}
                          {language === 'en' && item.row1En}
                          {language === 'de' && item.row1De}
                          {language === 'ua' && item.row1Ua}
                        </>
                      )}
                      <br />
                      {item.row2Cz && (
                        <>
                          {language === 'cz' && item.row2Cz}
                          {language === 'en' && item.row2En}
                          {language === 'de' && item.row2De}
                          {language === 'ua' && item.row2Ua}
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Cols>

        <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:hidden'>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {data.slice(0, 2).map((item: any) => (
              <AccordionItem
                key={item.labelCz + item.row1Cz}
                value={item.labelCz}
                style={{ backgroundColor: `#${item.color}` }}
                className='h-min rounded-2xl'
              >
                <AccordionTrigger className='text-2xl font-black'>
                  <span className='line-clamp-1 text-left'>
                    {language === 'cz' && item.labelCz}
                    {language === 'en' && item.labelEn}
                    {language === 'de' && item.labelDe}
                    {language === 'ua' && item.labelUa}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {item.row1Cz && (
                    <>
                      {language === 'cz' && item.row1Cz}
                      {language === 'en' && item.row1En}
                      {language === 'de' && item.row1De}
                      {language === 'ua' && item.row1Ua}
                    </>
                  )}
                  <br />
                  {item.row2Cz && (
                    <>
                      {language === 'cz' && item.row2Cz}
                      {language === 'en' && item.row2En}
                      {language === 'de' && item.row2De}
                      {language === 'ua' && item.row2Ua}
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {data.slice(2, 4).map((item: any) => (
              <AccordionItem
                key={item.labelCz + item.row1Cz}
                value={item.labelCz}
                style={{ backgroundColor: `#${item.color}` }}
                className='h-min rounded-2xl'
              >
                <AccordionTrigger className='text-2xl font-black'>
                  <span className='line-clamp-1 text-left'>
                    {language === 'cz' && item.labelCz}
                    {language === 'en' && item.labelEn}
                    {language === 'de' && item.labelDe}
                    {language === 'ua' && item.labelUa}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {item.row1Cz && (
                    <>
                      {language === 'cz' && item.row1Cz}
                      {language === 'en' && item.row1En}
                      {language === 'de' && item.row1De}
                      {language === 'ua' && item.row1Ua}
                    </>
                  )}
                  <br />
                  {item.row2Cz && (
                    <>
                      {language === 'cz' && item.row2Cz}
                      {language === 'en' && item.row2En}
                      {language === 'de' && item.row2De}
                      {language === 'ua' && item.row2Ua}
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
