import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Recipe } from '../../models/RecipeModel';
import styles from '../../styles/styles';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <TouchableOpacity>
      <View style={styles.recipeCard}>
        <Image
          source={{ uri: recipe.image || 'https:/cdn.dummyjson.com/recipe-images/1.webp' }}
          style={styles.recipeImage}
        />
        <Text style={styles.recipeTitle}>{recipe.title || 'Food Menu'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
