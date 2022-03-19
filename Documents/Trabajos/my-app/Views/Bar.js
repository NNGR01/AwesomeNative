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
import { Card, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Bar = (props) => {
  const navigations = useNavigation();
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

  const navigation = useNavigation();
  console.log(pokemons)
  return (
    <View style={{ backgroundColor: "darkred" }}>
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
                <Card key={index} style={{ backgroundColor: "red" }}>
                  <Card.Title>{pokemon.name}</Card.Title>
                
                  <Card.Divider />
                  <Card.Image
                    style={styles.card}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => 
                      navigations.navigate("Card" ,{
                      pokemon : pokemon.name,
                    })}
                    style={{
                      backgroundColor: "black",
                      width: "50%",
                      alignSelf: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Stats
                    </Text>
                  </TouchableOpacity>
                </Card>
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
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  card: {
    width: 100,
    height: 100,
  },
});

export default Bar;

/* props.navigation.navigate('Details',{pokemon : pokemon.name} */

{
  /*   <TouchableOpacity
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
                </TouchableOpacity> */
}
