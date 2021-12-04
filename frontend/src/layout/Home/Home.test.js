import { render, screen } from '@testing-library/react'
import Home from './home'
import Checkbox from '../../components/Checkbox'
import SearchBar from '../../components/SearchBar/SearchBar'

describe('Home Component', () => {
  test('renders list of superheroes title', () => {
    render(<Home />)
    const linkElement = screen.getByText(/list of superheroes!/i)
    expect(linkElement).toBeInTheDocument()
    screen.debug()
  })

  test('renders Checkbox unchecked', () => {
    const onChange = f => f
    const {getByTestId, debug} = render(<Checkbox filterBy={""} isChecked={false} handleChange={onChange} />)
    expect(getByTestId('filterCheckbox')).toHaveProperty('checked', false)
    //debug()
  })

  test('renders searchbar with placeholder `search superhero`', () => {
    const onChange = f => f
    const {getByTestId, debug} = render(<SearchBar superheroName='' setSuperheroName={onChange} />)
    expect(getByTestId('searchbar')).toHaveProperty('placeholder', 'search superhero')
    //debug()
  })

  test.todo('renders `there are no heroes to show` if database is empty')
})

