import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ItemList } from './ItemList'
import { stock } from '../data/stock'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

test('debe renderizarse correctamente', () => {
    const component = render( <ItemList items = {stock} /> )
    component.getByText('Releases')
    expect(component.container).toHaveTextContent("Releases")
    const items = component.container.querySelectorAll('div.col-3')
    expect(items.length).toBe(stock.length)
})