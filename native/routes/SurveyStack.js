import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Survey from '../screens/Survey';
import SurveyCompleted from '../screens/SurveyCompleted';

const Stack = createStackNavigator();

const SurveyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Survey"
        component={Survey}
      />
      <Stack.Screen
        name="SurveyCompleted"
        component={SurveyCompleted}
      />
    </Stack.Navigator>
  )
}

export default SurveyStack;