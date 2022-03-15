import { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView,  TouchableOpacity, Image } from "react-native";
import { SearchBar } from "react-native-elements";

const Bar = props => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() =>{
    fetchPokemons();
  },[])

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(pokemons => setPokemons(pokemons.results));
  };


  return (
    <View>
      <View style={styles.box} >
      <SearchBar
        style={{margin : 0}}
        placeholder="Search Pokemons"
        onChangeText={value => setSearch(value)}
        value={search}
      />
    </View>

<ScrollView>
<View style={styles.seeker}>
    {
      pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
          <TouchableOpacity
          activeOpacity={0.5}
          key={index}
          style={styles.box}
          onPress={() => console.log('hello')
          }>
  <Image 
    style={{width : 150 , height : 150}}
    source={{
      uri :
   `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
    }}
  />
  <Text>{pokemon.name} </Text>
          </TouchableOpacity>
        )
      })
    }
</View>
</ScrollView>

    </View>
  );
};
 const styles = StyleSheet.create({
  seeker: {
    marginTop : 20,
        width : '50%',
        display: 'flex',
        height : 150,
        justifyContent: 'center'
        
  }, 
  box : {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  }
  
}); 

export default Bar;

/* props.navigation.navigate('Details',{pokemon : pokemon.name} */