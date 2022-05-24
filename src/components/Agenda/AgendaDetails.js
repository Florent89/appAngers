import React from 'react';

import {ScrollView, StyleSheet, Text, View, Image, Button} from 'react-native';
import {CardImage} from 'react-native-material-cards';
import Ionicons from '../../../node_modules/react-native-vector-icons/dist/Ionicons';

const AgendaDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title="Retour à la liste des évènements"
          onPress={() => navigation.popToTop()}
        />
        <CardImage
          source={{uri: item.fields.image}}
          style={{width: 350, marginLeft: 20}}
        />
        <Text style={styles.textTitle}> {item.fields.title}</Text>
        <Text style={styles.textInfo}>
          {item.fields.space_time_info} {'\n'} {'\n'}
          {item.fields.description} {'\n'}
          {'\n'} {item.fields.free_text}
        </Text>
        <View style={styles.cardAddress}>
          <Ionicons name="location" style={{textAlign: 'center'}} size={40} />
          <Text style={styles.cardText}>
            {item.fields.address} {'\n'} {'\n'} {item.fields.placename}
          </Text>
        </View>
        <Button
          title="Retour à la liste des évènements"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  cardAddress: {
    borderWidth: 1,
    width: 250,
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 20,
  },
  textInfo: {
    fontSize: 20,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: '600',
  },
});

export default AgendaDetails;
