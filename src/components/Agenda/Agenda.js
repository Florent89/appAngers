import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Card, CardTitle} from 'react-native-material-cards';
import data from '../../data/Angers_Events.json';

const Agenda = ({navigation}) => {
  const item = data.records;

  const AgendaItem = ({item}) => {
    if (item.fields.tags) {
      const tags = item.fields.tags;
      const tagsTranform = tags.split(',');

      const subtitle =
        item.fields.address + '\n' + '#' + tagsTranform.join(' ,#');

      return (
        <View style={styles.container} id={item.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AgendaDetails', {item: item})}>
            <Card mediaSource={{uri: item.fields.image}} style={{margin: 10}}>
              <CardTitle
                subtitleAbove={false}
                title={item.fields.title}
                subtitle={subtitle}
              />
            </Card>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AgendaDetails', {item: item})}>
            <Card mediaSource={{uri: item.fields.image}} style={{margin: 10}}>
              <CardTitle
                subtitleAbove={false}
                title={item.fields.title}
                subtitle={item.fields.address}
              />
            </Card>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderItem = ({item}) => <AgendaItem item={item} />;

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View>
        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={item => item.recordid}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#B0BEC5',
    textAlign: 'center',
  },
});

export default Agenda;
