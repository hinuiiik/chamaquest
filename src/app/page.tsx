

export default function Home() {
  return (
      <>
      <div className={"flex flex-col bg-white w-screen h-screen"}>
          {/*Big landing header type thing*/}
          <div className={"bg-orange-400 w-[75%] h-screen ml-16 p-8"}>
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
              <div className={"bg-pink-400 text-center ml-[30%] mt-24 text-5xl w-fit p-6  rounded-4xl"}>
                  <button type={"button"}>Register Now</button>
              </div>
          </div>

      {/*    Explain one*/}
          <div className={"bg-black w-screen h-[75vh] flex"}>
              <div className={"h-[70vh] w-[50%] m-1 bg-yellow-400 text-7xl text-center pt-24"}>
                  <h1>The trust you need</h1>
              </div>
              <div className={"w-fit bg-purple-800 p-32 text-xl "}>
                  <p>textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox    </p>
              </div>

          </div>

          <div className={"bg-black w-screen h-[75vh] flex"}>
              <div className={"w-fit bg-purple-800 p-32 text-xl "}>
                  <p>textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox textbox    </p>
              </div>
              <div className={"h-[70vh] w-[50%] mr-10 bg-yellow-400 text-7xl text-center pt-24"}>
                  <h1>The service you deserve</h1>
              </div>


          </div>
      </div>

      </>
  );
}
