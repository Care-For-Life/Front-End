import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {annualFamily} from '../surveys/annualFamily';
import Survey from '../shared/Survey';

export default class FamilySurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answersSoFar: '' }
  }
  
  render() {
    
    return (
      <View>
        <Survey 
          survey={annualFamily} 
          navigation={this.props.navigation}
        />
        <ScrollView>
          <Text style={{textAlign:'center'}}>JSON output</Text>
          <Text>{this.state.answersSoFar}</Text>
        </ScrollView>
      </View>
    )
  }
}

