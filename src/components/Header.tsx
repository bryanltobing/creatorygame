import { HiSearch } from 'react-icons/hi'

const Header = () => {
  return (
    <header className="py-4">
      <div className="primary-container">
        <div className="flex flex-wrap gap-8 items-center">
          <p className="text-xl font-bold w-full sm:w-auto">
            Creatory
            <span className="backgroundGradientPrimary text-transparent bg-clip-text">
              Game
            </span>
          </p>

          <div className="flex flex-1 w-full sm:w-auto gap-4 items-center h-full rounded-lg bg-gradient-to-br from-darkBlue-900 to-transparent px-4">
            <HiSearch className="text-lightMuted" />
            <input
              className="py-4 border-none w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted shadow-md"
              placeholder="Search items, games...."
            />
          </div>
          <button className="backgroundGradientPrimary p-4 rounded-md shadow-md w-full sm:w-auto">
            Create Character
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
