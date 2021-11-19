import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const Search = React.memo((props) => {
  const { onLoadIngredients, rows } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  //************ */
  // const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  //*************// */

  useEffect(() => {
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch(
      "https://react-hooks-update-a3d8d-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json" +
        query
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
        onLoadIngredients(loadedIngredients);
      });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      {/* <Card>
        <div className="search-input">
          <label>Search by Name</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card> */}

      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          value={enteredFilter}
          onChange={(event) => setEnteredFilter(event.target.value)}
          getOptionLabel={(option) => rows.title}
          options={rows.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </section>
  );
});

export default Search;
