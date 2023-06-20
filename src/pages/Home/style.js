import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: 'center',
        height:"100%"
    },
    btn:{
        backgroundColor:"#FFFFFF",
        width:"75%",
        borderRadius:15,
        marginTop:20,
        height:"21%",
        borderRadius: 15
    },
    btnRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        margin: 30 
    },
    btnHori: {
        width: "42%",
        height: "100%",
        borderWidth: 2,
        borderRadius: 4,
        margin: 15,
        backgroundColor: "black",
        borderRadius:15
    },
    imgBtn:{
        height:"100%",
        width:"100%",
        borderRadius: 15
    },
    btnArea: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: 'flex-end',
    },
    btnTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight:15,
        marginBottom:15,
    },
    btnTextoDev: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight:15,
        marginBottom:15,
    },
    spacer:{
        marginBottom:20
    },
})