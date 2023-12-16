import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: 300,
        overflow: 'hidden',
        marginBottom: -60,
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    profileContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 60,
        marginTop: -40,
        shadowColor: 'grey',
        // shadowOffset: { width: 0, height: 10 }, 
        // shadowOpacity: 0.2, 
        // shadowRadius: 15,
        elevation: 10
    },
    profileImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: (width / 4) / 2,
        borderWidth: 1.5,
        borderColor: '#A0A0A0',
        marginBottom: 10,
    },
    textName: {
        fontSize: 26,
        marginVertical: 5,
        fontWeight: '900',
    },
    textEmail: {
        fontSize: 18,
        marginVertical: 5,
        color: '#A0A0A0'
    },
    bottomContainer: {
        backgroundColor: 'white',
        marginTop: 20,
        width: width - 60,
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
    }
});