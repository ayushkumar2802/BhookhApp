// Models/RecipeModel.ts
export class RecipeModel {
    private apiUrl = "https://api.example.com/recipes";
  
    async fetchRecipes(): Promise<any[]> {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch recipes.");
      }
      return response.json();
    }
  }
  