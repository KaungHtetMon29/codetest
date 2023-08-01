import { addplayer, toteam } from 'components/action'
import { useEffect, useState } from 'react'
import teams from 'data.json'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Playercard({ data, Tindex, index }: { data: string }) {
  const dispatch = useDispatch()
  const players = useSelector((state) => state.add)
  const addfunc = () => {
    if (teams.teamsperplayer[Tindex] === undefined) {
      teams.teamsperplayer[Tindex] = [
        {
          first_name: players[index].first_name,
          position: players[index].position
        }
      ]
    } else {
      teams.teamsperplayer[Tindex].push({
        first_name: players[index].first_name,
        position: players[index].position
      })
    }

    players.splice(index, 1)
    dispatch(addplayer(players))
  }
  return (
    <div
      className="bg-gray-400 w-1/6 py-12 px-6 rounded-xl text-white cursor-pointer"
      onClick={addfunc}
    >
      <p>Name-{`${data.first_name}`}</p>
      <p>Position-{data.position}</p>
    </div>
  )
}
export default Playercard
