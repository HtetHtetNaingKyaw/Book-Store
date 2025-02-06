import React from "react";
import { useGetBooks } from "../react-query/bookUpload";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data: books, isLoading } = useGetBooks();
  const nav = useNavigate();
  console.log(books);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-12 gap-3 p-2">
      {books?.map((item) => {
        return (
          <div
            className="card max-w-none col-span-4 overflow-hidden bg-base-300"
            key={item.id}
          >
            <img
              src={item.img}
              className=" w-full h-[200px] object-cover"
              alt=""
            />
            <div className="card-body">
              <div className="card-title text-xl ">{item.name}</div>
              <div className="text-lg">
                Author - <span className="font-semibold">{item.author}</span>
              </div>
            </div>
            <div className=" flex justify-end">
              <div
                className="btn btn-link"
                onClick={() => {
                  nav("/home/book-detail/"+item.id);
                }}
              >
                See More
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
