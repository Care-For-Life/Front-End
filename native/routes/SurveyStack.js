import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Survey from '../screens/Survey';

const Stack = createStackNavigator();

const SurveyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Survey"
        component={Survey}
      />
    </Stack.Navigator>
  )
}

export default SurveyStack;