import features from "../data/features";

export default function Features() {
  return (
    <section className="mt-96 py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div className="m-auto text-center mb-20 md:w-8/12 lg:w-6/12">
          {" "}
          <h2 className="text-4xl font-bold text-gray-800 md:text-center text-start">
            How do we take African and Arab youth{" "}
            <span className="text-orange-500">into the future</span>?
          </h2>
          <h4 className="text-gray-600 mt-4 font-semibold text-start md:text-center text-xl">
            By Ebracing the reskilling revolution
          </h4>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, bold, colors }, key) => (
            <div
             key={key}
              className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${colors?.circle}`}
                >
                  <span className={`font-bold ${colors?.number}`}>{key+1}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                  {text} <span className="font-semibold">{bold}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
