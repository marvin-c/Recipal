import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
// import fetch from "node-fetch";

const HomeScreen = () => {
    // const navigation = useNavigation()
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)

    const handleRefresh = () => {
        console.log('refreshing')
        setRefresh(prevState => !prevState)
    }
    useEffect(()=>{
        fetchData()
    }, [refresh])

    const fetchData = async() => {
        // const response = await fetch('http://192.168.18.11:8000/api/events/')
        // const response = await fetch('http://192.168.72.127:8000/api/events/')
        const response = await fetch('http://192.168.72.127:8000/api/rcpl_app/')

        const data = await response.json()
        setData(data)
    }
    // async function fetchData() {
    //     try {
    //         const response = await fetch('http://192.168.18.11:8000/api/events/');
    //         const data = await response.json();
    //         // handle data
    //         setData(data)

    //     } catch (error) {
    //         console.error(error);
    //     }
    //   }


    return (
        <View style={styles.screen}>
            <EventList data={data} onRefresh={handleRefresh} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;