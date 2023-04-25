import { Text, View, FlatList, StyleSheet } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import CategoriesItem from "./categories-item";

const CategoriesList = () => {
    const renderItem = ({item}) => {
        return <View><CategoriesItem id={item.id} title={item.title} description/></View>
    }
        return (
            <View>
                <FlatList
                data={DUMMY_DATA}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                numColumns={3}
                />
            </View>
        );
    }


export default CategoriesList;