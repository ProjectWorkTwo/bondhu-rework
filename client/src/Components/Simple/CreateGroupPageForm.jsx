import React, { useRef, useContext, useState } from "react";
import hidePopUp from "../CustomFunction/hidePopUp";
import { CreateGroupPageFormContext } from "../../Providers/CreateGroupPageFormProvider";
import { FaInfoCircle } from "react-icons/fa";
import ScrollBar from "./ScrollBar";
import { baseURL, toCapitalize } from "../../Constant/Constant";
import axios from "axios";
import Swal from "sweetalert2";
import {
  useGetGroupJoined,
  useGetGroupManagedByMe,
} from "../../customHooks/useGetGroupListOwn";

const CreateGroupPageForm = () => {
  const { createGroupPageFormState, setCreateGroupPageFormState } = useContext(
    CreateGroupPageFormContext
  );

  const {
    dataGroupManagedByMe,
    isLoadingGroupManagedByMe,
    refetchGroupManagedByMe,
  } = useGetGroupManagedByMe();
  const { dataGroupJoined, isLoadingGroupJoined, refetchGroupJoined } =
    useGetGroupJoined();

  const [formData, setFormData] = useState({
    [`${createGroupPageFormState.toLowerCase()}Name`]: "",
    bio: "",
  });
  const boxRef = useRef(null);
  const createForm = useRef(null);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) if (!formData[key]) return;

    for (let key in formData) {
      formData[key] = formData[key].trim();
    }

    if (formData[`${createGroupPageFormState.toLowerCase()}Name`].includes("-"))
      return;

    formData[`${createGroupPageFormState.toLowerCase()}Name`] = formData[
      `${createGroupPageFormState.toLowerCase()}Name`
    ]
      ?.split(" ")
      .join("-");
    axios
      .post(
        `${baseURL}/create${createGroupPageFormState}`,
        {
          ...formData,
          ...JSON.parse(localStorage.getItem("authorData")),
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

        setCreateGroupPageFormState((prev) => "");
        refetchGroupJoined();
        refetchGroupManagedByMe();
        return Swal.fire({
          title: "Success",
          text: "Post created successfully!",
          icon: "success",
        });
      });
    createForm.current.reset();
  };

  const warnings = [
    `${toCapitalize(createGroupPageFormState)} Name must be unique`,
    `Name can't contains '-'`,
    `Name can contains anything else`,
    `Your ${toCapitalize(createGroupPageFormState)} name will use as your url`,
  ];
  return (
    <section
      className="popupWrapper"
      onClick={(e) =>
        hidePopUp(e, boxRef, setCreateGroupPageFormState, true, "")
      }
    >
      <div
        ref={boxRef}
        className="flex flex-col gap-5 justify-center items-center bg-whiteColor shadow-2xl rounded-md w-[90vw] max-w-[450px] h-auto max-h-[95vh] px-5 py-8 relative"
      >
        <h2 className="capitalize text-center">
          Create {createGroupPageFormState}
        </h2>

        <ScrollBar>
          <form
            className="w-full flex flex-col gap-4 px-1"
            onSubmit={handleSubmit}
            ref={createForm}
          >
            <input
              type="text"
              name={`${createGroupPageFormState}Name`}
              className="input1"
              placeholder={`${toCapitalize(createGroupPageFormState)} Name...`}
              value={formData[`${createGroupPageFormState}Name`]}
              onChange={handleChange}
            />
            <textarea
              name="bio"
              className="input1 max-h-32"
              placeholder={`${toCapitalize(createGroupPageFormState)} Bio...`}
              value={formData["bio"]}
              onChange={handleChange}
            />
            <button type="submit" className="btnFill1">
              Create
            </button>
          </form>
        </ScrollBar>
        <div className="w-full rounded-md">
          <ScrollBar>
            <div className="w-full p-4 bg-primaryColor text-whiteColor rounded-md flex flex-col gap-3">
              {warnings.map((item) => (
                <span
                  key={item}
                  className="flex gap-3 justify-start items-center select-none"
                >
                  <FaInfoCircle className="text-xl" />
                  <span className="text-sm">{item}</span>
                </span>
              ))}
            </div>
          </ScrollBar>
        </div>
      </div>
    </section>
  );
};

export default CreateGroupPageForm;
