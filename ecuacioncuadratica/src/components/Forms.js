import React from 'react'; 
import {StyleSheet, TextInput, View} from 'react-native'; 
import RNPickerSelect from 'react-native-picker-select'; 
import colors from '../utils/colors';

export default function Form(props) {
   const {setValorA, setValorB, setValorC} = props;

return ( 
  <View style={styles.viewForm}> 
  <View style={styles.viewInputs}> 
  <TextInput 
  placeholder="A" keyboardType="numeric" 
  style={styles.input} 
  onChange={(e) => setValorA(e.nativeEvent.text)} 
  /> 
  <TextInput 
  placeholder="B" keyboardType="numeric" 
  style={styles.input} 
  onChange={(e) => setValorB(e.nativeEvent.text)} 
  /> 
  <TextInput 
  placeholder="C" keyboardType="numeric" 
  style={styles.input} 
  onChange={(e) => setValorC(e.nativeEvent.text)} 
  />
  </View> 
       </View> ); 
       }

const styles = StyleSheet.create({ 
  viewForm: { 
    position: 'absolute', 
    bottom: 0, 
    width: '80%', 
    paddingHorizontal: 5, 
    backgroundColor: colors.PRIMARY_COLOR_DARK, 
    borderRadius: 30, 
    height: 180, 
    justifyContent: 'center', 
    }, 
    viewInputs: { 
      flexDirection: 'row', 
      }, 
      input: { 
        height: 30, 
        backgroundColor: '#fff',
        borderWidth: 1, 
        borderColor: colors.PRIMARY_COLOR, 
        borderRadius: 5, 
        width: '30%', 
        marginRight: 5, 
        marginLeft: -5, 
        marginBottom: 10, 
        color: '#000', 
        paddingHorizontal: 20, 
        textAlign: "center",
        },  
          });                 