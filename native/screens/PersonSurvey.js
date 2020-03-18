import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {annualPerson} from '../surveys/annualPerson';
import Survey from '../shared/Survey';

export default class PersonSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answersSoFar: '' }
  }
  
  render() {
    return (
      <View>
        <Survey survey={annualPerson} navigation={this.props.navigation}/>
        <ScrollView>
          <Text style={{textAlign:'center'}}>JSON output</Text>
          <Text>{this.state.answersSoFar}</Text>
        </ScrollView>
      </View>
    )
  }
}