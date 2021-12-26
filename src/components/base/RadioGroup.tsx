import { useEffect, useState } from 'react'
import { RadioGroup as _RadioGroup } from '@headlessui/react'
import cx from 'classnames'

type RadioGroupProps = {
  options: {
    key: string
    value: string
  }[]
  label: string
  onChange: (value: string) => void
}

const RadioGroup = ({ options, label, onChange }: RadioGroupProps) => {
  const [selected, setSelected] = useState(options[0])

  useEffect(() => {
    onChange(selected.value)
  }, [selected])

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <_RadioGroup value={selected} onChange={setSelected}>
          <_RadioGroup.Label>{label}</_RadioGroup.Label>

          <div className="pt-4 flex items-center w-full gap-2">
            {options.map((option) => (
              <_RadioGroup.Option
                key={option.key}
                value={option}
                className="w-full"
              >
                {({ active, checked }) => (
                  <>
                    <div
                      className={cx(
                        'cursor-pointer',
                        'border-lightMuted border-2',
                        active && 'border-white',
                        'p-2 rounded-lg',
                        'flex items-center justify-between'
                      )}
                    >
                      {option.value}

                      {checked && <CheckIcon className="w-6 h-6" />}
                    </div>
                  </>
                )}
              </_RadioGroup.Option>
            ))}
          </div>
        </_RadioGroup>
      </div>
    </div>
  )
}

const CheckIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RadioGroup
