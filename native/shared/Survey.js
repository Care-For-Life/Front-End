import React from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';


export default class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answersSoFar: '', survey: props.survey }
  }

  // Submit button
  onSurveyFinished(answers) {

    const infoQuestionsRemoved = [...answers]

    const answersAsObj = {};
    for (const el of infoQuestionsRemoved) { 
      answersAsObj[el.questionId] = el.value 
    }
    this.props.navigation.navigate('PersonSurvey', { surveyAnswers: answersAsObj })

    // STORE SURVEY TO ASYNC STORAGE HERE
  }

  // Stores each answer to state
  onAnswerSubmitted(answer) {
    this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
  }

  // Renders previous problem
  renderPreviousButton(onPress, enabled) {
    return (
        <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
            <Button
                color='blue'
                onPress={onPress}
                disabled={!enabled}
                backgroundColor='blue'
                title={'Previous'}
            />
        </View>
    );
  }

  // Renders next question
  renderNextButton(onPress, enabled) {
    return (
        <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
            <Button
                color='blue'
                onPress={onPress}
                disabled={!enabled}
                backgroundColor='blue'
                title={'Next'}
            />
        </View>
    );
  }

  // Renders the last button
  renderFinishedButton(onPress, enabled) {
    return (
        <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
            <Button
                title={'Finished'}
                onPress={onPress}
                disabled={!enabled}
                color='blue'
            />
        </View>
    );
  }

  // Renders button
  renderButton(data, index, isSelected, onPress) {
    return (
        <View
            key={`selection_button_view_${index}`}
            style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
        >
            <Button
                title={data.optionText}
                onPress={onPress}
                color={isSelected ? 'blue' : 'black'}
                style={isSelected ? { fontWeight: 'bold' } : {}} 
                key={`button_${index}`}
            />
        </View>
    );
  }

  // Renders question
  renderQuestionText(questionText) {
    return (
        <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text numLines={1} style={styles.questionText}>{questionText}</Text>
        </View>
    );
  }

  // Renders input component for multiline questions
  renderTextBox(onChange, value, placeholder, onBlur) {
    return (
        <View>
            <TextInput
                style={styles.textBox}
                onChangeText={text => onChange(text)}
                numberOfLines={1}
                underlineColorAndroid={'white'}
                placeholder={placeholder}
                placeholderTextColor={'rgba(184,184,184,1)'}
                value={value}
                multiline
                onBlur={onBlur}
                blurOnSubmit
                returnKeyType='done'
            />
        </View>
    );
  }

  // Renders input component for questions of type NumericInput
  renderNumericInput(onChange, value, placeholder, onBlur) {
    return (<TextInput 
        style={styles.numericInput}
        onChangeText={text => { onChange(text); }}
        underlineColorAndroid={'white'}
        placeholderTextColor={'rgba(184,184,184,1)'}
        value={String(value)}
        placeholder={placeholder}
        keyboardType={'numeric'}
        onBlur={onBlur}
        maxLength={3}
    />);
  }

  // Displays question
  renderInfoText(infoText) {
    return (
        <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text style={styles.infoText}>{infoText}</Text>
        </View>
    );
  }

  render() {
    return (
      <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
        <View style={styles.container}>
          <SimpleSurvey
            ref={(s) => { this.surveyRef = s; }}
            survey={this.state.survey}
            renderSelector={this.renderButton.bind(this)}
            containerStyle={styles.surveyContainer}
            selectionGroupContainerStyle={styles.selectionGroupContainer}
            navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
            renderPrevious={this.renderPreviousButton.bind(this)}
            renderNext={this.renderNextButton.bind(this)}
            renderFinished={this.renderFinishedButton.bind(this)}
            renderQuestionText={this.renderQuestionText}
            onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
            onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
            renderTextInput={this.renderTextBox}
            renderNumericInput={this.renderNumericInput}
            renderInfo={this.renderInfoText}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      minWidth: '70%',
      maxWidth: '90%',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      
      elevation: 20,
      borderRadius: 10,
      flex: 1, 
  },
  answersContainer: {
      width: '90%',
      maxHeight: '20%',
      marginTop: 50,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 20,
      backgroundColor: 'white',
      elevation: 20,
      borderRadius: 10,
  },
  surveyContainer: {
      width: 'auto',
      alignSelf: 'center',
      backgroundColor: 'white',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      alignContent: 'center',
      padding: 5,
      flexGrow: 0,
  },
  selectionGroupContainer: {
      flexDirection: 'column',
      backgroundColor: 'white',
      alignContent: 'flex-end',
  },
  background: {
      flex: 1,
      minHeight: 800,
      maxHeight: 800,
      justifyContent: 'center',
      alignItems: 'center',
  },
  questionText: {
      marginBottom: 20,
      fontSize: 20
  },
  textBox: {
      borderWidth: 1,
      borderColor: 'rgba(204,204,204,1)',
      backgroundColor: 'white',
      borderRadius: 10,
      
      padding: 10,
      textAlignVertical: 'top',
      marginLeft: 10,
      marginRight: 10
  },
  numericInput: {
      borderWidth: 1,
      borderColor: 'rgba(204,204,204,1)',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      marginLeft: 10,
      marginRight: 10
  },
  infoText: {
      marginBottom: 20,
      fontSize: 20,
      marginLeft: 10
  },
});