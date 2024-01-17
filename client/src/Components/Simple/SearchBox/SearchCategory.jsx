import React from "react";

const SearchCategory = ({
  categories,
  searchType,
  setSearchType,
  handleOnChange,
}) => {
  return (
    <div
      className="absolute right-0 border mt-2 w-full p-2 rounded-md shadow-xl bg-whiteColor flex flex-col divide-y-2 divide-primaryColor"
      onClick={(e) => e.stopPropagation()}
    >
      {categories.map((item) => (
        <React.Fragment key={item?.id}>
          <input
            type="radio"
            name="searchCategory"
            id={item?.id}
            value={item?.value}
            onChange={(e) => {
              setSearchType((prev) => item);
              handleOnChange(e);
            }}
            hidden
          />
          <label
            htmlFor={item?.id}
            className={`p-2 cursor-pointer select-none whitespace-nowrap overflow-hidden ${
              item?.value === searchType?.value
                ? "bg-primaryColor text-whiteColor hover:bg-primaryColor hover:text-whiteColor"
                : "bg-whiteColor text-secondaryColor hover:bg-grayColor/5"
            }
                    `}
          >
            {item?.text}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SearchCategory;
