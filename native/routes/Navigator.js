import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeSatck from './HomeStack';
import SurveyStack from './SurveyStack';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeSatck}/>
        <Drawer.Screen name="FamilySurvey" component={SurveyStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;