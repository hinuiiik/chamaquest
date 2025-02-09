

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
              <div className={"h-[70vh] w-[50%] m-1 mt-0 mb-0 bg-gray-800 text-7xl text-center p-16"}>
                  <h1>What's the Problem?</h1>
              </div>
              <div className={"w-fit bg-gray-700 pt-32 p-12 text-xl "}>
                 <p>Financial institutions are powerful tools to help people save, invest, and build for their future, but for many people experiencing extreme poverty, formal banking is out of reach. It is too far, too alien, and above all, too expensive. For many of the 734 million people worldwide earning less than $2 a day, the overdraft fees and account creation fees place traditional banking squarely out of reach.</p>
              </div>

          </div>

          <div className={" w-screen h-[75vh] flex mt-1"}>
              <div className={"w-fit bg-gray-700 pt-24 p-12 text-xl mt-1 "}>
                  <p>Many of the global poor have adapted by creating rotating savings and credit institutions (ROSCAs), groups in Kenya dubbed Chamas. In these groups, participants are required by social expectation to save money, depositing it into a physical pot at regular meetings where savings are discussed. Participants then withdraw value from the pot at a regular interval, describing to the group how they'll use it to help themselves. Widely used in parts of the world, ROSCAs are an incredibly helpful solution, but which can't offer interest, or even assure that nobody will run away with the money. Chama aims to help Chamas fix these problems.    </p>
              </div>
              <div className={"h-[70vh] w-[50%] m-1 mb-0 bg-gray-800 text-7xl text-center p-12"}>
                  <h1>A New Method to an Old Solution</h1>
              </div>
          </div>

          <div className={" w-screen h-[75vh] flex mt-2"}>
              <div className={"h-auto w-[50%] m-1 mt-0 mb-0 bg-gray-800 text-7xl text-center p-32"}>
                  <h1>Our Goal</h1>
              </div>
              <div className={"w-fit bg-gray-700 pt-16 p-12 text-xl "}>
                  <p>Chamaquest works to bridge the accessibility-stability gap by empowering accessible, accountable ROSCAs with the expertise, backing, and interest capacity of local banks. Working with microfinance institutions with experience in lending to those experiencing extreme poverty, we'll provide institutional connections to ROSCAs. Because their assets are pooled, low-wealth investors will be able to finally receive more than they put in. Even better, extending deposit insurance to previously informal groups will prevent the devastation of a single individual running away with, or losing, the money. We also envision local banks providing advice to savings groups, offering products to help people save, and gaining a better understanding of how to bank their neighbors.</p>
              </div>

          </div>
      </div>

      </>
  );
}
