import {
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import style from "./style.js";

export default function ProfessorPesquisa() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [professor, setProfessor] = useState();

  const searchProfessores = async (nome) => {
    const response = await fetch("https://www.etecguaianazes.com.br/projeto-evento/professor-param.php?nome=" + nome
    );
    const json = await response.json();
    setData(json.professor);
    setLoading(false);
  };

  useEffect(() => {
    searchProfessores();
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/fundoHome.jpg")}
      resizeMode="cover" style={{ height: "100%" }}
    >


      <View style={style.container}>
        <View style={style.fundo}>
          <View>
            <View style={{ flex: 1, padding: 24 }}>
              <View style={style.fundoTitulo}>
                <Text style={style.subtitulo}> Professores Cadastrados </Text>
              </View>
              <View style={style.hr}></View>
              <View>
                <TextInput style={style.loginInput} placeholder={"Insira o nome do professor:"} onChangeText={(text) => setProfessor(text)} />
              </View>
              
              <View style={style.fundoTexto}>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <FlatList
                    data={data}
                    keyExtractor={({ idProfessor }, index) => idProfessor}
                    renderItem={({ item }) => (
                      <Text style={style.texto}>
                        {item.idProfessor}-{item.nomeProfessor}
                      </Text>
                    )}
                  />
                )}
              </View>
              <TouchableOpacity style={style.botao} onPress={() => searchProfessores(professor)}>
                <View style={style.btnArea}>
                  <Text style={style.btnTexto}>Pesquisar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
/*
      import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function App(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProfessores = async () => {
     try {
      const response = await fetch('http://localhost:8080/projeto-evento/professor-json.php');
      const json = await response.json();
      setData(json.professor);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfessores();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>

      <View>
        <Text> Professores Cadastrados </Text>
      </View>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ idProfessor }, index) => idProfessor}
          renderItem={({ item }) => (
            <Text>{item.idProfessor}, {item.nomeProfessor}</Text>
          )}
        />
      )}
    </View>
  );
};
*/
