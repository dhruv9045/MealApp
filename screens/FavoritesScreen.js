import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  //   const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealContext.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
