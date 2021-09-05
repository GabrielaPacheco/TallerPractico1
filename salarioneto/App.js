/** 
* @format
* @flow strict-local 
*/ 
import React,{useState,useEffect} from 'react'; 
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  StatusBar,
  Button
  } from 'react-native'; 

  import colors from './src/utils/colors';
  import Form from './src/components/Forms';
  import Footer from './src/components/Footer';
  import Result from './src/components/Result';

  export default function App(){ 
    const [nombre, setNombre] =useState(null);
    const [salario,setSalario] = useState(null);
    const [sueldoneto, setSueldoNeto] = useState(null);
    const [errorMessage,setErrorMessage]= useState('');

useEffect(() => { 
  if (nombre && salario) calculate(); 
  else reset(); 
  }, 
  [nombre,salario]); 
  
  const calculate = () => { 
    reset();
if (!salario) { 
  setErrorMessage('Añade tu salario'); 
  } else if (!nombre) { 
    setErrorMessage('Añade tu nombre'); 
    }
    else { 
        const isss = 0.03*salario; 
        const afp = 0.04*salario;
        const renta = 0.05*salario;
        const deduciones= isss+afp+renta;
        setSueldoNeto({ 
          totalPayable: (salario - deduciones).toFixed(2).replace('.', ','),
          }); 
          } 
          }; 
          
          const reset = () => { 
            setErrorMessage(''); 
            setSueldoNeto(null); 
            };    

    return( 
      <>
      <StatusBar barStyle="light-content"/> 
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
       <Text style={styles.titleApp}>Salario Neto</Text> 
       <Form
       setNombre = {setNombre}
       setSalario ={setSalario}
       />
       </SafeAreaView> 
       <Result
       nombre={nombre}
       salario={salario}
       sueldoneto={sueldoneto}
       errorMessage={errorMessage}
       />
       <Footer calculate={calculate}/>
       </> 
       ); 
       }
       const styles = StyleSheet.create({
         safeArea:{ 
         height:290,
         alignItems:'center' 
         },
         background: { 
           backgroundColor: colors.PRIMARY_COLOR, 
           height: 200, 
           width: '100%', 
           borderBottomLeftRadius: 30, 
           borderBottomRightRadius: 30, 
           position: 'absolute', 
           zIndex: -1, 
           },
          titleApp: { 
            fontSize: 25, 
            fontWeight: 'bold', 
            color: '#fff', 
            marginTop: 15, 
            }, 
            });