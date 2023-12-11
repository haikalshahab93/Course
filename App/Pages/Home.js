import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'
import LessonCourse from '../Components/LessonCourse'

const Home = () => {
    return (
        <ScrollView>
            <WelcomeHeader/>
            {/* <SearchBar/> use if needed*/}
            <Slider/>
            <VideoCourseList/>
            <LessonCourse/>
        </ScrollView>
    )
}

export default Home
