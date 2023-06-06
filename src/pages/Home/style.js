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
        borderRadius:"15px",
        marginTop:"20px",
        height:"21%"
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
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 4,
        margin: 15,
        backgroundColor: "black"
    },
    imgBtn:{
        height:"100%",
        width:"100%",
        borderRadius:"15px",
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
        marginRight:"15px",
        marginBottom:"15px",
    },
    btnTextoDev: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight:"15px",
        marginBottom:"15px",
    },
    spacer:{
        marginBottom:"20px"
    },
    imgAnimal: {
        width: "90%",
        height: "90%"
    },
})