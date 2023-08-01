import { useEffect, useRef, useState } from 'react'
import teams from 'data.json'
import { useDispatch } from 'react-redux'
import { addplayer, addview, del, update } from 'components/action'
import { useSelector } from 'react-redux'

function Teamcard({ data, index, func }) {
  const dispatch = useDispatch()
  const name = useRef()
  const region = useRef()
  const [edit, setedit] = useState(false)

  const adview = useSelector((state) => state.addview)

  const onsubmit = (index) => {
    dispatch(
      update({
        name: name.current.value,

        region: region.current.value,
        index: index
      })
    )
  }
  const clik = () => {
    if (teams.teamsperplayer[index] !== undefined) {
      const buffer = teams.teamsperplayer[index]
      dispatch(addplayer([...buffer]))
    }
    dispatch(del({ index: index }))

    console.log(teams.teamsperplayer[index])
    delete teams.teamsperplayer[index]
  }
  return (
    <div className="bg-gray-400 w-1/6 py-12 px-6 rounded-xl text-white relative">
      <div
        className="absolute bg-white px-3 pb-1  rounded-full text-center right-3 top-3 cursor-pointer text-black z-50"
        onClick={clik}
      >
        x
      </div>
      {edit ? (
        <div className="">
          <div className=" bg-blue-800 flex flex-col gap-3 px-12 py-4 absolute rounded-xl z-50 text-black">
            <h1 className="text-center text-white">Edit team</h1>
            <input
              placeholder="name"
              className="px-4 py-1 rounded-xl"
              ref={name}
            />
            <input
              placeholder="region"
              className="px-4 py-1 rounded-xl"
              ref={region}
            />
            <div className="flex gap-x-2 text-xs ">
              <button
                className="bg-white text-black w-2/5 mx-auto rounded-lg"
                onClick={() => {
                  onsubmit(index)
                }}
              >
                submit
              </button>
              <button
                className="bg-white text-black w-2/5 mx-auto rounded-lg py-1 "
                onClick={() => {
                  setedit(!edit)
                  console.log(edit)
                }}
              >
                cancel
              </button>
              <button
                className="bg-white text-black w-2/5 mx-auto rounded-lg py-1 "
                onClick={() => {
                  dispatch(addview({ index: index, status: true }))
                  func('add')
                  setedit(false)
                }}
              >
                Addplayer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setedit(true)
          }}
        >
          <p>Name-{data.name}</p>
          <p>Region-{data.region}</p>
        </div>
      )}
    </div>
  )
}
export default Teamcard
