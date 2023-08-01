import teams from 'data.json'
import { useRef } from 'react'
function CreateModal({ func }: { func: any }) {
  const name = useRef()
  const region = useRef()
  const submit = () => {
    teams.teams.find((e) => e.name === name.current.value) === undefined
      ? teams.teams.push({
          name: name.current.value,
          region: region.current.value
        })
      : alert('team name should be unique')
    console.log()
  }
  return (
    <div className=" bg-blue-800 flex flex-col gap-8 px-12 py-8 rounded-xl absolute mx-auto w-96 z-50 ">
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
        onClick={submit}
      >
        submit
      </button>
    </div>
  )
}
export default CreateModal
