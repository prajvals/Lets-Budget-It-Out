import "./ExpenseFilter.css"
import { useState } from "react";
const ExpenseFilter = (props) => {

  const [filterSelection, setFilterSelection] = useState("")

  const filterSelectionChangeHandler = (event) => {
    const presentSelection = event.target.value
    setFilterSelection(presentSelection)
    props.onFilterSelection(presentSelection)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterSelectionChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
};
export default ExpenseFilter;