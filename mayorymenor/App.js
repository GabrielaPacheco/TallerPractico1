import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, { Component } from 'react';
const Separator = () => <View style={styles.separator} />;
export default class Myproject extends Component {
  constructor(props) {
    super(props);
    (this.array = []),
      (this.state = {
        arrayHolder: [],
        mayor: 0,
        menor: 0,
        isDisabled: true,
      });
  }
  joinData = () => {
    if (      this.state.textInput_Holder != null && this.state.textInput_Holder > 0) {
      this.array.push({ title: this.state.textInput_Holder });
      this.setState({ arrayHolder: [...this.array] });
              console.log(this.state.arrayHolder)

      if(this.state.arrayHolder.length==3){
    this.setState({ isDisabled: false });
      }
    } else {
      alert('NO SE PUEDE QUEDAR VACIO O EL VALOR INGRESADO NO ES VALIDO');
      return;
    }
  };

calcular = () => {
if (this.state.arrayHolder.length <= 5) {
        var max = parseInt(Math.max.apply(null,this.state.arrayHolder));
        var men = parseInt(Math.min.apply(null,this.state.arrayHolder));
        this.setState({ mayor: max });
        this.setState({ menor: men });
        if (men > 10) {
          max = max + 10;
          this.setState({ mayor: max });
        }
        if (max < 50) {
          men = men - 5;
          this.setState({ menor: men });
        }
        
      }
}
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.title}>CALCULANDO NUMERO MAYOR Y MENOR</Text>
        <TextInput
          placeholder="Ingrese un numero entero"
          
          onChangeText={(data) => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          ref={input => { this.textInput_Holder = input }}
        />
        <Button
          title="Agregar numero porfavor"
          onPress={this.joinData}
          style={styles.buttonText}
        />
        <Separator />
        <Button title="Calcular" 
        disabled={this.state.isDisabled} 
        onPress={this.calcular}
        />
        <FlatList
          data={this.state.arrayHolder}
          width="100%"
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.title)}>
              {item.title}
            </Text>
          )}
        />
        <Text style={{ fontSize: 25 }}>NUMERO MAYOR : {this.state.mayor}</Text>
        <Text style={{ fontSize: 25 }}>NUMERO MENOR : {this.state.menor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonText: {
    backgroundcolor: '#4CAF50',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
