import { Dialog } from '@headlessui/react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  data: {
    title: string
    description?: string
  }
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  data: { title, description },
  children,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-darkBlue-200 bg-opacity-30" />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transform shadow-xl rounded-lg">
            <div className="bg-gradient-to-r from-darkBlue-800 to-primaryOrange w-full opacity-90 p-6">
              <Dialog.Title as="h3" className="text-2xl font-bold leading-6">
                {title}
              </Dialog.Title>

              {description && (
                <div className="mt-4">
                  <Dialog.Description as="p">{description}</Dialog.Description>
                </div>
              )}

              {children && <div className="mt-4">{children}</div>}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Modal
