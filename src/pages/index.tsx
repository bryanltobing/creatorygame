import { useState } from 'react'

import CreateCharacterModal from 'components/Modals/CreateCharacterModal'
import Button from 'components/base/Button'

import CharactersSection from 'components/Sections/CharactersSection'

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <CreateCharacterModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />

      <section>
        <div className="primary-container py-12 border-b-2">
          <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-8xl w-full">
            GAME CHARACTER{' '}
            <span className="backgroundGradientPrimary text-transparent bg-clip-text">
              COLLECTIONS
            </span>
          </h1>
        </div>
      </section>

      <CharactersSection />

      <section>
        <div className="primary-container py-12">
          <div className="backgroundGradientPrimary rounded-md shadow-md p-12">
            <h2 className="text-3xl sm:text-4xl text-center font-bold leading-normal">
              Create your own <br />
              CHARACTER
            </h2>
            <div className="flex justify-center mt-4">
              <Button
                variant="secondary"
                size="medium"
                onClick={() => setIsOpenModal(true)}
              >
                Create Character
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
