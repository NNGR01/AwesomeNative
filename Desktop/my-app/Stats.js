


import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { Text, View } from 'react-native';


const Stats = props => {

    const [stats, setStats] = useState([]);
    
    const fetchPokemonsStats = () => {
        const { id } = props.navigation;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id.params.pokemons}`)
        .then(res = res.json())
        .then(stats => setStats(stats));
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