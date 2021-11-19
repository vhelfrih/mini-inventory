import { useState, useEffect } from "react";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import Brightness2TwoToneIcon from "@mui/icons-material/Brightness2TwoTone";
import EnhancedTable from "./components/Ingredients/EnhancedTable";
import AddItems from "./components/Ingredients/AddIngredient";
import { CssBaseline, Grid } from "@mui/material";
import ButtonAppBar from "./components/UI/Header";

const App = (props) => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(getInitialMode());

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  useEffect(() => {
    fetch(
      "https://react-hooks-update-a3d8d-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
            place: responseData[key].place,
            date: responseData[key].date,
            category: responseData[key].category,
          });
        }
        setRows(loadedIngredients);
      });
  }, []);

  // const filteredIngredientsHandler = useCallback((filteredIngredients) => {
  //   setRows(filteredIngredients);
  // }, []);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch(
      "https://react-hooks-update-a3d8d-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        setRows((prevIngredients) => [
          ...prevIngredients,
          { id: ingredient.id, ...ingredient },
        ]);
      });
  };

  const removeItemHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://react-hooks-update-a3d8d-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setIsLoading(false);
      setRows((prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
      );
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <CssBaseline />
        <ButtonAppBar />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          overflow="hidden"
          my="10px"
        >
          <Grid item>
            <WbSunnyTwoToneIcon
              style={darkMode ? { color: "yellow" } : { color: "salmon" }}
            />
          </Grid>
          <Grid item>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Grid>
          <Grid item>
            <Brightness2TwoToneIcon
              style={darkMode ? { color: "salmon" } : { color: "yellow" }}
            />
          </Grid>
        </Grid>

        {/* <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="space-between"
          spacing={2}
          my="10px"
        > */}
          {/* <Grid item> */}
            <AddItems
              onAddIngredient={addIngredientHandler}
              loading={isLoading}
            />
          {/* </Grid> */}

          <Grid item justifyContent="center" alignItems="center">
            <EnhancedTable rows={rows} onRemoveItem={removeItemHandler} />
          </Grid>
        {/* </Grid> */}
      </Paper>
    </ThemeProvider>
  );
};

export default App;
