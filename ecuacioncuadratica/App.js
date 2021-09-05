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
  import Footer from './src/components/Footer'
  import Result from './src/components/Result'

  export default function App(){ 
    const [valorA,setValorA] = useState(null);
    const [valorB,setValorB] = useState(null);
    const [valorC,setValorC] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [errorMessage,setErrorMessage]= useState('');

useEffect(() => { 
  if (valorA && valorB && valorC) calculate(); 
  else reset(); 
  }, [valorA,valorB,valorC]); 
  
  const calculate = () => { 
    reset();
if (!valorA) { 
  setErrorMessage('Añada el valor de A'); 
  } else if (!valorB) { 
    setErrorMessage('Añada el valor de B'); 
    } else if (!valorC) { 
      setErrorMessage('Añada el valor de C'); 
      } else { 
        const cuadrado = Math.pow(valorB,2);
        const resta= 4*valorA*valorC;
        const raiz = Math.sqrt(cuadrado-resta);
        const denominador = 2*valorA;
        setResultado({ 
          totalValor1: ((-(valorB)+raiz)/denominador).toFixed(2).replace('.', ','), 
          totalValor2: ((-(valorB)-raiz)/denominador).toFixed(2).replace('.', ','),
          }); 
          } 
          }; 
          
          const reset = () => { 
            setErrorMessage(''); 
            setResultado(null); 
            };    

    return( 
      <>
      <StatusBar barStyle="light-content"/> 
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
       <Text style={styles.titleApp}>Ecuación Cuadrática</Text> 
       <Form
       setValorA = {setValorA}
       setValorB = {setValorB}
       setValorC = {setValorC}
       />
       </SafeAreaView> 
       <Result
       valorA={valorA}
       valorB={valorB}
       valorC={valorC}
       resultado={resultado}
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
           backgroundColor: 'lightblue', 
           height: 610, 
           width: '100%', 
           borderBottomLeftRadius: 10, 
           borderBottomRightRadius: 10, 
           position: 'absolute', 
           zIndex: -1, 
           },
          titleApp: { 
            fontSize: 25, 
            fontWeight: 'bold', 
            color: 'black', 
            marginTop: 15, 
            textAlign: "center",
            }, 
            });