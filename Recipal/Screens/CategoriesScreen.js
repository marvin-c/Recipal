import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import CustomSideMenu from './SideMenu';
import ProfileButton from './ProfileButton';
import BackButton from './BackButton';

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
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recipal</Text>
      </View>
      <SearchBar />
      <View>
        <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
      </View>
    </ScrollView>
    <View style={styles.sideMenuContainer}>
        <CustomSideMenu />
    </View>
    <BackButton />
    <ProfileButton />
      <View style={styles.sideMenuContainer}>
        <CustomSideMenu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuContainer:{
    flex: 1,
        bottom: '79.3%'
      },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'DancingScript-Regular',
    fontWeight: '600',
    fontSize: 40,
    color: 'black',
  },
  container: {
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
  },
  image: {
    width: 100 - 10,
    height: 120 - 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoriesScreen;
