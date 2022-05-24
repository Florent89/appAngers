import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import data from '../../data/Angers_Musees.json';
import Ionicons from '../../../node_modules/react-native-vector-icons/dist/Ionicons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLandmark} from '@fortawesome/free-solid-svg-icons';

const Museum = () => {
  const item = data.records;

  const MuseumItem = ({item}) => {
    return (
      <View style={styles.container} id={item.id}>
        <View style={styles.logo}>
          <FontAwesomeIcon icon={faLandmark} size={32} color="grey" />
        </View>
        <View style={styles.description}>
          <Text style={styles.text}> {item.fields.nomoff}</Text>
          <Text style={styles.text}>
            <Ionicons name="location" style={{textAlign: 'center'}} size={20} />{' '}
            {item.fields.adrl1_m} {item.fields.cp_m} {item.fields.ville_m}
          </Text>
          <Text style={styles.textEnd}>
            <Ionicons name="call" style={{textAlign: 'center'}} size={20} />{' '}
            {item.fields.tel_m}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => <MuseumItem item={item} />;

  return (
    <View nestedScrollEnabled={true}>
      <View style={{marginTop: 20}}>
        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={item => item.recordid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    textAlign: 'center',
    borderBottomWidth: 2,
    margin: 10,
  },
  description: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  textEnd: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Museum;
