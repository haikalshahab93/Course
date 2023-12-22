import { View, StyleSheet, FlatList, Image, Dimensions, Text ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
    { id: '1', image: require('../Assets/colors1.png'), name: 'Colors Lessons', amount: '8' },
    { id: '2', image: require('../Assets/shapes1.png'), name: 'Shapes Lessons', amount: '8' },
    { id: '3', image: require('../Assets/nouns1.png'), name: 'Nouns Lessons', amount: '7' }
]

const VideoCourse = () => {

    const [videos, setVideos] = useState([]);
    const [numColumns, setNumColumns] = useState(2);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            fetch('https://hrh-course.up.railway.app/video')
                .then(response => response.json())
                .then(data => setVideos(data))
                .catch(error => console.error('Error fetching videos:', error));
        }
        fetchData();
    }, []);

    const changeNumColumns = newNumColumns => {
        setNumColumns(newNumColumns);
    };

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => onPressCourse(item)}>
                <Image source={item.image}
                    style={{ width: 300 * 1.26, height: 150, borderRadius: 10 }} />
            </TouchableOpacity>
            <View style={{ paddingTop: 10 }}>
                <Text style={{ fontWeight: '900', fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontWeight: '300', fontSize: 13, color: Colors.grey }}>{item.amount} Lessons</Text>
            </View>

        </View>
    );

    const onPressCourse = (course) => {

        navigation.navigate('course-detail', {
            courseData: course,
            courseType: 'video'
        })
    }


    return (
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: '900',
                margin: 10,
                marginBottom: 3
            }}>
                Recommended for you
            </Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default VideoCourse