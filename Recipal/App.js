import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignupScreen';
import AboutUsScreen from './Screens/AboutUsScreen';
import UserAgreement from './Screens/UserAgreement';
import UserProfile from './Screens/UserProfile';
import HomeScreen from './Screens/HomeScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import SearchScreen from './Screens/SearchScreen';
import RecipePage from './Screens/RecipePage';
import ProfileEdit from './Screens/ProfileEditScreen';
import CustomSideMenu from './Components/SideMenu';
import AddRecipe from './Components/AddRecipe';
import ProfileButton from './Components/ProfileButton';
import BackButton from './Components/BackButton';
import UserRecipe from './Screens/UserRecipeScreen';
import HomeButton from './Components/HomeButton';
import ThemeProvider from './Components/ThemeContext'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserAgreement"
          component={UserAgreement}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipePage"
          component={RecipePage}
          options={{ headerShown: false }}
        />        
        <Stack.Screen
          name='Profile'
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomSideMenu"
          component={CustomSideMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ProfileEdit'
          component={ProfileEdit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddRecipe"
          component={AddRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileButton"
          component={ProfileButton}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BackButton"
          component={BackButton}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserRecipe"
          component={UserRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeButton"
          component={HomeButton}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;