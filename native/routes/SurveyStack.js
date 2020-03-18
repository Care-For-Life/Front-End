import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SurveyCompleted from '../screens/SurveyCompleted';
import Header from '../shared/Header';
import FamilySurvey from '../screens/FamilySurvey';
import PersonSurvey from '../screens/PersonSurvey';

const Stack = createStackNavigator();

const SurveyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FamilySurvey"
        component={FamilySurvey}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="Family Survey"/>
          }
        }}
      />
      <Stack.Screen
        name="PersonSurvey"
        component={PersonSurvey}
      />
      <Stack.Screen
        name="SurveyCompleted"
        component={SurveyCompleted}
      />
    </Stack.Navigator>
  )
}

export default SurveyStack;