import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SurveyCompleted = (props) => {
  const answers = props.route.params.surveyAnswers;
  console.log(answers.family_name)
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.questionText}>The results are in for family {answers.family_name}!</Text>
          <Text>Raw JSON: {JSON.stringify(answers)}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple',
  },
  container: {
      minWidth: '70%',
      maxWidth: '90%',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: 'white',
      elevation: 20,
      borderRadius: 10,
      maxHeight: '80%',
  },
  questionText: {
      marginBottom: 20,
      fontSize: 20
  },
});

export default SurveyCompleted;