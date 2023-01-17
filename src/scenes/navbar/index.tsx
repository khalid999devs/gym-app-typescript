import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import { Selectedpage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import ActionButton from '@/shared/ActionButton'

type Props = {
  selectedPage: Selectedpage
  setSelectedPage(value: Selectedpage): void
  isTopOfPage: boolean
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
  const isAboveMediumScreens: boolean = useMediaQuery('(min-width:1060px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left */}
            <img src={Logo} alt='logo' />

            {/* right */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page='Home'
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page='Benefits'
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page='Our Classes'
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page='Contact Us'
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl '>
          {/* Close Icon */}
          <div className='flex justify-end p-12'>
            <button className='' onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>

          {/* menu items */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='Home'
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='Benifits'
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='Our Classes'
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='Contact Us'
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
