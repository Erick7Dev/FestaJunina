import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home";
import Cadastro from "./src/pages/Cadastro";
import Consulta from "./src/pages/Consulta";
import AlunoConsulta from "./src/pages/AlunoConsulta";
import ProfessorConsulta from "./src/pages/ProfessorConsulta";
import ConvidadoConsulta from "./src/pages/ConvidadoConsulta";

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'white'}, headerTintColor: '#000', headerTitleStyle: {fontWeight: 'bold'}}}>
          <Stack.Screen name="Home" component={Home} options={{title: "Home", headerBackVisible: false, headerLeft: () => null}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{title: "Cadastro"}}/>
          <Stack.Screen name="Consulta" component={Consulta} options={{title: "Consulta"}}/>
          <Stack.Screen name="AlunoConsulta" component={AlunoConsulta} options={{title: "Consulta de alunos"}}/>
          <Stack.Screen name="ProfessorConsulta" component={ProfessorConsulta} options={{title: "Consulta de professores"}}/>
          <Stack.Screen name="ConvidadoConsulta" component={ConvidadoConsulta} options={{title: "Consulta de convidados"}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}