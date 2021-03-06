import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'; 
export default function Result(props) {
   const {valorA, valorB, valorC,resultado, errorMessage} = props; 
   
   return ( 
     <View style={styles.content}> 
     {resultado && (
       <View style={styles.boxResult}>
       <Text style={styles.title}>RESULTADO</Text>
 <DataResult title="Valor A:" value={`${valorA}`} />
 <DataResult title="Valor B:" value={`${valorB}`} />
 <DataResult title="Valor C:" value={`${valorC}`} />
 <DataResult title="Valor 1:" value={`${resultado.totalValor1}`} /> 
 <DataResult title="Valor 2:" value={`${resultado.totalValor2}`} />
   </View> 
   )} 
   <View> 
   <Text style={styles.error}>{errorMessage}</Text> 
   </View> 
   </View> 
   ); 
   }

function DataResult(props) { 
  const {title, value} = props; 
  return ( 
    <View style={styles.value}> 
    <Text>{title}</Text> 
    <Text>{value}</Text> 
    </View> 
    ); 
    }  

const styles = StyleSheet.create({ 
  content: { 
    marginHorizontal: 40, 
    }, 
    boxResult: { 
      padding: 30, 
      }, 
      title: { 
        fontSize: 25, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        marginBottom: 20, 
        }, 
        value: { 
          flexDirection: 'row',
         justifyContent: 'space-between', 
         marginBottom: 20, 
         }, 
         error: { 
           textAlign: 'center', 
           color: '#f00', 
           fontWeight: 'bold', 
           fontSize: 20, 
           }, 
           }); 