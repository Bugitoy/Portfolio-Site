import { crown, check } from "../../../assets/App";
import { collabApps, collabContent, topText } from "../../../constants";
import { Link } from "react-router-dom";
import Button from "../../Button";
import Section from "../../Section";
import { LeftCurve, RightCurve } from "./Design/Collaboration";


const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex sm: mt-[-3rem]">
        <div className="max-w-[25rem] md:mb-[3.5rem]">
          <h2 className="h2 mb-4 md:mb-8">
            The Honors That Made Me Smile!
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4 ml-10">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Link to="/about">
            <Button className={"ml-[6.5rem] lg:ml-[3rem] mt-0 lg:mt-[1rem]"}>Read about me</Button>
          </Link>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] sm: mt-[3rem] md: mt-4 lg: mt-4 xl: mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {topText}
          </p>

          <div className="relative left-1/2 flex w-[20rem] lg:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 sm: mt-[5rem] md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={crown}
                    width={48}
                    height={48}
                    alt="crown"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
