import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    profileContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
        width: width - 40,
    },
    profileImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: (width / 4) / 2,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
    bottomContainer: {
        marginTop: 20,
        width: width - 40,
    },
});