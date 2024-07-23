import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
// Guideline sizes are based on standard ~5" screen mobile device

const guidelineBaseWidth = 320;

const scale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const normalize = (size, factor = 1) => size + (scale(size) - size) * factor;
