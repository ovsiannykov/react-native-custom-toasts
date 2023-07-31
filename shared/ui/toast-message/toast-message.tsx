import React, { memo, ReactNode, useCallback, useEffect, useState } from 'react'
import { Animated, Pressable, TouchableOpacity, View } from 'react-native'

import { useToastsContext } from '@app/providers/toasts'
import { COLORS } from '@shared/constants/theme'
import { Text } from '@shared/ui/text'
import SuccessIcon from './assets/check_circle.svg'
import CloseIcon from './assets/close.svg'
import ErrorIcon from './assets/error.svg'
import WarningIcon from './assets/warning.svg'
import styles from './toast-message.styles'

type ToastMessageProps = {
	title: string | ReactNode
	variant: 'error' | 'success' | 'warning'
	id: number
}

export const ToastMessage = memo(
	({ title, variant, id }: ToastMessageProps) => {
		const { remove } = useToastsContext()
		const [fadeAnim] = useState(new Animated.Value(0))
		const isNegative = variant === 'error'
		const isPositive = variant === 'success'
		const isWarning = variant === 'warning'
		const variantBox = isNegative
			? styles.negative
			: isPositive
			? styles.positive
			: styles.warning

		useEffect(() => {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start()
		}, [fadeAnim])

		const fadeOut = useCallback(async () => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true,
			}).start()
		}, [fadeAnim])

		const hideToast = useCallback(() => {
			fadeOut()
			const deleteIteminArr = setTimeout(() => {
				remove(id)
			}, 500)

			return () => clearTimeout(deleteIteminArr)
		}, [fadeOut, id, remove])

		useEffect(() => {
			const timer = setTimeout(() => {
				hideToast()
			}, 4000)

			return () => clearTimeout(timer)
		}, [hideToast])

		const icon = useCallback(() => {
			switch (variant) {
				case 'error':
					return (
						<ErrorIcon width={24} height={24} fill={COLORS.alert_red_main} />
					)
				case 'success':
					return <SuccessIcon width={24} height={24} fill={COLORS.success_z} />
				default:
					return (
						<WarningIcon width={24} height={24} fill={COLORS.warning_light} />
					)
			}
		}, [variant])

		return (
			<Pressable onPress={hideToast}>
				<Animated.View
					style={{
						...styles.container,
						...variantBox,
						opacity: fadeAnim,
					}}
					pointerEvents="box-none"
				>
					<View style={styles.info_box}>
						<View style={styles.icon_box}>{icon()}</View>
						<Text
							numberOfLines={2}
							variant="text_16_regular"
							style={[
								styles.title,
								isPositive && styles.positive_text,
								isNegative && styles.negative_text,
								isWarning && styles.warning_text,
							]}
						>
							{title}
						</Text>
					</View>
					<TouchableOpacity onPress={hideToast}>
						<CloseIcon
							width={24}
							height={24}
							fill={
								isPositive
									? COLORS.success_z
									: isNegative
									? COLORS.alert_red_main
									: COLORS.warning_light
							}
						/>
					</TouchableOpacity>
				</Animated.View>
			</Pressable>
		)
	}
)
