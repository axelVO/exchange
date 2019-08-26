import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';

export default class App extends React.Component {
  state = {
    iscollapsed: true,
    collapsedText: null,
  }
  test() {
    if (this.state.collapsedText == null) {
      this.setState({
        collapsedText: <View style={{ backgroundColor: '#d6363e' }}><Text>test 1</Text><Text>test 1</Text><Text>test 1</Text></View>
      })
    }
    else {
      this.setState({ collapsedText: null })

    }
  };
  render() {
    return (


      <View style={{
        flex: 1,
        textAlignVertical: 'top',
        backgroundColor: '#d6363e',
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
      }}>
        
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 10, marginTop: 70 }}>Hey Simplonnien.ne ! Rejoins-nous vite =></Text>
        <TouchableOpacity onPress={() => this.test()} >
          <View style={{
            flex: 0.1,
            alignSelf: 'stretch',
            backgroundColor: '#2f3239',
            alignItems: 'center',
            justifyContent: 'center',
          }} >
            <Text style={{ color: '#d6363e', fontSize: 30 }}>Simplon-Exchange<Text style={{ color: '#fff' }}>.Help</Text></Text>
          </View>
        </TouchableOpacity>
        {this.state.collapsedText}
        <Text style={{ fontSize: 30, color: "#fff", textAlign: 'center' }}>Bienvenue sur </Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#fff", textAlign: 'center' }}>Exchange.Help</Text>

        <Text style={{ fontSize: 20, color: "#fff", textAlign: 'center', marginHorizontal: 50 }}>Tous les Simplonnien.ne.s débutant.e.s font face aux mêmes problèmes/bogues/erreurs, mais n'osent pas toujours demander ou ne trouvent pas toujours les bonnes réponses.
              Sois rassuré.e, ici tu es libre de poser la question que tu veux, une réponse fiable et de confiance te sera faite par un.e autre apprenant.e, un.e ancien.ne Simplonien.ne ou un formateur.
            </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#fff", marginHorizontal: 50, textAlign: 'center' }}>N'attend plus, pose ta question dès maintenant !</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', backgroundColor: 'white', width: 300, borderWidth: 1 }} />
      

      </View>
    );
  }

}