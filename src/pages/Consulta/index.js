import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';

export default function Consulta() {

  const navigation = useNavigation();

  function select(num) {
    switch (num) {
      case 0:
        navigation.navigate("AlunoConsulta");
        break;
      case 1:
        navigation.navigate("ProfessorConsulta");
        break;
      case 2:
        navigation.navigate("ConvidadoConsulta");
        break;
    }
  }

  return (
    <ImageBackground source={require("../../../assets/fundoHome.jpg")} resizeMode="cover" style={{height:"100%"}}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => select(0)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/alunos.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Alunos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => select(1)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/professores.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Professores</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => select(2)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/convidados.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Convidados</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => select(2)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/convidados.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Convidados</Text>
          </View>
        </TouchableOpacity>
        <View style={style.spacer}></View>
      </View>
    </ImageBackground>
  );
}

/* 
  function select(num) {
    switch (num) {
      case 0:
        navigation.navigate("Alunos");
        break;
      case 1:
        navigation.navigate("Professores");
        break;
      case 2:
        navigation.navigate("Convidados");
        break;
    }
  }
*/

/* 
    <ImageBackground source={require("../../../assets/fundoHome.jpg")} resizeMode="cover" style={{height:"100%"}}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => select(0)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/alunos.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Alunos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => select(1)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/professores.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Professores</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => select(2)} style={style.btn}>
          <Image style={style.imgBtn} source={require("../../../assets/convidados.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Convidados</Text>
          </View>
        </TouchableOpacity>
        <View style={style.spacer}></View>
      </View>
    </ImageBackground> 
*/