import { Selectedpage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: Selectedpage
  setSelectedPage(value: Selectedpage): void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, '') as Selectedpage
  //treating like this in as

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
