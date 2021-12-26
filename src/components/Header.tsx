import { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import Button from 'components/base/Button'
import CreateCharacterModal from 'components/Modals/CreateCharacterModal'

import { useCharacterStore } from 'store/CharacterStore'

const Header = () => {
  const { query, setQuery } = useCharacterStore()
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <header className="py-4">
      <div className="primary-container">
        <div className="flex flex-wrap gap-8 items-center">
          <Link to="/">
            <p className="text-xl font-bold w-full sm:w-auto">
              Creatory
              <span className="backgroundGradientPrimary text-transparent bg-clip-text">
                Game
              </span>
            </p>
          </Link>

          <div className="flex flex-1 w-full sm:w-auto gap-4 items-center h-full rounded-lg bg-gradient-to-br from-darkBlue-900 to-transparent px-4">
            <HiSearch className="text-lightMuted" />
            <input
              className="py-4 border-none w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted shadow-md"
              placeholder="Search items, games...."
              value={query}
              onChange={(evt) => setQuery(evt.target.value)}
            />
          </div>
          <Button
            size="medium"
            className="w-full sm:w-auto"
            onClick={() => setIsOpenModal(true)}
          >
            Create Character
          </Button>
        </div>
      </div>

      <CreateCharacterModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </header>
  )
}

export default Header
