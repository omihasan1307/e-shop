import blog1 from "../../../public/blog.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";

const Blog = () => {
  const blogList = [
    {
      id: 0,
      title: "Fashion",
      description: "Neque porro quisquam est qui dolorem ipsum",
      date: " 19/3/2023",
      img: blog1,
    },
    {
      id: 1,
      title: "Fashion",
      description: "Neque porro quisquam est qui dolorem ipsum",
      date: " 13/9/2023",
      img: blog2,
    },
    {
      id: 2,
      title: "Fashion",
      description: "Neque porro quisquam est qui dolorem ipsum",
      date: " 24/7/2023",
      img: blog3,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-5 lg:px-0 ">
      <div className="lg:grid lg:grid-cols-3 gap-10">
        {blogList?.map((item) => (
          <div
            key={item.id}
            className="border bg-cover bg-center h-[15rem] mt-5 lg:mt-0"
            style={{ backgroundImage: `url(${item.img.src})` }}
          >
            <div className="flex flex-col mt-24 items-start space-y-2 text-white p-4">
              <span className="border uppercase bg-white text-black px-4 text-xs py-1 rounded ">
                {item.title}
              </span>
              <p>{item.description}</p>
              <p>Date : {item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-10 lg:mt-20" />
    </div>
  );
};

export default Blog;
