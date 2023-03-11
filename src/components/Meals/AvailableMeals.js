import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const food= [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];



const AvailableMeals = () => {
  const mealList = food.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

//my name is krishna
  
const submit = ()=>{
  fetch("https://meals-b0dce-default-rtdb.firebaseio.com/food.json/",
  {
    "method": 'POST',
  
    headers: {
      'Content-Type': 'application/json'
    },  
    body: JSON.stringify(food)
  } ).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}

const mealsHandler = () => {
  fetch("https://meals-b0dce-default-rtdb.firebaseio.com/food.json/")
  .then(response => response.json())
  .then(data => {
    const food = Object.values(data);
    console.log(food)
    // Do something with the food array
  })
  .catch(error => console.error(error));


}
  return (
    <section className={classes.meals}>
      <ul>
        <button onClick={submit}>submit</button>
        <button onClick={mealsHandler}>Add New meals</button>
        <Card>{mealList}</Card>
      </ul>
    </section>
  );
};
export default AvailableMeals;
