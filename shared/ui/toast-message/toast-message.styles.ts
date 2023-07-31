import { StyleSheet } from 'react-native'

import { COLORS, adaptiveSize } from '../../constants/theme'

export default StyleSheet.create({
	container: {
		width: adaptiveSize(380),
		minWidth: 32,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginBottom: 8,
		borderRadius: 8,
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.16,
		shadowRadius: 1.51,
		elevation: 2,
	},
	info_box: {
		flexDirection: 'row',
	},
	title: {
		maxWidth: '85%',
	},
	icon_box: {
		marginRight: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	positive: {
		backgroundColor: COLORS.success_bg,
	},
	negative: {
		backgroundColor: COLORS.alert_bg,
	},
	warning: {
		backgroundColor: COLORS.warning_bg,
	},
	positive_text: {
		color: COLORS.success_z,
	},
	negative_text: {
		color: COLORS.alert_red_main,
	},
	warning_text: {
		color: COLORS.warning_light,
	},
})
