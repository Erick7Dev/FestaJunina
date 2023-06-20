import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home";
import Aluno from "./src/pages/Aluno";
import Professor from "./src/pages/Professor";
import Convidado from "./src/pages/Convidado";
import AlunoConsulta from "./src/pages/AlunoConsulta";
import ProfessorConsulta from "./src/pages/ProfessorConsulta";
import ConvidadoConsulta from "./src/pages/ConvidadoConsulta";
import AlunoCadastro from "./src/pages/AlunoCadastro"
import ProfessorCadastro from "./src/pages/ProfessorCadastro"
import ConvidadoCadastro from './src/pages/ConvidadoCadastro';
import AlunoPesquisa from './src/pages/AlunoPesquisa';
import ProfessorPesquisa from './src/pages/ProfessorPesquisa';
import ConvidadoPesquisa from './src/pages/ConvidadoPesquisa';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent:true, headerTintColor: '#ffff', headerTitleStyle: {fontWeight: 'bold', textShadow: "0  0  10  rgba(0, 0, 0, 5)", extShadowOffset: {width: 0, height: 12}}}}>
          <Stack.Screen name="Home" component={Home} options={{title: "", headerBackVisible: false, headerLeft: () => null}}/>
          <Stack.Screen name="Aluno" component={Aluno} options={{title: "Alunos"}}/>
          <Stack.Screen name="Professor" component={Professor} options={{title: "Professores"}}/>
          <Stack.Screen name="Convidado" component={Convidado} options={{title: "Convidados"}}/>
          <Stack.Screen name="AlunoCadastro" component={AlunoCadastro} options={{title: "Cadastro de alunos"}}/>
          <Stack.Screen name="AlunoConsulta" component={AlunoConsulta} options={{title: "Consulta de alunos"}}/>
          <Stack.Screen name="AlunoPesquisa" component={AlunoPesquisa} options={{title: "Pesquisa de alunos"}}/>
          <Stack.Screen name="ProfessorCadastro" component={ProfessorCadastro} options={{title: "Cadastro de professores"}}/>
          <Stack.Screen name="ProfessorConsulta" component={ProfessorConsulta} options={{title: "Consulta de professores"}}/>
          <Stack.Screen name="ProfessorPesquisa" component={ProfessorPesquisa} options={{title: "Pesquisa de professores"}}/>
          <Stack.Screen name="ConvidadoCadastro" component={ConvidadoCadastro} options={{title: "Cadastro de convidados"}}/>
          <Stack.Screen name="ConvidadoConsulta" component={ConvidadoConsulta} options={{title: "Consulta de convidados"}}/>
          <Stack.Screen name="ConvidadoPesquisa" component={ConvidadoPesquisa} options={{title: "Pesquisa de convidados"}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}