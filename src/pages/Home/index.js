import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

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
      case 3:
        navigation.navigate("Devs");
        break;
      case 4:
        navigation.navigate("Tutor");
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
        <View style={style.btnRow}>
        <TouchableOpacity style={style.btnHori} onPress={() => select(3)}>
          <View style={style.btnArea}>
            <Text style={ style.btnTextoDev}>Desenvolvedores</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnHori} onPress={() => select(4)}>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Tutores</Text>
          </View>
        </TouchableOpacity>
      </View>
        <View style={style.spacer}></View>
      </View>
    </ImageBackground>
    /* <ImageBackground source={require("../../../assets/fundoHome.jpg")} resizeMode="cover" style={{ height: "100%" }}>
      <View style={style.container}>
        <TouchableOpacity onPress={() => select(0)} style={style.btn}><Image style={style.imgBtn} source={require("../../../assets/alunos.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Cadastro</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => select(1)} style={style.btn}><Image style={style.imgBtn} source={require("../../../assets/professores.jpg")}></Image>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Consulta</Text>
          </View>
        </TouchableOpacity>
        <View style={style.spacer}></View>
      </View>
    </ImageBackground> */
  );
}