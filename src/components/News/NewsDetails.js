import React from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import {CardImage} from 'react-native-material-cards';

const NewsDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title="Retour à la liste des actualités"
          onPress={() => navigation.popToTop()}
        />
        <CardImage source={{uri: item.image}} style={{width: 400}} />
        <Text style={styles.textTitle}> {item.title}</Text>
        <Text style={styles.textInfo}>
          {item.description} {'\n'} {'\n'} Lien de l'article complet : (
          {item.url})
        </Text>

        <Button
          title="Retour à la liste des actualités"
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
  textInfo: {
    fontSize: 25,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: '600',
  },
});

export default NewsDetails;
