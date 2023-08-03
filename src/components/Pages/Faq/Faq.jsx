import { useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const FAQ = [
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
  {
    title: "What is the minimum term for a subscription plan?",
    description:
      "Our subscription plans are totally flexible and only require you to sign up for a month at a time. You can of course sign up for longer periods if you require regular ongoing support. This flexibility is intended to cater for ebbs and flows in your requirements for bioinformatics support.",
  },
];
const Faq = () => {
  const [open, setOpen] = useState(true);
  console.log(open);
  return (
    <div className="w-full  max-w-6xl mx-auto p-10">
      <Helmet>
        <title>FAQ - INSiGENe</title>
      </Helmet>
      <div className="py-10">
        <h3 className="text-3xl font-bold py-8 ">
          Frequently Asked Questions:
        </h3>
        <div className="space-y-7">
          {FAQ.map((data) => (
            <>
              <div
                onClick={() => setOpen(!open)}
                className="w- full collapse rounded-none border py-2"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title px-3">
                  <div className="flex justify-between gap-5">
                    <h3 className="text-2xl font-semibold">{data.title}</h3>
                    <button className=" w-6 h-6 bg-gray-100 flex justify-center items-center rounded-full text-black">
                      {open ? (
                        <AiOutlinePlus></AiOutlinePlus>
                      ) : (
                        <AiOutlineMinus></AiOutlineMinus>
                      )}
                    </button>
                  </div>
                </div>
                <div className="collapse-content">
                  <p className="text-xl ">{data.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
