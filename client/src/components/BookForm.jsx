import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "../utils/bookSchema";
import { useBookCreate } from "../react-query/bookUpload";
import toast from "react-hot-toast";
import Form from "./Form";

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
    <>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
        isPending={isPending}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default BookForm;
