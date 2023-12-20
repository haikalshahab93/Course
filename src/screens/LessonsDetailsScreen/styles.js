import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#FBE66A',
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 15,
    }
})