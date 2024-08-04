import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, setFilterValue }) => {
  const handleFilter = (searchEvent) => {
    setFilterValue(searchEvent.target.value);
  };

  return (
    <form className={css.form}>
      <label htmlFor="find">Find contacts by name</label>
      <input
        type="text"
        id="find"
        onChange={handleFilter}
        value={filterValue}
        required
      />
    </form>
  );
};

export default SearchBox;
