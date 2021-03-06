import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.cost;
  }

  getIngredientsInformation(ingredientsData) {
    this.ingredients.forEach(ingredient => ingredient.retrieveNameAndCost(ingredientsData));
  }

  findIngredientsName() {
    return this.ingredients.map(ingredient => ingredient.name);
  }

  getCost() {
    let total = 0;
    this.ingredients.forEach(ingredient => {
      total = total + ingredient.cost;
    })

    const dollars = Math.round(total / 100);
    const cents = Math.round(total % 100) / 100;
    const totalCost = (dollars + cents).toFixed(2)
    this.cost = `$ ${totalCost}`;
  }

  getInstructions() {
    return this.instructions;
  }
}

export default Recipe;
