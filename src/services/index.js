export const treatsRecipeDone = () => JSON.parse(localStorage.getItem('doneRecipes'));

export const arrRecipesFilter = (arrOfObj, filterChosen) => {
  let result = arrOfObj;
  if (filterChosen !== 'all') result = arrOfObj.filter((el) => el.type === filterChosen);

  return result;
};
