// import React, { useEffect, useRef, useState } from "react";
// import { IoMdSearch } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
// import SearchCategory from "./SearchCategory";

// const categories = [
//   {
//     text: "By Username",
//     id: "searchByUsername",
//     value: "userName",
//   },
//   {
//     text: "By Full Name",
//     id: "searchByFullName",
//     value: "fullName",
//   },
//   {
//     text: "Group",
//     id: "searchByGroup",
//     value: "group",
//   },
//   {
//     text: "Page",
//     id: "searchByPage",
//     value: "page",
//   },
// ];
// const SearchBox = ({ setSearchResult }) => {
//   const [searchType, setSearchType] = useState(categories[0]);
//   const [searchTypePopUpState, setSearchTypePopUpState] = useState(false);
//   const [searchData, setSearchData] = useState({
//     searchText: "",
//     searchCategory: categories[0]?.value,
//   });
//   const searchCategoryRef = useRef(null);
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (!searchData.searchText || !searchData.searchCategory) return;
//     e.target.reset();
//     setSearchResult(searchData);
//   };
//   const handleOnChange = (e) => {
//     setSearchData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   useEffect(() => {
//     const handleClickEvent = (e) => {
//       if (!searchCategoryRef?.current?.contains(e?.target))
//         setSearchTypePopUpState((prev) => false);
//     };
//     document?.addEventListener("click", handleClickEvent);
//     return () => handleClickEvent("click", handleClickEvent);
//   }, []);
//   return (
//     <div className="p-4 shadow-xl rounded-md">
//       <form
//         onSubmit={handleSearchSubmit}
//         className="flex flex-col md:flex-row gap-2 justify-between items-center"
//       >
//         <div className="w-full searchInpStyle rounded-t-3xl rounded-b-lg md:rounded-s-full md:rounded-e-none">
//           <button
//             type="submit"
//             className="flex-shrink-0 size-10 rounded-full bg-primaryColor text-whiteColor grid place-items-center text-3xl"
//           >
//             <IoMdSearch />
//           </button>
//           <input
//             type="text"
//             name="searchText"
//             className="w-full outline-none border-none px-2"
//             placeholder="Search..."
//             onChange={handleOnChange}
//           />
//         </div>
//         <div
//           className="w-full max-w-full md:max-w-[250px] relative"
//           ref={searchCategoryRef}
//         >
//           <div
//             className="w-full searchInpStyle rounded-t-lg rounded-b-3xl md:rounded-s-none md:rounded-e-full"
//             onClick={() => setSearchTypePopUpState((prev) => !prev)}
//           >
//             <p className="w-full outline-none border-none px-2 capitalize text-base whitespace-nowrap overflow-hidden select-none">
//               {searchType?.text}
//             </p>
//             <button
//               type="button"
//               className="flex-shrink-0 size-10 rounded-full bg-primaryColor text-whiteColor grid place-items-center text-3xl"
//             >
//               <IoIosArrowDown
//                 className={`${
//                   searchTypePopUpState ? "rotate-180" : "rotate-0"
//                 } commonAnim`}
//               />
//             </button>
//           </div>
//           {searchTypePopUpState && (
//             <SearchCategory
//               categories={categories}
//               searchType={searchType}
//               handleOnChange={handleOnChange}
//               setSearchType={setSearchType}
//             />
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBox;
