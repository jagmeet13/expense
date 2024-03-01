import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '100%',
    height: '100vh',
  },

  AddExpenseText: {
    textAlign: 'center',
    color: 'red',
    fontWeight: '600',
  },

  subContainer: {
    padding: 10,
    width: '100%',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  button: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
