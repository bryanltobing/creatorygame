import Button from 'components/base/Button'
import Modal from 'components/base/Modal'
import RadioGroup from 'components/base/RadioGroup'

import { characterCategories, characterCodes } from 'data/character'

type CreateCharacterModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CreateCharacterModal = ({
  isOpen,
  onClose,
}: CreateCharacterModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      data={{ title: 'Create Game Character' }}
    >
      <form className="flex flex-col gap-4">
        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
          placeholder="Name"
        />

        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
          placeholder="Slug"
        />

        <RadioGroup
          options={characterCodes}
          label="Character Code"
          onChange={() => {}}
        />
        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
          placeholder="Power"
        />
        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted shadow-md"
          placeholder="Wealth"
        />

        <div>
          <div>Categories</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {characterCategories.map((char) => {
              return (
                <label className="flex items-center gap-2 mt-2">
                  <input className="h-4 w-4" type="checkbox" />
                  <p className="text-sm uppercase">{char}</p>
                </label>
              )
            })}
          </div>
        </div>

        <Button className="w-full mt-4">Create</Button>
      </form>
    </Modal>
  )
}

export default CreateCharacterModal
