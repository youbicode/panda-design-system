import { PropsWithChildren } from 'react'
import { css } from '../../styled-system/css'
import type { SystemStyleObject } from '../../styled-system/types'

type Props = PropsWithChildren<{
  css: SystemStyleObject
}>

export const TestComponent = ({ css: cssProp = {}, children }: Props) => {
  const className = css(
    { display: 'flex', alignItems: 'center', color: 'black' },
    cssProp
  )
  return <button className={className}>{children}</button>
}
