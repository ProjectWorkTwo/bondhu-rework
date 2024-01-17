import React, { useContext, useRef, useState } from "react";
import { baseURL } from "../../Constant/Constant";
import hidePopUp from "../CustomFunction/hidePopUp";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { UpdateGroupPageFormContext } from "../../Providers/UpdateGroupPageFormProvider";
import axios from "axios";
import { useGetPageInfo } from "../../customHooks/useGetPageData";

const UpdatePage = () => {
  const { pageName } = useParams();
  const { updateGroupPageFormState, setUpdateGroupPageFormState } = useContext(
    UpdateGroupPageFormContext
  );
  const {
    dataPageInfo: { bio },
    isLoadingPageInfo,
    refetchPageInfo,
  } = useGetPageInfo(pageName);
  const [formData, setFormData] = useState({
    bio,
  });
  const boxRef = useRef(null);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData["bio"]) return;

    axios
      .put(
        `${baseURL}/updatepage/${pageName}`,
        {
          ...formData,
        },
        {
          headers: JSON.parse(localStorage.getItem("authorData") || "{}"),
        }
      )
      .then((res) => {
        const data = res.data;
        if (data?.error)
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data?.error,
          });

        refetchPageInfo();
        setUpdateGroupPageFormState((prev) => "");
        return Swal.fire({
          title: "Success",
          text: "Post created successfully!",
          icon: "success",
        });
      });
  };

  return (
    <section
      className="popupWrapper"
      onClick={(e) =>
        hidePopUp(e, boxRef, setUpdateGroupPageFormState, true, "")
      }
    >
      <div
        ref={boxRef}
        className="flex flex-col gap-5 justify-center items-center bg-whiteColor shadow-2xl rounded-md w-[90vw] max-w-[450px] h-auto max-h-[95vh] px-5 py-8 relative"
      >
        <h2 className="capitalize text-center">Update Bio</h2>

        <form
          className="w-full flex flex-col gap-4 px-1"
          onSubmit={handleSubmit}
        >
          <textarea
            name="bio"
            className="input1 max-h-32"
            placeholder={`Update Bio...`}
            value={formData["bio"]}
            onChange={handleChange}
          />
          <button type="submit" className="btnFill1">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdatePage;
