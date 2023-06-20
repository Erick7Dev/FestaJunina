import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';

export default function Tutor() {

    return (
        <ImageBackground source={require("../../../assets/fundoHome.jpg")} resizeMode="cover" style={{ height: "100%" }}>
            <View style={style.container}>
            <View style={style.fundo}>
                <View>
                <Text style={style.subtitulo}> Allan Vidal S2 </Text>
                </View>
                <View style={style.hr}></View>
                <Image style={style.AllanLindo} source={require("../../../assets/Allan.jpeg")}></Image>
            </View>
            </View>
        </ImageBackground>
    );
}

/* <View style={style.container}>
        <View style={style.fundo}>
          <View>
            <View style={{ flex: 1, padding: 24 }}>
              <View>
                <Text style={style.subtitulo}> Cadastrar Alunos </Text>
              </View>
              <View style={style.hr}></View> */