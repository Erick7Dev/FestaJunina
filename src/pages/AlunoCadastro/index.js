import { Text, View, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import style from './style.js'

export default function AlunoCadastro() {

  const [aluno, setAluno] = useState();
  const [turma, setTurma] = useState();
  const [value, setValue] = useState();
  const [dados, setDados] = useState();

  const cadastrar = () => {
    const valores = aluno

    fetch('https://www.etecguaianazes.com.br/projeto-evento/aluno-inserir.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        aluno: aluno,
        turma: turma
      })
    })
    setDados(valores);
    alert("Aluno cadastrado com sucesso")
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
                <Text style={style.subtitulo}> Cadastrar Alunos </Text>
              </View>
              <View style={style.hr}></View>
              <Text style={style.labeLogin}>Nome:</Text>
              <View>
                <TextInput style={style.loginInput} placeholder={"Insira o nome do aluno:"} onChangeText={(text) => setAluno(text)} />
              </View>
              <Text style={style.labeLogin}>Turma:</Text>
              <View>
                <TextInput style={style.loginInput} placeholder={"Insira a turma do aluno:"} onChangeText={(text) => setTurma(text)} />
              </View>
              <TouchableOpacity style={style.botao} onPress={() => cadastrar()}>
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