import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";

const BaaS = () => {
  return (
    <div className="bg-color p-5">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="mt-12 mb-4 text-3xl font-semibold">
          Get access to a whole team for a fraction of the cost hiring one
          person!
        </h2>
        <p className="text-xl">
          INSiGENe delivers customizable bioinformatics as a service (BaaS)
          support for your project driven by experts in Systems Biology and
          Biostatistics. Our BaaS services include end-to-end support from
          project conception through data dissemination (see figure below)
          depending on the needs of your specific project.
        </p>
        <p className="text-xl mt-6">
          {" "}
          <Link className="text-[#2499E7]">Click here</Link> to meet our team of
          experts.
        </p>
        <div>
          <img
            className="pt-20"
            src="https://insigene.com/wp-content/uploads/2023/04/Baas_Process.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl py-20">
            INSiGENe BaaS support is available as a monthly subscription. There
            are 2 subscription plans – Pro and Premium. In addition to whole
            team access providing end-to-end support, the Pro plan comes with
            reproducible workflows with results delivered within months for
            typical projects. Premium subscriptions provide the same features as
            Pro plans but with increased bandwidth provided by two dedicated
            data analysts working on your project in parallel for expedited
            turnaround times.
          </p>
        </div>
        <div>
          <PricingCard></PricingCard>
        </div>
        <p className=" text-xl py-12">Ready to overcome the data analysis bottleneck? Onboarding as a client with INSiGENe is a straightforward, 3-step process. We will provide a quote that is tailored to your requirements and timelines.</p>
        <div className="pt-12 pb-32">
            <img src="https://insigene.com/wp-content/uploads/2023/04/baas_steps2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BaaS;
