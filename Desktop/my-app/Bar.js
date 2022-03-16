import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";

const Bar = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  return (
    <View>
      <View>
        <SearchBar
          style={styles.seeker}
          placeholder="Search Pokemons"
          onChangeText={(value) => setSearch(value)}
          value={search}
        />
      </View>

      <ScrollView>
        <View style={styles.box}>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.box}
                  onPress={() => console.log("hello")}
                >
                  <Image
                    style={styles.card}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text style={styles.textCard}>{pokemon.name} </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  seeker: {
    marginTop: 20,
    width: "50%",
    display: "flex",
    height: 20,
    justifyContent: "center",
    marginBottom: 15,
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: 100,
    height: 100,
  },
  textCard: {
    color: "white",
    right: "70%",
  },
});

export default Bar;

/* props.navigation.navigate('Details',{pokemon : pokemon.name} */
