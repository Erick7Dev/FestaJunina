import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      alignItems:"center",
        justifyContent: 'center',
        overflow:'hidden',
        height:'100%'
    },
    hr: {
      width: "80%",
      borderBottomWidth:2,
      marginBottom:30,
      alignSelf:"center"
    },
    labeLogin:{
      color:"white",
      fontWeight:"bold",
      marginLeft:"7%",
      marginTop:"5%",
    },
    loginInput: {
      borderWidth: 3,
      borderRadius: 25,
      width: "100%",
      height: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      color:"white",
      padding:2,
      paddingLeft:10
    },
    botao: {
      alignSelf: 'center',
      width: '45%',
      height: 50,
      borderWidth: 2,
      borderRadius: 5,
      margin: 10,
      backgroundColor: 'orange',
    },
    btnArea: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnTexto: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    subtitulo:{
      color: 'orange',
      fontWeight:'bold',
      fontSize:20,
      marginBottom:10,
      flex:1,
      alignSelf:"center"
  },
  fundo: {
    margin: '2%',
    padding: '4%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    maxHeight:'60%',
},
  });