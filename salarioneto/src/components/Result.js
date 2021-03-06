import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'; 
export default function Result(props) {
   const {nombre,salario,sueldoneto,errorMessage} = props; 
   
   return ( 
     <View style={styles.content}> 
     {sueldoneto && (
       <View style={styles.boxResult}>
       <Text style={styles.title}>Planilla</Text>
 <DataResult title="Nombre:" value={`${nombre}`} />
     <DataResult title="Salario Base:             $" value={`${salario}`} />  
     <DataResult title="ISSS (3%):                $" value={`${(salario*0.03).toFixed(2)}`} />
     <DataResult title="AFP (4%):                 $" value={`${(salario*0.04).toFixed(2)}`} />
     <DataResult title="Renta (5%):               $" value={`${(salario*0.05).toFixed(2)}`} />
   <DataResult 
   title="Sueldo Neto:        $" 
   value={`${sueldoneto.totalPayable}`} 
   /> 
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