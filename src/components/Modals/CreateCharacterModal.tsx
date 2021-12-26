import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router'
import slugify from 'slugify'

import Button from 'components/base/Button'
import Modal from 'components/base/Modal'
import RadioGroup from 'components/base/RadioGroup'

import { characterCategories, characterCodes } from 'data/character'
import { createCharacter } from 'services/character'
import useRequestState from 'hooks/useRequestState'

type CreateCharacterModalProps = {
  isOpen: boolean
  onClose: () => void
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  slug: Yup.string().required(),
  pictureUrl: Yup.string().url(),
  characterCode: Yup.number().required(),
  power: Yup.number().required().min(0).max(100),
  wealth: Yup.number().required().min(0),
  categories: Yup.array()
    .of(Yup.string())
    .test({
      message: 'Minimal one category required',
      test: (arr) => (arr ? (arr?.length < 1 ? false : true) : false),
    }),
})

const initialValues: Omit<Character, 'id'> = {
  name: '',
  slug: '',
  pictureUrl: '',
  characterCode: 1,
  power: 0,
  wealth: 0,
  categories: [],
}

const CreateCharacterModal = ({
  isOpen,
  onClose,
}: CreateCharacterModalProps) => {
  const navigate = useNavigate()

  const state = useRequestState()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      data={{ title: 'Create Game Character' }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          try {
            state.start()
            await createCharacter(values)
            onClose()
            navigate(`/character/${values.slug}`)
          } catch (err) {
            alert(err)
          } finally {
            state.end()
          }
        }}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values, touched, errors }) => {
          return (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {Object.values(errors).map((value, index) => {
                  return (
                    <p className="text-red-500" key={index}>
                      {value}
                    </p>
                  )
                })}
              </div>

              <Field
                className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
                placeholder="Name"
                name="name"
                required
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  if (!touched.slug) {
                    setFieldValue(
                      'slug',
                      slugify(evt.target.value, { lower: true })
                    )
                  }

                  setFieldValue('name', evt.target.value)
                }}
                value={values.name}
              />
              <Field
                className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
                placeholder="Slug"
                name="slug"
                required
              />
              <Field
                className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
                placeholder="Picture URL"
                name="pictureUrl"
              />
              <RadioGroup
                options={characterCodes}
                label="Character Code"
                onChange={(value) => {
                  setFieldValue('characterCode', Number(value))
                }}
              />
              <Field
                className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted"
                placeholder="Power"
                name="power"
                type="number"
                min="0"
                max="100"
                required
              />
              <Field
                className="py-4 border-b-2 border-b-darkBlue-200 focus:border-b-white w-full focus:outline-none bg-transparent text-lightActive placeholder:text-lightMuted shadow-md"
                placeholder="Wealth"
                name="wealth"
                type="number"
                min="0"
              />
              <div>
                <p className="text-lightMuted">Categories</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {characterCategories.map((char, index) => {
                    return (
                      <label
                        className="flex items-center gap-2 mt-2"
                        key={index}
                      >
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          onChange={(evt) => {
                            const checked = evt.target.checked

                            const categories = values.categories

                            if (checked) {
                              if (!categories.some((cat) => cat === char)) {
                                const categoriesToSave = [...categories, char]
                                setFieldValue('categories', categoriesToSave)
                              }
                            } else {
                              const categoriesToSave = categories.filter(
                                (cat) => cat === char
                              )
                              setFieldValue('categories', categoriesToSave)
                            }
                          }}
                        />
                        <p className="text-sm uppercase">{char}</p>
                      </label>
                    )
                  })}
                </div>
              </div>
              <Button
                className="w-full mt-4"
                type="submit"
                disabled={state.loading}
              >
                {state.loading ? 'Loading...' : 'Create'}
              </Button>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

export default CreateCharacterModal
