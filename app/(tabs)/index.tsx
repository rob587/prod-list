import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
const prodotti = [
  { id: "1", nome: "iPhone", prezzo: "999€" },
  { id: "2", nome: "MacBook", prezzo: "1299€" },
  { id: "3", nome: "AirPods", prezzo: "199€" },
];

export default function Home() {
  return (
    <View style={styles.contenitore}>
      <FlatList
        data={prodotti}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push(
                `/dettaglio?id=${item.id}&nome=${item.nome}&prezzo=${item.prezzo}`,
              )
            }
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.prezzo}>{item.prezzo}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: { flex: 1, padding: 16 },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  nome: { fontSize: 18, fontWeight: "500" },
  prezzo: { fontSize: 14, color: "#888", marginTop: 4 },
});
