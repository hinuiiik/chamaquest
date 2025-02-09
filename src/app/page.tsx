

export default function Home() {

  return (
      <>
      <div className={"flex flex-col bg-gray-800 w-screen h-screen"}>
          {/*Big landing header type thing*/}
          <div className={"bg-gray-800 w-[75%] h-screen ml-16 p-8"}>
              {/*Text*/}
              <div>
                  {/*Header*/}
                  <div className={""}>
                      <h1 className={"text-9xl"}> We are ChamaQuest</h1>
                  </div>
              {/*    Main Text*/}
                  <div className={"m-8"}>
                      <p className={"text-4xl"}>Small group finances taken to the next level</p>
                  </div>

              </div>
              {/*Register now*/}
              <div className={" bg-purple-950 text-center ml-[30%] m-12 text-5xl w-fit p-6  rounded-4xl"}>
                  <a href={"./login"}><button type={"button"}  >Register Now</button></a>
              </div>
          </div>

      {/*    Explain one*/}
          <div className={" w-screen h-[75vh] flex mt-2"}>
              <div className={"h-[70vh] w-[50%] m-1 mt-0 mb-0 bg-gray-800 text-7xl text-center pt-24"}>
                  <h1>The trust you need</h1>
              </div>
              <div className={"w-fit bg-gray-700 p-32 text-xl "}>
                  <p>textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox    </p>
              </div>

          </div>

          <div className={" w-screen h-[75vh] flex mt-1"}>
              <div className={"w-fit bg-gray-700 p-32 text-xl mt-1 "}>
                  <p>textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox    </p>
              </div>
              <div className={"h-[70vh] w-[50%] m-1 mb-0 bg-gray-800 text-7xl text-center pt-24"}>
                  <h1>The service you deserve</h1>
              </div>


          </div>
      </div>

      </>
  );
}
