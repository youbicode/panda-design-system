import { cva } from '@ui/styled-system/css'
import { styled } from '@ui/styled-system/jsx'

const badge = cva({
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      solid: { bg: 'blue.200', color: 'black' },
      outline: { borderWidth: '1px', borderColor: 'red.200' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
  },
  defaultVariants: {
    visual: 'solid',
    size: 'sm',
  },
})

export const Badge = styled('button', badge)
