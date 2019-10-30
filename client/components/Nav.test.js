import React from 'react'

import Nav from './Nav'

import { shallow } from 'enzyme'

it('Nav component renders without crashing', () => {
  shallow(<Nav />)
})
