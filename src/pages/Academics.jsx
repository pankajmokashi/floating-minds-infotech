import Animate from "../components/Animate";
import Features from "../components/Features";

function Academics() {
  return (
    <div>
      <section className=" px-4 md:px-8 mt-16">
        <div className="text-center py-16">
          <Animate>
            <h1 className="text-5xl sm:text-7xl font-bold">
              Floating Minds Infotech
            </h1>
          </Animate>
        </div>
      </section>
      <section className="px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-12 pb-16">
          <Features />
        </div>
      </section>
    </div>
  );
}

export default Academics;
