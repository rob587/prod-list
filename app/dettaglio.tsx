import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Dettaglio() {
  const { id, nome, prezzo } = useLocalSearchParams();

  return (
    <View style={styles.contenitore}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.prezzo}>{prezzo}</Text>
      <Text style={styles.id}>ID prodotto: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  nome: { fontSize: 32, fontWeight: "500" },
  prezzo: { fontSize: 24, color: "#4f46e5" },
  id: { fontSize: 14, color: "#888" },
});
