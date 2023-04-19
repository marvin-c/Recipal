import { Text, View, FlatList, RefreshControl } from "react-native";
// import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

const EventList = ({data, onRefresh}) => {
    const renderItem = ({item})=>{
        // return <EventItem id={item.id} name={item.name} description={item.description} qrCode={item.qr_code}/>
        return <EventItem id={item.id} title={item.title} description={item.description} />

    }
    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl 
                        refreshing={false}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
}

export default EventList;