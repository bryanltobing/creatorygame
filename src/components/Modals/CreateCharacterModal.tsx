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
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-white placeholder:text-darkBlue-200"
          placeholder="Name"
        />
        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-white placeholder:text-darkBlue-200"
          placeholder="Power"
        />
        <input
          className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-white placeholder:text-darkBlue-200 shadow-md"
          placeholder="Wealth"
        />
        <button className="w-full bg-gradient-to-br from-[#671AE4] to-[#B75CFF] shadow-md p-2 rounded-md cursor-pointer text-white mt-4">
          Create
        </button>
      </form>
    </Modal>
  )
}

export default CreateCharacterModal
