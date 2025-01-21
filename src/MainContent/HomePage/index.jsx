const HomePage = ({ recentWork, setContent }) => (
  <>
    <div className="w-full mb-12 text-left lg:w-2/3">
      <div className="mb-2 text-4xl font-bold">Hi, I'm Joanne.</div>
      <div className="text-4xl font-bold mb-7">
        I'm a UX designer who loves to create new ideas.
      </div>
      <div className="my-2">
        With over ten years' professional experience, my skills span pretty much
        every element of digital design, from specialising in UX and UI, to
        video editing, to HTML/CSS, to graphic design and art direction. Not
        knowing how to do something isn't a barrier - I'm a fast learner, and my
        knowledge has constantly evolved throughout my career.
      </div>
    </div>
    <div className="mb-12">
      <p className="mb-4 text-xl font-bold">Recent work...</p>
      <div className="flex flex-col w-full md:flex-row md:-m-2">
        <img
          src={recentWork.leftImage.url}
          alt="recent work images"
          className="w-full h-full cursor-pointer md:w-1/3 md:mx-1 md:p-1"
          onClick={() => {
            setContent("ux-and-ui");
          }}
        />
        <img
          src={recentWork.centralImage.url}
          alt="recent work images"
          className="w-full h-full py-2 cursor-pointer md:w-1/3 md:p-1"
          onClick={() => {
            setContent("graphic-design");
          }}
        />
        <img
          src={recentWork.rightImage.url}
          alt="recent work images"
          className="w-full h-full cursor-pointer md:w-1/3 md:mx-1 md:p-1"
          onClick={() => {
            setContent("ux-and-ui");
          }}
        />
      </div>
    </div>
  </>
);

export default HomePage;
