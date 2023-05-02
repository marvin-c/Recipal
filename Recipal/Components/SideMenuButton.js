import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, Modal, TouchableHighlight,} from "react-native";
import { FontAwesome, Feather } from 'react-native-vector-icons';
import CustomSideMenu from "./SideMenu";

const SideMenuButton = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
        <View style={styles.container}>
            <View style={styles.screen}>
                <TouchableHighlight style={styles.buttonP}
                underlayColor="rgba(255, 200, 0, 0.75)" //Downpress button
                onPress={() => setShowMenu(!showMenu)}>
                <FontAwesome name="navicon" size={20} color="black" />
                </TouchableHighlight>
            </View>
        </View>
        <Modal animationType="slide" transparent visible={showMenu} onRequestClose={() => setShowMenu(false)}>
            <CustomSideMenu onClose={() => setShowMenu(false)} />
        </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: '30%',
    right: '0%', // adjust as needed
    zIndex: 2, // ensure the button appears on top of other content
  },
  screen: {
    marginTop: '0%',
  },
  buttonP:{
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 25,
    borderBottomLeftRadius: 25,
    height: 40,
    width: 50,
    backgroundColor: '#FFC800',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8 ,
    shadowRadius: 2,
    elevation: 4,
  },
})

export default SideMenuButton;
