import React from "react";

const SearchBar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search Movie"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
