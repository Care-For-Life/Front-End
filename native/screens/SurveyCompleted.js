import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SurveyCompleted = (props) => {
    const answers = props.route.params.surveyAnswers;
    console.log(answers)
    
    return (
      <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.questionText}>The results are in!</Text>
                        <Text style={styles.questionText}>Community: {answers.community_name}</Text>
                        <Text style={styles.questionText}>Family: {answers.family_name}</Text>
                        <Text style={styles.questionText}>Is it a family of orphans: {answers.orphans.value}</Text>
                        <Text style={styles.questionText}>Is it a family with vulnerable children: {answers.vulnerable_children.value}</Text>
                        <Text style={styles.questionText}>Is it a family led by children (without adults): {answers.led_by_children.value}</Text>
                        <Text style={styles.questionText}>Number of births since last survey or in last 6 months (if 1st survey): {answers.number_of_births}</Text>
                        <Text style={styles.questionText}>Number of deaths since last survey or in last 6 months (if 1st survey): {answers.number_of_deaths}</Text>
                        <Text style={styles.questionText}>Total number of persons that live in the house: {answers.number_of_people}</Text>
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