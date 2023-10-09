import React from "react";
import blog1 from "../assets/Images/1.png";
import blog2 from "../assets/Images/2.png";
import blog3 from "../assets/Images/3.png";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: blog1,
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: blog2,
    },
    {
      id: 3,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: blog3,
    },
  ];
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
      id="testimonial"
    >
      <div className="">
        <h2 className="text-4xl text-neutralGray font-semibold mb-4 ">
          Caring is the new marketing
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGray mb-8">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&rsquo;s more.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-col-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog, i) => (
          <div key={i} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt="blog"
              className="hover:scale-95 transition-all duration-300  "
            />
            <div className="text-center px-4 py-8  bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGray font-semibold ">
                {blog.title}
              </h3>
              <div className="flex justify-center items-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700 "
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
