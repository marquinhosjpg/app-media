import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){

    let [valor1, setValor1] = useState();
    let [valor2, setValor2] = useState();
    let [valor3, setValor3] = useState();
    let [valor4, setValor4] = useState();
    let [total, setTotal]   = useState();

    function CalcularTotal(){
        let resultado = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;
        setTotal(resultado);

        alert("O Resultado da média total é: " + total);

       if(total <=5){
            alert("Aluno em recuperação!")
       }

       else{
            alert("Aluno aprovado!")
       }

    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Projeto Média</Text>

            <TextInput onChangeText={setValor1} style={styles.campo} placeholder="Digite a primeira nota: "/>
            <TextInput onChangeText={setValor2} style={styles.campo} placeholder="Digite a segunda nota: "/>
            <TextInput onChangeText={setValor3} style={styles.campo} placeholder="Digite a terceira nota: "/>
            <TextInput onChangeText={setValor4} style={styles.campo} placeholder="Digite a quarta nota: "/>

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Calcular Média</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: "bold",
        marginBottom: 40
    },
    campo:{
        backgroundColor: '#778899',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop:10,
        marginBottom: 10,
        width: 300,
        borderRadius: 10,
        borderColor: '#000'
    },
    botao:{
        backgroundColor: '#8B0000',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },
    botaoTexto:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 700,
    }
});