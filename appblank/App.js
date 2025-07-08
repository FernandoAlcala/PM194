import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  ActivityIndicator,
  ScrollView,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import BookItem from './components/BookItem';
import fetchBooks from './utils/fetchBooks';

const CATEGORIES = [
  'Ficción',
  'Historia',
  'Tecnología',
  'Música',
  'Cómics',
];


export default function App() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const books = await fetchBooks(category);
      const grouped = groupByAuthor(books);
      const sectionData = Object.keys(grouped).map(author => ({
        title: author,
        data: grouped[author],
      }));
      setSections(sectionData);
    } catch (err) {
      setError('No se pudo obtener los libros. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [category]);

  const groupByAuthor = (books) => {
    const grouped = {};
    books.forEach((book) => {
      const authors = book.volumeInfo.authors || ['Autor desconocido'];
      authors.forEach(author => {
        if (!grouped[author]) grouped[author] = [];
        grouped[author].push(book);
      });
    });
    return grouped;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        {CATEGORIES.map(cat => (
          <Button
            key={cat}
            title={cat}
            onPress={() => setCategory(cat)}
            color={cat === category ? '#2196f3' : '#ccc'}
          />
        ))}
      </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}

      {!loading && !error && (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => <BookItem book={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          ListEmptyComponent={<Text>No se encontraron libros.</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
});
