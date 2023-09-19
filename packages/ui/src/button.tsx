import * as React from 'react'
import { css } from '@ui/styled-system/css'

export type ButtonProps = React.PropsWithChildren<{ className?: string }>

export function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button
      className={css({ color: 'red.600', px: '2', py: '3' })}
      type="button"
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
