import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'
import VideoCourse from '../Components/VideoCourse'
import LessonCourse from '../Components/LessonCourse'


const Home = ({route}) => {

    const user = route.params?.user;

    return (
        <ScrollView style={{padding:20}}>
            <WelcomeHeader user={user}/>
            {/* <SearchBar/> use if needed */}
            <Slider/>
            <VideoCourse />
            <LessonCourse/>
        </ScrollView>
    )
}

export default Home
