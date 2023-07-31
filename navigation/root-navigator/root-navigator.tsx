import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { UiKit } from '@screens/other/ui-kit'

const Root = createStackNavigator()

export function RootNavigator() {
	return (
		<Root.Navigator>
			<Root.Screen name="UI_KIT" component={UiKit} />
		</Root.Navigator>
	)
}
