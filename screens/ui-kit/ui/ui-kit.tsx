import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

import { useToastsContext } from '@app/providers/toasts'
import styles from './ui-kit.styles'

export function UiKit() {
	const { bug } = useToastsContext()

	return (
		<SafeAreaView style={styles.screen}>
			<ScrollView>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => bug('Bug text')}>
						<Text>Show Toast</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
