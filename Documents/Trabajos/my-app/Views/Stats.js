/* 
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

const Stats = props => {
  const [details, setDetails] = useState([]);
 

  useEffect(() => {
    fetchPokemonDetails();
  }, []);
 console.log(props)
  const fetchPokemonDetails = () => {
     
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  };

  return details.name ? (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
            details.name
          }.png`,
        }}
      />
      <Text style={styles.text}>Name: {details.name}</Text>
      <Text style={styles.text}>Height: {details.height}</Text>
      <Text style={styles.text}>Weight: {details.weight}</Text>
      <Text style={styles.text}>
        Ability: {details.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */




import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { Text, View } from 'react-native';


const Stats = props => {

    const [stats, setStats] = useState([]);
    
    const fetchPokemonsStats = () => { 
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        .then((response) => response.json())
      .then((stats) => setStats(stats.results));
    };
    useEffect(() =>{
        fetchPokemonsStats();
    },[]);

    
    return stats.name ? (
        <View>
            <Image 
        style={{height : 100 , width : 100}}
        source={{
            uri : `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
            details.name
          }.png`,
        }}
            />
            <Text> Name : {stats.name} </Text>
        </View>
    ) : (
        <View>
        <ActivityIndicator size="large" color="#E63F34" />
      </View>
    )
};
export default Stats; 