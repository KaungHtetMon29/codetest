import { addplayer, toteam } from 'components/action'
import Playercard from 'components/player cards/playercard'
import Fetcher from 'fetch/fetcher'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import teams from 'data.json'

function Addplayer() {
  const add = useSelector((state: any) => state.add)
  const addview = useSelector((state: any) => state.addview)
  const viewteam = useSelector((state: any) => state.view)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(add)
  }, [])
  return (
    <>
      {viewteam ? (
        <div className="flex flex-col bg-gray-600 w-full py-12">
          <h1 className="text-center font-bold text-3xl text-white py-12">
            Add players
          </h1>
          <div className="flex flex-wrap gap-5 justify-center text-white">
            {add.length === 0 ? (
              <p>No players</p>
            ) : (
              add.map((e, index) => {
                return (
                  <Playercard
                    data={e}
                    Tindex={addview.index}
                    key={index}
                    index={index}
                  />
                )
              })
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
export default Addplayer
