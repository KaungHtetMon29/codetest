import Updatedelete from 'components/modal/UD'
import CreateModal from 'components/modal/createmodal'
import Modal from 'components/modal/createmodal'
import Navbar from 'components/nav/nav'
import Playercard from 'components/player cards/playercard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import teams from 'data.json'
import Teamcard from 'components/player cards/teamcard'
import Fetcher from 'fetch/fetcher'
import Addplayer from 'components/addplayer/Addplayer'
import { useDispatch } from 'react-redux'
import { addplayer } from 'components/action'

function Home() {
  const [player, setplayer] = useState([])
  const [page, setpage] = useState(1)
  const [mode, setmode] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const issigned = useSelector((state: any) => state.signed)
  const viewteam = useSelector((state: any) => state.view)
  const add = useSelector((state: any) => state.add)
  const del = useSelector((state: any) => state.del)
  const update = useSelector((state: any) => state.update)

  const fetchData = async (e: any) => {
    try {
      const response = await fetch(e)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
      return data
      // Data fetching completed, set isLoading to false
    } catch (error: any) {
      console.error('Error fetching data:', error.message)
      // Data fetching completed with an error, set isLoading to false
    }
  }
  const load = () => {
    setpage(page + 1)
  }
  const mod = (e: any) => {
    setmode(e)
  }
  const modchg = (e: any) => {
    switch (e) {
      case 'c':
        return <CreateModal func={mod} />
      case 'add':
        return <Addplayer />
      default:
        return <></>
    }
  }
  useEffect(() => {
    Fetcher(`https://www.balldontlie.io/api/v1/players`).then((data) => {
      dispatch(addplayer(data.data))
    })
    console.log(add)
  }, [])
  useEffect(() => {
    if (issigned === false) {
      navigate('/auth')
    } else {
      navigate('/')
      Fetcher(
        `https://www.balldontlie.io/api/v1/players?per_page=10&page=${page}`
      ).then((data) => {
        setplayer([...player, ...data.data])
      })
    }
  }, [issigned, page])
  useEffect(() => {
    if (update.name !== undefined) {
      update.name ? (teams.teams[update.index].name = update.name) : ''
      update.region ? (teams.teams[update.index].region = update.region) : ''
    }
  }, [update])
  useEffect(() => {
    if (del.index !== undefined) {
      teams.teams.pop(del.index)
    }
  }, [del])

  return (
    <div className="relative">
      <Navbar load={load} mod={mod} />
      <div
        className={`${
          mode === 'add' ? 'absolute' : 'fixed'
        } z-40 w-full justify-center flex`}
      >
        {modchg(mode)}
      </div>
      <div className="flex flex-col gap-8 justify-center relative z-30">
        {viewteam ? (
          teams.teams.length ? (
            <div className="flex flex-wrap gap-5 justify-center">
              {teams.teams.map((e, index) => {
                return (
                  <Teamcard data={e} key={index} index={index} func={mod} />
                )
              })}
            </div>
          ) : (
            <p className="text-center">NO teams yet</p>
          )
        ) : (
          <div className="flex flex-wrap gap-5 justify-center">
            {player.length === 0 ? (
              <p>loading</p>
            ) : (
              player.map((e) => {
                return <Playercard data={e} />
              })
            )}
          </div>
        )}
      </div>
    </div>
  )
}
export default Home
