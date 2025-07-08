import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const BookItem = ({ book }) => {
  const [showDescription, setShowDescription] = useState(false);
  const info = book.volumeInfo;

  const description = info.description || '';

  return (
    <ScrollView style={styles.item}>
      {info.imageLinks?.thumbnail && (
        <Image
          source={{ uri: info.imageLinks.thumbnail }}
          style={styles.image}
        />
      )}
      <Text style={styles.title}>{info.title}</Text>
      <Text>{info.publisher}</Text>

      {showDescription && (
        <Text style={styles.description}>
          {description}
        </Text>
      )}

      {description.length > 0 && (
        <Button
          title={showDescription ? 'Ver menos' : 'Ver más'}
          onPress={() => setShowDescription(!showDescription)}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eaf3fc',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 8,
  },
  description: {
    marginTop: 5,
    fontSize: 12,
    color: '#555',
  },
});

export default BookItem;
