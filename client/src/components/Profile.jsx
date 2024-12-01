
const Profile = () => {
  return (
    <div className=" text-black">
        <div className="flex w-[80vw] h-[30vh] bg-slate-300">
            <div className="flex w-[60%] items-center justify-start px-[4rem] py-[4rem] gap-10">
                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
                    className="h-[8rem] w-[8rem] rounded-full"/>
                <div className="flex flex-col justify-start h-[100%] text-lg">
                    Raaina<br></br>
                    jwguigiug
                </div>
            </div>

            <div className="w-[20%] flex flex-col justify-center gap-4 items-center">
                <p className="text-lg">Phone</p>
                <p className="text-lg">Email</p>
                <p className="text-lg">Branch</p>
                <p className="text-lg">year</p>
            </div>
            <div className="w-[20%] flex flex-col justify-center gap-4 items-start">
                <p className="text-lg">57689677</p>
                <p className="text-lg">raainawhalla#@vhjsg</p>
                <p className="text-lg">btech cse</p>
                <p className="text-lg">3rd</p>
            </div>
            
        </div>
    </div>
  )
}

export default Profile