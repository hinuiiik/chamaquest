import Image from "next/image";

export default function Home() {
  return (
    <div
      id="fullpage"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        id="centerContainer"
        className="flex-col gap-8 rounded-xl bg-purple-900 row-start-2 items-center items-center p-3">
        <div id="logoContainer" className="flex flex-row justify-center">
          <Image
            className="dark:invert m-4"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div id="logInLabel" className="m-2 text-1xl text-center text-12xl ">
          <p className="mb-2">
            {" "}
            An amazing journey is about to begin... <br className="leading-9" />{" "}
            {""}
            <b> Sign up </b>{" "}
          </p>
        </div>

        <form className="justify-center flex flex-col  w-full">
          <input
            type="text"
            className="bg-gray-100 m-2 text-gray-600 h-9 rounded-2xl p-3"
            placeholder="E-mail Addresss"
          />
          <input
            type="text"
            className="bg-gray-100 m-2 text-gray-600 h-9 rounded-2xl p-3"
            placeholder="Password"
          />
          <input
            type="text"
            className="bg-gray-100 m-2 text-gray-600 h-9 rounded-2xl p-3"
            placeholder="Confirm Password"
          />
        </form>
        <div
          id="horizontalFlexboxSignUpButtonContainer"
          className="flex flex-row justify-center">
          <a
            id="signUpButton"
            className="flex flex-row justify-center rounded-2xl border-2 gap-2 p-2 mt-3 mb-1 hover:border-3 hover:font-bold hover:shadow-3xl"
            href="../signup">
            <p> Submit </p>
          </a>
        </div>
      </main>
    </div>
  );
}
