import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const Bar = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
      <View style={styles.seeker} >
  
      <SearchBar
        style={{margin : 0}}
        placeholder="..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};
 const styles = StyleSheet.create({
  seeker: {
    marginTop : 20,
        width : '50%',
        height : 25,
        backgroundColor : 'white',
        borderRadius : 8
  }
  
}); 

export default Bar;
