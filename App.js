import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home";
import Aluno from "./src/pages/Aluno";
import Professor from "./src/pages/Professores";
import Convidado from "./src/pages/Convidado";
import Cadastro from "./src/pages/Cadastro";
import Consulta from "./src/pages/Consulta";
import AlunoConsulta from "./src/pages/AlunoConsulta";
import ProfessorConsulta from "./src/pages/ProfessorConsulta";
import ConvidadoConsulta from "./src/pages/ConvidadoConsulta";

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent:true, headerTintColor: '#ffff', headerTitleStyle: {fontWeight: 'bold', textShadow: "0px  0px  10px  rgba(0, 0, 0, 5)", extShadowOffset: {width: 0, height: 12}}}}>
          <Stack.Screen name="Home" component={Home} options={{title: "", headerBackVisible: false, headerLeft: () => null}}/>
          <Stack.Screen name="Aluno" component={Aluno} options={{title: "Alunos"}}/>
          <Stack.Screen name="Professor" component={Professor} options={{title: "Professores"}}/>
          <Stack.Screen name="Convidado" component={Convidado} options={{title: "Convidados"}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{title: "Cadastro"}}/>
          <Stack.Screen name="Consulta" component={Consulta} options={{title: "Consulta"}}/>
          <Stack.Screen name="AlunoConsulta" component={AlunoConsulta} options={{title: "Consulta de alunos"}}/>
          <Stack.Screen name="ProfessorConsulta" component={ProfessorConsulta} options={{title: "Consulta de professores"}}/>
          <Stack.Screen name="ConvidadoConsulta" component={ConvidadoConsulta} options={{title: "Consulta de convidados"}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}