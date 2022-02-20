import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      maxWidth: 400,
    },
    field: {
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
    },
    input: {
      marginLeft: 10,
    },
    radio: {
      marginTop: 10,
      marginBottom: 10,
    },
    button: {
      padding: 50,
    },
    header: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'blue',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    hidden: {
      display: 'none',
    },
    low: {
      textAlign: 'center',
      color: 'green',
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 20,
    },
    medium: {
      textAlign: 'center',
      color: 'gold',
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 20,
    },
    high: {
      textAlign: 'center',
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 20,
    },
  });