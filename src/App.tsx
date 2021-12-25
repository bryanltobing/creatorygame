import { useState } from 'react'

import nf1Image from 'assets/images/nf1.png'
import CreateCharacterModal from 'components/Modals/CreateCharacterModal'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <CreateCharacterModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />

      <section>
        <div className="primary-container py-12 border-b-2">
          <h1 className="text-center font-bold text-white text-4xl sm:text-5xl md:text-8xl w-full">
            GAME CHARACTER{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#671AE4] to-[#B75CFF]">
              COLLECTIONS
            </span>
          </h1>
        </div>
      </section>

      <section>
        <div className="primary-container py-12 space-y-4">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-darkBlue-200 text-center">
            <li className="w-full bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md p-2 rounded-md cursor-pointer">
              Art
            </li>
            <li className="w-full bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md p-2 rounded-md cursor-pointer">
              Sport
            </li>
            <li className="w-full bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md p-2 rounded-md cursor-pointer">
              Photography
            </li>
            <li className="w-full bg-gradient-to-br from-[#671AE4] to-[#B75CFF] shadow-md p-2 rounded-md cursor-pointer text-white">
              Pattern
            </li>
          </ul>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from(new Array(9)).map((_, index) => (
              <li
                key={index}
                className="p-4 rounded-md bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md space-y-3"
              >
                <img src={nf1Image} />
                <p className="text-darkBlue-200">@something</p>
                <h3>Yellow Pointing</h3>
                <button className="w-full bg-gradient-to-br from-[#671AE4] to-[#B75CFF] shadow-md p-2 rounded-md cursor-pointer text-white">
                  Place a bid
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="primary-container py-12">
          <div className="bg-gradient-to-br from-[#671AE4] to-[#B75CFF] rounded-md shadow-md p-12">
            <h2 className="text-3xl sm:text-4xl text-center font-bold leading-normal">
              Create your own <br />
              CHARACTER
            </h2>
            <div className="flex justify-center mt-4">
              <button
                className="p-4 rounded-md bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md"
                onClick={() => setIsOpenModal(true)}
              >
                Create Character
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="primary-container py-12">
          <p className="text-darkBlue-200 text-center">
            Created by{' '}
            <a
              target="_blank"
              rel="noreferrer nofollow"
              className="text-white hover:underline"
              href="https://twitter.com/bryantobing12"
            >
              Bryan Lumbantobing{' '}
            </a>
            | All Right Reserved!
          </p>
        </div>
      </section>
    </>
  )
}

export default App
