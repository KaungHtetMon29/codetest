import { tview } from 'components/action'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Navbar({ load, mod }: { load: any; mod: any }) {
  const dispatch = useDispatch()
  const view = useSelector((state) => state.view)
  return (
    <div className="flex justify-center gap-12 sticky top-0 bg-white py-6 z-50">
      <button
        onClick={() => {
          load()
        }}
        className="py-4 px-12 rounded-xl bg-blue-700 text-white w-fit flex justify-center "
      >
        Load More
      </button>
      <button
        onClick={() => {
          mod('c')
        }}
        className="py-4 px-12 rounded-xl bg-blue-700 text-white w-fit flex justify-center "
      >
        Create Team
      </button>

      <button
        onClick={() => {
          dispatch(tview(true))
          mod('')
        }}
        className="py-4 px-12 rounded-xl bg-blue-700 text-white w-fit flex justify-center "
      >
        View Teams
      </button>
      <button
        onClick={() => {
          dispatch(tview(false))
          mod('')
        }}
        className="py-4 px-12 rounded-xl bg-blue-700 text-white w-fit flex justify-center "
      >
        View Players
      </button>
    </div>
  )
}
export default Navbar
