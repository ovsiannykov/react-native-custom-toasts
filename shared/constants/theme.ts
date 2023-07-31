import { Dimensions, Platform } from 'react-native'
import { getModel, hasDynamicIsland, hasNotch } from 'react-native-device-info'

export const DEVICE_WIDTH = Dimensions.get('window').width
export const DEVICE_HEIGHT = Dimensions.get('window').height
export const VERY_SMALL_DEVICE = DEVICE_WIDTH < 360
export const SMALL_DEVICE = DEVICE_WIDTH < 375
export const MIDDLE_DEVICE = DEVICE_WIDTH >= 375 && DEVICE_WIDTH < 390
export const SMALL_DEVICES = MIDDLE_DEVICE || SMALL_DEVICE || VERY_SMALL_DEVICE
export const BIG_DEVICE = DEVICE_WIDTH >= 390
export const MAX_WIDTH_DEVICE = 414
export const IS_NOTCH = hasNotch()
export const DEVICE_MODEL = getModel()
export const IS_DYNAMIC_ISLAND = hasDynamicIsland()
export const IS_IOS = Platform.OS === 'ios'
export const IS_ANDROID = Platform.OS === 'android'
export const KEYBOARD_BEHIVATOR = Platform.OS === 'ios' ? 'padding' : 'height'
export const KEYBOARD_VERTICAL_OFFSET = IS_NOTCH || IS_DYNAMIC_ISLAND ? 50 : 20
export const HIT_SLOP_10 = { top: 10, bottom: 10, left: 10, right: 10 }
export const HIT_SLOP_15 = { top: 15, bottom: 15, left: 15, right: 15 }
export const HIT_SLOP_20 = { top: 20, bottom: 20, left: 20, right: 20 }
export const HIT_SLOP_25 = { top: 25, bottom: 25, left: 25, right: 25 }
export const HIT_SLOP_30 = { top: 30, bottom: 30, left: 30, right: 30 }

export function adaptiveSize(size: number): number {
	return Math.round((size * DEVICE_WIDTH) / MAX_WIDTH_DEVICE)
}
