import Image from "next/image";

const buttonList = [
  {
    text: "hello",
    path: "example.com",
    iconPath: "/email.png",
    alt: "email icon"
  },
  {
    text: "resume",
    path: "example2.com",
    iconPath: "/resume.png",
    alt: "resume icon"
  },
];

export default function About() {
  return (
    <section className="block">
      <div className="py-12 bg-background md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
          <div className="flex-col flex items-start gap-2">
            <div className="">
              <div className="flex-col flex items-start">
                <div className="flex-col flex items-start gap-2">
                  <div className="flex grid-cols-2 items-center bg-accent px-3 py-1 drop-shadow-whiteGlow">
                    <div className="h-2 w-2 min-w-[8px] mr-2 bg-primary rounded-full"></div>
                    <div className="text-sm text-black sm:text-sm">
                      houston, texas
                    </div>
                  </div>
                  <p className="flex-col text-secondary text-sm sm:text-xl drop-shadow-whiteGlow">
                    software engineer
                  </p>
                  <h1 className="font-thin text-4xl text-primary md:text-6xl mb-6 md:mb-6 lg:mb-8 drop-shadow-primaryGlow">
                    tommy wilson
                  </h1>
                  <p className="flex-col text-secondary drop-shadow-whiteGlow sm:text-xl">
                    Consectetur adipiscing elit duis tristique sollicitudin
                    nibh. Augue mauris augue neque gravida in fermentum. Sapien
                    pellentesque habitant morbi tristique pellentesque.
                  </p>
                </div>
                <div className="mb-8 mt-8 h-px w-full bg-accent drop-shadow-whiteGlow"></div>
                <div className="flex-col flex items-start gap-2 mb-5 md:mb-6 lg:mb-8">
                  <p className="flex-col text-secondary max-[479px]:text-sm">
                    <strong>2020:</strong> Site of the year in Awwwards.com
                  </p>
                  <p className="flex-col text-secondary max-[479px]:text-sm">
                    <strong>2020:</strong> Site of the year in Awwwards.com
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12">
                  <a
                    href="#"
                    className="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-primary"
                  >
                    <div>All Achievements</div>
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                      alt=""
                      className="inline-block"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-start gap-4 flex-wrap">
                  {buttonList.map((item, idx) =>
                    <a
                      href={item.path}
                      key={idx}
                      className="flex-row flex max-w-full items-center justify-center gap-2 border border-solid border-accent bg-accent px-6 py-3 text-center font-semibold text-black drop-shadow-whiteGlow"
                    >
                      <Image
                        src={item.iconPath}
                        height={25}
                        width={25}
                        alt={item.alt}
                        className="inline-block"
                      />
                      <div>{item.text}</div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[530px] overflow-hidden rotate-3">
            <Image src="/portrait.png" height={530} width={530} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
