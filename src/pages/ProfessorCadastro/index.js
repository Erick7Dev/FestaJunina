import { Text, View, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import style from './style.js'

export default function ProfessorCadastro() {

  const [professor, setProfessor] = useState();
  const [dados, setDados] = useState();

  const verificar = () => {
    const valores = professor

    fetch('https://www.etecguaianazes.com.br/projeto-evento/professor-inserir.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        professor: professor,
      })
    })
    setDados(valores)
    alert("Professor cadastrado com sucesso")
  }

  return (
    <ImageBackground
      source={require("../../../assets/fundoHome.jpg")}
      resizeMode="cover" style={{ height: "100%" }}
    >
      <View style={style.container}>
        <View style={style.fundo}>
          <View>
            <View style={{ flex: 1, padding: 24 }}>
              <View>
                <Text style={style.subtitulo}> Cadastrar Professores </Text>
              </View>
              <View style={style.hr}></View>
              <Text style={style.labeLogin}>Nome:</Text>
              <View>
                <TextInput style={style.loginInput} placeholder={"Insira o nome do professor:"} onChangeText={(text) => setProfessor(text)} />
              </View>
              <TouchableOpacity style={style.botao} onPress={() => verificar()}>
                <View style={style.btnArea}>
                  <Text style={style.btnTexto}>Cadastrar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}