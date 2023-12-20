import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useRef } from 'react'
import Colors from '../Shared/Colors';
import YoutubeIframe from 'react-native-youtube-iframe';

const data = [
    { 
        id: '1',
        image: require('../Assets/colors1.png'), 
        name: 'Colors Lessons Part 1', 
        amount: '8', 
        author: 'Little Academy TV', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        youtubeId: 'E1mW7nqC8Ck'
    },
]

const LessonsDetails = () => {
    const lesson = data[0];

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={{padding:30,paddingTop:30}}>
            
            <View>
                <Text style={{fontWeight:'900', fontSize:30}}>
                    {lesson.name}
                </Text>
                <Text style={{color:Colors.grey, marginBottom:20}}>
                    By {lesson.author}
                </Text>
                <YoutubeIframe
                    height={200}
                    play={playing}
                    videoId={lesson.youtubeId}
                    onChangeState={onStateChange}
                />
                <Text style={{marginTop:20, marginBottom:5, fontSize:20, fontWeight:'900'}}>
                    About Course
                </Text>
                <Text numberOfLines={4} style={{color:Colors.grey}}>
                    {lesson.description}
                </Text>
            </View>
        </View>
    )
}



export default LessonsDetails