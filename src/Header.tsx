import { HiSearch } from 'react-icons/hi'

const Header = () => {
  return (
    <header className="py-4">
      <div className="primary-container">
        <div className="flex flex-wrap gap-8 items-center">
          <p className="text-white text-xl font-bold w-full sm:w-auto">
            Creatory
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#671AE4] to-[#B75CFF]">
              Game
            </span>
          </p>

          <div className="flex flex-1 w-full sm:w-auto gap-4 items-center h-full rounded-lg bg-gradient-to-br from-darkBlue-900 to-transparent px-4">
            <HiSearch className="text-darkBlue-200" />
            <input
              className="py-4 border-none w-full focus:outline-none bg-transparent text-white placeholder:text-darkBlue-200 shadow-md"
              placeholder="Search items, games...."
            />
          </div>
          <button className="p-4 rounded-md bg-gradient-to-br from-[#671AE4] to-[#B75CFF] shadow-md w-full sm:w-auto">
            Create Character
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
