import {useState,useEffect} from "react"
import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { useRoute,useNavigation } from '@react-navigation/native';
import CourseContent from "../Components/CourseContent";


export default function CourseDetails() {
  const item = '';
  const course = useRoute().params.item;
  // const navigation = useNavigation();
  // console.log(course)

  const [datacourse, setCourse] = useState([]);
  // const [userProgress, setUserProgress] = useState([]);
  // const { userData, setUserData } = useContext(AuthContext);
  // const [courseDetails, setcourseDetails] = useState([]);

  useEffect(() => {
    // setCourse(course?.courseData);
    // course.courseData.id ? getCourseProgress() : null;

    // Fetch data from /slider/:sliderid endpoint
    if (course?.id) {
      fetchSliderDetails(course.id);
    }
  }, [course.id]);


  const fetchSliderDetails = (sliderId) => {
    // Gantilah URL berikut dengan URL yang sesuai pada backend Anda
    const sliderDetailsUrl = `https://hrh-course.up.railway.app/slider/${sliderId}`;
    fetch(sliderDetailsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCourse(data)
      })
      .catch((error) => {
        console.error('Error fetching slider details:', error);
      });
  };
   
  
  return (
    <View style={{padding:20,paddingTop:20}}>
        <View>
            <Text style={{fontSize:36,
            fontWeight:'900'}}>{datacourse.name}</Text>
            <Text style={{color:Colors.grey}}>created : {datacourse.createdAt}</Text>
            <Image source={{uri:`https://hrh-course.up.railway.app/slider/course/${datacourse.imageUrl}`}} 
            style={{height:200,marginTop:10,borderRadius:10}} />
            <View style={{
              marginTop: 20,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: Colors.grey
            }}>
              <Text style={{marginTop:10,
                fontSize:20, fontWeight:'bold'}}>About Course</Text>
              <Text numberOfLines={4} 
              style={{color:Colors.grey,
                fontSize:14, fontWeight:'bold'}}>{datacourse.description}</Text>
            </View>
        </View>
        <CourseContent coursedetail={datacourse.sliderDetails}/>
    </View>
  )
}
