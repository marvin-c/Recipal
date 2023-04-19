import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export const  MyDrawer=()=> {
  return (
    <Drawer.Navigator 
      drawerContent={(props)=>{
        return (
          <SafeAreaView style={{ flex: 1, paddingTop:20, backgroundColor: '#99f6e4'}} >
            <View style={{justifyContent:'center', alignItems: 'center', height: 140}}>
              <Image 
                style={{width:100, resizeMode: 'contain'}}
                source={require("../assets/orb.png")}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
              label="More info"
              onPress={()=> Linking.openURL('https://google.com')}
              icon={()=>(
                <Ionicons name="information" size={22} />
              )}
            />
          </SafeAreaView>
        )
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{title: 'Home', drawerIcon: ()=> <Ionicons name="home" size={22} />}}/>
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{title: 'Profiles', drawerIcon: ()=> <MaterialCommunityIcons name="face-man-profile" size={22} />}}/>

    </Drawer.Navigator>
  );
}