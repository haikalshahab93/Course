import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#8ACFFB',
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: 'white',
        marginTop: 10,
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
    imageContainer: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        overflow: 'hidden'
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
        backgroundColor: '#FBE66A',
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
        fontWeight: "900",
        fontSize: 16
    }
})