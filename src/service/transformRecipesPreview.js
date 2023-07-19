export const transformRecipesPreview = (rawRecipesData) => {
    const recipesPreview = rawRecipesData.recipeCollection.items
        .map(recipe => ({
            id: recipe.sys.id,
            title: recipe.title,
            imageUrl: recipe.photo.url
        }));

    return recipesPreview;
}