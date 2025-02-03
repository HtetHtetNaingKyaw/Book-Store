import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "../utils/bookSchema";
import { useBookCreate } from "../react-query/bookUpload";
import toast from "react-hot-toast";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const { mutate: uploadBook, isPending } = useBookCreate();

  const onSubmit = (data) => {
    uploadBook(data, {
      onSuccess: (res) => {
        toast.success(res.message);
        reset();
      },
      onError: (e) => toast.error(e.response.data.message),
    });
  };

  return (
    <form
      className=" w-2/3 flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" text-3xl text-center">Upload Your New Book</div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Book Name</label>
        <input
          type="text"
          className="input max-w-none input-secondary w-full"
          {...register("name")}
        />
        {errors.name && (
          <small className=" text-error">{errors.name.message}</small>
        )}
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Author</label>
        <input
          type="text"
          className="input max-w-none input-secondary w-full"
          {...register("author")}
        />
        {errors.author && (
          <small className=" text-error">{errors.author.message}</small>
        )}
      </div>{" "}
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Release Year</label>
        <input
          type="text"
          className="input max-w-none input-secondary w-full"
          {...register("release")}
        />
        {errors.release && (
          <small className=" text-error">{errors.release.message}</small>
        )}
      </div>{" "}
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Price</label>
        <input
          type="text"
          className="input max-w-none input-secondary w-full"
          {...register("price")}
        />
        {errors.price && (
          <small className=" text-error">{errors.price.message}</small>
        )}
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Image Url</label>
        <input
          type="text"
          className="input max-w-none input-secondary w-full"
          {...register("img")}
        />
        {errors.img && (
          <small className=" text-error">{errors.img.message}</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={isPending}>
        {isPending ? (
          <>
            <span className="loading loading-spinner text-secondary"></span>
            Sending Data..
          </>
        ) : (
          " Upload Book"
        )}
      </button>
    </form>
  );
};

export default BookForm;
