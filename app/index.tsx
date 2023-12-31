import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";

export default function Page() {
  return (
    <Redirect href="/chat" />
    // <View style={styles.container}>
    //   <View style={styles.main}>
    //     <Text style={styles.title}>Hello Start</Text>
    //     <Link href="/chat">
    //       <Text style={styles.subtitle}>Chat</Text>
    //     </Link>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
