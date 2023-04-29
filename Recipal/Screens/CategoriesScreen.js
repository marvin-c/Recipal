import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, StyleSheet, FlatList, Dimensions, Image} from 'react-native';
import SearchBar from '../Components/SearchBar';
import CustomSideMenu from '../Components/SideMenu';
import ProfileButton from '../Components/ProfileButton';
import HomeButton from '../Components/HomeButton';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://192.9.174.169/api/categories/');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const numColumns = 3;
  const titleWidth = Dimensions.get('window').width / numColumns;

  const renderCategory = ({ item }) => (
    <View style={styles.category}>
      <View style={styles.categoryImageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recipal</Text>
      </View>
      <View style={{marginEnd: 70}}>
        <SearchBar />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={styles.headerContainer}
      />
      
      <ProfileButton />
      <HomeButton />
      <CustomSideMenu />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerContainer: {
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'DancingScript-Regular',
    fontWeight: '600',
    fontSize: 40,
    color: 'black',
  },
  flatListContainer: {
    paddingTop: 10,
    paddingBottom: 100,
  },
  category: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 100,
    height: 120,
    flexDirection: 'column',
    alignItems: 'center'
  },  
  categoryImageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100 - 10,
    height: 120 - 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: '45%',
  },
  
});

export default CategoriesScreen;
