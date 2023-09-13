import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
        alignSelf:'stretch',
        justifyContent: 'center'
    },
    input: {
        backgroundColor:'white',
        borderRadius: 20,
        height: 50,
        paddingLeft: 20,   
    },
    unit: {
        position:'absolute',
        fontSize: 30,
        alignSelf:'flex-end',
        paddingRight: 20,   
    }
});

export { s };
