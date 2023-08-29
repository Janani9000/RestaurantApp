// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    marginTop: 4,
    color: 'gray',
  },
  reviewContainer: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
});

export default styles;
