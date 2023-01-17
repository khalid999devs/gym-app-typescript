import { ReactNode } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Selectedpage } from './types'

type Props = {
  children: ReactNode
  setSelectedPage(page: Selectedpage): void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition-all duration-300'
      onClick={() => setSelectedPage(Selectedpage.ContactUs)}
      href={`#${Selectedpage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
