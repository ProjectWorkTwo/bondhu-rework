import React, { useEffect, useRef, useState } from "react";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import ScrollBar from "../Components/Simple/ScrollBar";
import Avatar1 from "../Components/Simple/Avatar1";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL, dummyProfilePic } from "../Constant/Constant";

const coverImg =
  "https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const categories = [
  {
    text: "By Username",
    id: "searchByUsername",
    value: "userName",
  },
  {
    text: "By Full Name",
    id: "searchByFullName",
    value: "fullName",
  },
  {
    text: "Group",
    id: "searchByGroup",
    value: "group",
  },
  {
    text: "Page",
    id: "searchByPage",
    value: "page",
  },
];
const SearchPopUp = ({ searchPopUpState, setSearchPopUpState }) => {
  const [searchResult, setSearchResult] = useState([]);
  const boxRef = useRef(null);
  const [searchType, setSearchType] = useState(categories[0]);
  const [searchTypePopUpState, setSearchTypePopUpState] = useState(false);
  const [searchData, setSearchData] = useState({
    searchText: "",
    searchCategory: categories[0]?.value,
  });
  const searchCategoryRef = useRef(null);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchData.searchText || !searchData.searchCategory) return;
    const text = searchData?.searchText?.toLowerCase()?.trim();
    const type = searchData.searchCategory?.toLowerCase()?.trim();
    e.target.reset();
    axios
      .post(
        `${baseURL}/search`,
        {
          text,
          type,
        },
        {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        }
      )
      .then((res) => {
        setSearchResult((prev) => res?.data);
        return res?.data;
      });
  };
  const handleOnChange = (e) => {
    setSearchData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const handleClickEvent = (e) => {
      if (!searchCategoryRef?.current?.contains(e?.target))
        setSearchTypePopUpState((prev) => false);
    };
    document?.addEventListener("click", handleClickEvent);
    return () => handleClickEvent("click", handleClickEvent);
  }, []);


  return (
    <section
      className={`fixed top-0 left-0 w-full z-[9999] ${
        searchPopUpState ? "translate-x-0" : "translate-x-full"
      } h-screen commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setSearchPopUpState)}
    >
      <div
        className={`absolute top-0 right-0 w-[95%] max-w-[650px] h-screen bg-whiteColor shadow-2xl flex flex-col gap-5`}
        ref={boxRef}
      >
        <div className="w-full h-[200px] overflow-hidden relative grid place-items-center">
          <img src={coverImg} alt="" className="w-full h-full object-cover" />
          <h2 className="absolute text-whiteColor select-none text-center">
            Find Your Friends
          </h2>
        </div>
        <section className="w-full px-5 flex flex-col gap-5">
          <div className="p-4 shadow-xl rounded-md">
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-col md:flex-row gap-2 justify-between items-center"
            >
              <div className="w-full searchInpStyle rounded-t-3xl rounded-b-lg md:rounded-s-full md:rounded-e-none">
                <button
                  type="submit"
                  className="flex-shrink-0 size-10 rounded-full bg-primaryColor text-whiteColor grid place-items-center text-3xl"
                >
                  <IoMdSearch />
                </button>
                <input
                  type="text"
                  name="searchText"
                  className="w-full outline-none border-none px-2"
                  placeholder="Search..."
                  onChange={handleOnChange}
                />
              </div>
              <div
                className="w-full max-w-full md:max-w-[250px] relative"
                ref={searchCategoryRef}
              >
                <div
                  className="w-full searchInpStyle rounded-t-lg rounded-b-3xl md:rounded-s-none md:rounded-e-full"
                  onClick={() => setSearchTypePopUpState((prev) => !prev)}
                >
                  <p className="w-full outline-none border-none px-2 capitalize text-base whitespace-nowrap overflow-hidden select-none">
                    {searchType?.text}
                  </p>
                  <button
                    type="button"
                    className="flex-shrink-0 size-10 rounded-full bg-primaryColor text-whiteColor grid place-items-center text-3xl"
                  >
                    <IoIosArrowDown
                      className={`${
                        searchTypePopUpState ? "rotate-180" : "rotate-0"
                      } commonAnim`}
                    />
                  </button>
                </div>
                {searchTypePopUpState && (
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
                )}
              </div>
            </form>
          </div>
          <ScrollBar>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
              {searchResult.map(
                ({
                  _id,
                  fullName,
                  userName,
                  profilePic,
                  groupCover,
                  groupName,
                  pageName,
                  pageProfilePic,
                }) => (
                  <React.Fragment key={_id}>
                    <Avatar1
                      fullName={fullName}
                      userName={userName}
                      groupCover={groupCover}
                      groupPost={Boolean(groupName)}
                      profileOrPageName={groupName || pageName}
                      profilePic={profilePic || groupCover || pageProfilePic || dummyProfilePic}
                    />
                  </React.Fragment>
                )
              )}
            </div>
          </ScrollBar>
        </section>
      </div>
    </section>
  );
};

export default SearchPopUp;
