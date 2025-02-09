import Image from "next/image";
import Link from "next/link";
import LoginForm from "../ui/forms/loginForm";

export default function Home() {
  return (
    <div
      id="fullpage"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 bg-gray-200 gap-16 sm:p-20">
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
          <p className="mb-2 mt-0">
            {" "}
            Further your financial journey... <br className="leading-9" /> {""}
            <b> Log In. </b>{" "}
          </p>
        </div>
        <LoginForm />
        <div
          id="horizontalFlexboxSignUpButtonContainer"
          className="flex flex-row justify-center">
          <Link
            id="signUpButton"
            className="flex flex-row justify-center rounded-2xl border-2 gap-2 p-2 mt-3 mb-1 hover:border-3 hover:font-bold hover:shadow-3xl mt-12"
            href="../signup">
            <p className="italic">
              {" "}
              No account? <u> Sign up. </u>{" "}
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
