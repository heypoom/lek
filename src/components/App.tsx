import {Suspense} from 'react'
import {Provider} from 'jotai'

import GlobalStyles from './GlobalStyles'

import {Studio} from '../modules/studio/Studio'

export const App = () => {
  return (
    <Provider>
      <Suspense fallback="Loading">
        <GlobalStyles />

        <Studio />
      </Suspense>
    </Provider>
  )
}
