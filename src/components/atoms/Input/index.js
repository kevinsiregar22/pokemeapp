import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Picker} from '@react-native-picker/picker';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  select,
  onValueChange,
  selectItem,
  error,
  placeholder,
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  if (select) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker selectedValue={value} onValueChange={onValueChange}>
            {selectItem.map(item => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        value={value}
        editable={!disable}
        onBlur={onBlurForm}
        onFocus={onFocusForm}
        placeholder={placeholder}
        onChangeText={onChangeText}
        selectTextOnFocus={!disable}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 3,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 6,
    fontFamily: fonts.Poppins[400],
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  text: {
    color: 'red',
    marginTop: 5,
  },
});
