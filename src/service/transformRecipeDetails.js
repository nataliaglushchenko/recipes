export const transformRecipeDetails = (response) => {
    const [recipe] = response.recipeCollection.items;
    
    const detail = {
        id: recipe.sys.id,
        title: recipe.title,
        description: recipe.description,
        chefName: recipe.chef ? recipe.chef.name : null,
        imageUrl: recipe.photo.url,
        tags: recipe.tagsCollection.items.map(tag => ({
            id: tag.sys.id,
            name: tag.name
        }))
    };

    return detail;
};
