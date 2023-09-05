import activities from "../data/activities";

export default function OurKeyActivities() {
  return (
    <div className="py-16">
      <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
            Our{" "}
            <span className="text-orange-500">Key Activities</span>
          </h2>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {activities.map(({ title, text, image }, key) => (
            <div
              key={key}
              className="group cursor-pointer relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={image}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-lg font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    {" "}
                    <strong>
                      ARK{" "}
                      <sup
                        style={{ verticalAlign: "super" }}
                        className="text-orange-500"
                      >
                        X
                      </sup>
                    </strong>{" "}
                    <span>{title}</span>{" "}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
