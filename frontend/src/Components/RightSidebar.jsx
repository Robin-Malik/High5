import * as React from 'react'

const RightSidebar = () => {
  const [user, setUser] = React.useState({
    points: 390,
  })

  return (
    <div className="pt-4 pr-4">
      <div className="flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] md:w-[350px] xl:w-[300px] ">
        <div>
          <div className="bg-[#E0EBFF] text-center px-5 pt-3 pb-1 rounded-[9px] drop-shadow-[0px_2px_3px_#00000029]">
            <p className="text-[20px] font-light text-center font-Lato leading-5 text-primary">
              You have <span className="font-black">{user.points} Points</span> to redeem
            </p>
            <span className="text-[12px] text-[#747474] font-Lato font-light">
              Don't worry, It never expires!
            </span>
          </div>
        </div>

        {/* <div>
          <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
            <div className="border-b border-[#EDEDED] py-1 px-3">
              <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
                Top High5 Stars
              </p>
            </div>
            <div>
              <div className=" px-3 pt-2 ">
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <MdOutlineCake />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Classie & 3 others</strong> birthday today
                  </span>
                </div>
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <MdOutlineCelebration />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Vikash & 1 other</strong> work anniversary
                  </span>
                </div>
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <TbChartCircles />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Jyoti & 2 other</strong> join today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RightSidebar
