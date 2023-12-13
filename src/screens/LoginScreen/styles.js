import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#FBE66A',
        flex: 1,
        paddingTop: 200,
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: -20,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 15,
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#8ACFFB',
        marginLeft: 50,
        marginRight: 50,
        margintop: -10,
        height: 48,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 15,
    },
    buttonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        fontWeight: "bold",
        fontSize: 16
    }
})