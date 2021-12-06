import { render, screen } from '@testing-library/react'
import HeroesList from './HeroesList'

describe('HeroesList Component', () => {
  test('renders `There are no heroes to show` if array is empty', () => {
    const { getByText } = render(<HeroesList heroes={[]}/>)
    expect(getByText('There are no heroes to show')).toBeInTheDocument()
  })
})
 