import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetDeleteBook,
  useGetSingleBook,
  useUpdateBoook,
} from "../react-query/bookUpload";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { bookSchema } from "../utils/bookSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import BookForm from "../components/BookForm";
import Form from "../components/Form";

const BookDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { mutate: deleteBook, isPending } = useGetDeleteBook();

  const { data: singleBook, isLoading } = useGetSingleBook(id);

  const { mutate: updateBook, isPending: isPendingModel } = useUpdateBoook();

  const [isDelete, setIsDelete] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const onSubmit = (data) => {
    updateBook(data, {
      onSuccess: (res) => {
        console.log(res.message);
        toast.success(res.message);
        navigate("/home");
        document.getElementById("edit-Model").close();
        reset();
      },
      onError: (e) => {
        toast.error(e.response?.data?.message);
      },
    });
  };

  const handleConfirm = () => {
    deleteBook(
      { id, action: isDelete && "delete" },
      {
        onSuccess: (data) => {
          navigate("/home");
          toast.success(data?.message);
        },
        onError: (err) => {
          toast.error(err.response?.data?.message);
        },
      }
    );
    setIsModalOpen(false);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="loading loading-spinner loading-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 h-full items-center">
      <div className="col-span-12 flex flex-col gap-3 col-start-1 bg-base-200 p-3 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex justify-end gap-3">
          <div
            className="btn btn-primary"
            onClick={() => {
              reset(singleBook);
              document.getElementById("edit-Model").showModal();
            }}
            disabled={isPendingModel}
          >
            Edit
          </div>

          <button
            className="btn btn-error"
            onClick={() => {
              setIsDelete(true);
              setIsModalOpen(true);
            }}
            disabled={isPending}
          >
            Delete
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={singleBook?.img}
            className="border border-double border-primary w-1/2 h-[350px] p-2 object-cover rounded-2xl"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <div className="text-2xl font-bold">{singleBook?.name}</div>
            <div className="text-lg">
              Author {" - "}{" "}
              <span className="text-xl font-semibold">
                {singleBook?.author}
              </span>
            </div>
            <div className="text-lg">
              Price {" - $"} {singleBook?.price}
            </div>
            <div className="text-lg">
              Release Year {" - "} {singleBook?.release}
            </div>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      {isModalOpen && (
        <dialog id="delete_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {isDelete
                ? "Are you sure you want to delete?"
                : "Restore this book?"}
            </h3>
            <p className="py-2">
              {isDelete
                ? "This action cannot be undone."
                : "This will restore the book back to your collection."}
            </p>
            <div className="modal-action">
              <button
                className="btn btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`btn ${isDelete ? "btn-error" : "btn-success"}`}
                onClick={handleConfirm}
              >
                {isDelete && "Delete"}
              </button>
            </div>
          </div>
        </dialog>
      )}

      <dialog id="edit-Model" className="modal">
        <div className="modal-box">
          <Form
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            reset={reset}
            isPending={isPending}
            onSubmit={onSubmit}
          />
        </div>
      </dialog>
    </div>
  );
};

export default BookDetail;
