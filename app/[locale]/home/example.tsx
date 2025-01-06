import { buttonVariants } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ExampleBg from '@/assest/images/exampleBg.webp'
import PdfCarousel from './pdfCarousel'



export default function Example() {
  const t = useTranslations('homePage')

  return (
    <Drawer>
      <DrawerTrigger className="text-center relative">
        <Image src={ExampleBg} alt="example" className="w-11/12 m-auto" />
        <span
          className={buttonVariants({
            variant: 'default',
            className: 'absolute w-fit top-0 bottom-0 left-0 right-0 m-auto ',
          })}
        >
          {t('example')}
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <PdfCarousel/>
      </DrawerContent>
    </Drawer>
  )
}