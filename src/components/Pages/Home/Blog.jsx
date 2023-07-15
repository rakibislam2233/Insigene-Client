const Blog = () => {
    return (
        <div className="flex justify-center bg-color">
             <div className=" shadow-lg  overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src="/path/to/image.jpg"
        alt="Card Image"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Awesome Card</h3>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          velit auctor, aliquam erat sed, placerat sapien. Ut eu tempor arcu.
        </p>
        <a
          href="#"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Read More
        </a>
      </div>
    </div>
        </div>
    );
};

export default Blog;