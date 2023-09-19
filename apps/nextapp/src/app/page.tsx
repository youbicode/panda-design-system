import { TestComponent } from '@/components/TestComponent'
import { css } from '../../styled-system/css'
import { Button } from 'ui'
const styles = css({
  fontSize: '2xl',
  fontWeight: 'bold',
  color: 'gray.800',
  '&:hover': {
    color: 'red.800',
  },
})

export default function Home() {
  return (
    <main>
      <p>1. using styles inside className</p>
      <div className={styles}>Hello 🐼!</div>
      <p>2. using css prop</p>
      <TestComponent css={{ color: 'red.600', _hover: { color: 'red.900' } }}>
        Test
      </TestComponent>
      <p>3. external component</p>
      <Button>Test</Button>
    </main>
  )
}
