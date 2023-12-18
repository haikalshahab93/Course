import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: '100%',
        overflow: 'hidden'
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
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 15,
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
        fontSize: 30,
        marginVertical: 5,
        fontWeight: '900',
    },
    textEmail: {
        fontSize: 18,
        marginVertical: 5,
        color: '#A0A0A0'
    },
    editInput: {
        width: '100%',
        height: 40,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: '#A0A0A0',
        padding: 5,
        margin: 5,
        color: 'grey',
    },
    bottomContainer: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 20,
        marginTop: 20,
        width: width - 60,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 15,
        elevation: 10
    },
    button: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    editButton: {
        backgroundColor: '#8ACFFB',
    },
    logoutButton: {
        backgroundColor: '#F5834D',
    },
});