import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppColors } from '../styles/AppColors';
import { Styles } from '../styles/Styles';

export const Button = ({
  title,
  marginV,
  disabled,
  onPress,
  width = 220,
  paddingV = 15,
  bg,
  loading,
  accessibilityLabel = "tipe"
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled || loading}
      style={[
        styles.button,
        { marginVertical: marginV, width: width, paddingVertical: paddingV },
        disabled && { backgroundColor: AppColors.PattenseBlue_Color },
        bg && { backgroundColor: '#A3B4C0' }
      ]}>
      {!loading ? <Text
        style={[
          Styles.darkMedium12,
          disabled && { color: "#2E3238" },
        ]}>
        {title}
      </Text> :
        <ActivityIndicator size={15} color="#5C3D00" />
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.Mustard_Color,
    borderRadius: 50,
    height: 48,
  },
});
