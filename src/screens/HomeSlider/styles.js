import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#8ACFFB',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
    },
    newCourseContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
})