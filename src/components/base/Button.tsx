import React, { useMemo } from 'react'
import cx from 'classnames'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'normal' | 'medium'
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const variant = useMemo(() => {
    switch (props.variant) {
      case 'primary':
        return 'backgroundGradientPrimary'
      case 'secondary':
        return 'backgroundGradientSecondary'
      default:
        return 'backgroundGradientPrimary'
    }
  }, [props.variant])

  const size = useMemo(() => {
    switch (props.size) {
      case 'normal':
        return 'p-2'
      case 'medium':
        return 'p-4'
      default:
        return 'p-2'
    }
  }, [props.variant])

  return (
    <button
      {...props}
      className={cx(
        'shadow-md rounded-md cursor-pointer',
        props.className,
        !props.disabled
          ? variant
          : 'bg-gray-500 text-gray-400 cursor-not-allowed',
        size
      )}
    >
      {children}
    </button>
  )
}

export default Button
