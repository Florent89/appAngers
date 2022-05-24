import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Card, CardTitle} from 'react-native-material-cards';
import data from '../../data/Angers_News.json';

const News = ({navigation}) => {
  const item = data.articles;

  const NewsItem = ({item}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetails', {item: item})}>
          <Card
            mediaSource={{uri: item.image}}
            style={{margin: 10, borderRadius: 15}}>
            <CardTitle
              subtitleAbove={false}
              title={item.title}
              titleStyle={styles.cardTitle}
            />
          </Card>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => <NewsItem item={item} />;

  return (
    <View nestedScrollEnabled={true}>
      <View>
        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={item => item.url}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderRadius: 15,
  },
  cardTitle: {
    textAlign: 'center',
  },
});

export default News;
