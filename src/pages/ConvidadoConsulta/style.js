import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: 'center',
        overflow:'hidden',
        height:'100%'
    },
    animalBtn:{
        backgroundColor:"#FFFFFF",
        width:"75%",
        borderRadius:15,
        marginTop:20,
        flex:1
    },
    imgBtn:{
        height:"100%",
        width:"100%",
        borderRadius:15,
        resizeMode:"stretch"
    },
    btnArea: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: 'flex-end',
    },
    btnTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight:15,
        marginBottom:2
    },
    imgRecipe: {
        width: "90%",
        height: "100%"
    },
    imgSpace: {
        width: '100%',
        height: '30vh',
        marginTop: 42,
        alignItems: 'center'
    },
    recipeSpace: {
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "50%",
        width: "75%",
        marginLeft: "12.5vw",
        marginRight: "12.5vw",
    },
    fundo: {
        margin: '2%',
        padding: '4%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        maxHeight:'60%',
    },
    subtitulo:{
        color: 'orange',
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10,
        flex:1
    },
    texto: {
        color: 'white',
        margin: 10
    },
    fundoTexto:{
        maxHeight:'50vh',
        flex:1
    }
})