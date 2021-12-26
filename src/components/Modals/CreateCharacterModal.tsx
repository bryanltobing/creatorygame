import Button from 'components/base/Button'
import Modal from 'components/base/Modal'

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
          placeholder="Power"
        />
        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted shadow-md"
          placeholder="Wealth"
        />
        <Button className="w-full mt-4">Create</Button>
      </form>
    </Modal>
  )
}

export default CreateCharacterModal
