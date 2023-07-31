import React, { Fragment } from 'react'

import { Toaster } from '@features/toaster'
import { RootNavigator } from '@navigation/root-navigator/root-navigator'
import { NavigationContainer } from '@react-navigation/native'
import { ToastsProvider } from './providers/toasts'

function App() {
	return (
		<ToastsProvider>
			<Fragment>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
				<Toaster />
			</Fragment>
		</ToastsProvider>
	)
}

export default App
