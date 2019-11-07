class Meal {
    constructor(id,catgoryIds,title,affordablity,complexity,imageUrl,duration,ingredients,steps,isGluternFree,isVegan,isVegetarian,isLactoseFree) {
        this.id = id;
        this.title = title;
        this.categoryIds = catgoryIds;
        this.affordablity = affordablity;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGluternFree = isGluternFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;