import React from "react";

const SearchPage = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchParams = Object.fromEntries(formData);
    // onSubmit(searchParams);
  };

  return (
    <>
      {console.log("Hello")}
      <form onSubmit={handleSubmit}>
        {/* Add input fields for filters */}
        <button type="submit">Search</button>
      </form>
      {/* // <div>Hi</div> */}
    </>
  );
};

export default SearchPage;
