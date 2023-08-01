import teams from 'data.json'
import { useRef } from 'react'
function Updatedelete({ func }) {
  const name = useRef(null)
  const region = useRef(null)
  const update = ({}) => {}
  return (
    <div className=" bg-blue-800 flex flex-col gap-8 px-12 py-8 rounded-xl relative -left-1/2 z-50 ">
      <div
        className="absolute bg-white px-3 pb-1  rounded-full text-center right-12 cursor-pointer"
        onClick={() => func('')}
      >
        x
      </div>

      <h1 className="text-center text-white">Create Team</h1>
      <input placeholder="name" className="px-4 py-2 rounded-xl" ref={name} />
      <input
        placeholder="region"
        className="px-4 py-2 rounded-xl"
        ref={region}
      />
      <button
        className="bg-white w-3/5 mx-auto rounded-lg h-10"
        onClick={() => {}}
      >
        Update
      </button>
    </div>
  )
}
export default Updatedelete
