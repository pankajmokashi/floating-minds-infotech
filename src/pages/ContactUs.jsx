import Animate from "../components/Animate";

function ContactUs() {
  return (
    <div>
      <section className=" px-4 md:px-8 mt-16">
        <div className="text-center py-16">
          <Animate>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4">About Us</h1>
            <p>Let us connect for a better future and growth</p>
          </Animate>
        </div>
      </section>

      <section className="bg-[#292929] px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-12 py-16 text-white">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2"></div>
            <div className="mx-auto w-full max-w-md md:max-w-full md:w-1/2">
              <h6 className="text-lg font-bold mb-8">Send Us a Message</h6>
              <form className="flex flex-col gap-6">
                <Animate>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="px-4 py-2 text-black font-medium rounded-md"
                      autoComplete="on"
                      required
                    />
                  </div>
                </Animate>
                <Animate>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="px-4 py-2 text-black font-medium rounded-md"
                      autoComplete="on"
                      required
                    />
                  </div>
                </Animate>
                <Animate>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="px-4 py-2 text-black font-medium rounded-md"
                      autoComplete="on"
                      required
                    />
                  </div>
                </Animate>
                <Animate>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="msg">Message</label>
                    <textarea
                      type="text"
                      name="msg"
                      id="msg"
                      className="px-4 py-2 text-black font-medium rounded-t-md rounded-l-md"
                    />
                  </div>
                </Animate>
                <Animate>
                  <div>
                    <input
                      type="submit"
                      value={"Submit"}
                      className="px-8 py-2 border font-medium rounded-md cursor-pointer hover:bg-white hover:text-black"
                    />
                  </div>
                </Animate>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
