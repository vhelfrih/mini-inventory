import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddItems(props) {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredAmount, setEnteredAmount] = React.useState(null);
  const [enteredPlace, setEnteredPlace] = React.useState("");
  const [enteredDate, setEnteredDate] = React.useState("");
  const [enteredCategory, setEnteredCategory] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({
      title: enteredTitle,
      amount: enteredAmount,
      place: enteredPlace,
      date: enteredDate,
      category: enteredCategory,
    });
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredPlace("");
    setEnteredDate("");
    setEnteredCategory("");
  };

  return (
    // <Box display="flex">
    // <Box >
    <form onSubmit={submitHandler}>
      <Grid container justify="space-between" spacing={2}>
        <Grid item xs={2} sm={4} md={4}>
          <TextField
            label="Name"
            id="outlined-size-small"
            placeholder="Name"
            size="small"
            value={enteredTitle}
            onChange={(e) => {
              setEnteredTitle(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <TextField
            label="Amount"
            id="outlined-size-small"
            placeholder="Amount"
            size="small"
            value={enteredAmount}
            onChange={(e) => {
              setEnteredAmount(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Place</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={enteredPlace}
              label="Place"
              onChange={(e) => {
                setEnteredPlace(e.target.value);
              }}
              style={{
                width: "25ch",
                height: "44px",
              }}
            >
              <MenuItem value={"basement"}>Basement</MenuItem>
              <MenuItem value={"pantry"}>Pantry</MenuItem>
              <MenuItem value={"attic"}>Attic</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2} sm={4} md={6}>
          <InputLabel id="date"></InputLabel>
          <TextField
            id="date"
            labelId="date"
            label="Expiry Date"
            type="date"
            value={enteredDate}
            onChange={(e) => {
              setEnteredDate(e.target.value);
            }}
            defaultValue="2021-12-31"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={enteredCategory}
              label="Category"
              onChange={(e) => {
                setEnteredCategory(e.target.value);
              }}
              style={{
                width: "25ch",
                height: "44px",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            >
              <MenuItem value={"dessert"}>Dessert</MenuItem>
              <MenuItem value={"drink"}>Drink</MenuItem>
              <MenuItem value={"cat food"}>Cat Food</MenuItem>
              <MenuItem value={"canned"}>Canned</MenuItem>
              <MenuItem value={"jam"}>Jam</MenuItem>
              <MenuItem value={"grains"}>Grains</MenuItem>
              <MenuItem value={"dairy"}>Dairy</MenuItem>
              <MenuItem value={"eggs"}>Eggs</MenuItem>
              <MenuItem value={"pickled"}>Pickled</MenuItem>
              <MenuItem value={"frozen"}>Frozen</MenuItem>
              <MenuItem value={"vegetable"}>Vegetable</MenuItem>
              <MenuItem value={"vegetable"}>Vinegar</MenuItem>
              <MenuItem value={"vitamin"}>Vitamin</MenuItem>
              <MenuItem value={"vegetable"}>Toilet Paper</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          my="10px"
        >
          {/* <Grid item > */}
            <Button type="submit" style={{ width: "20%", height: "40px" }}>
              Add Item
            </Button>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </form>
    //   </Box>
    // </Box>
  );
}
