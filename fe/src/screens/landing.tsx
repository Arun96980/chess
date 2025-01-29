import {useNavigate} from 'react-router-dom'

export const Landing = () => {
    const navigate = useNavigate()
    return <div>
        <div className="p-8"></div>
        <div className="grid grid-cols- md:grid-cols-2">

            <div className="pl-8 pr-8">
                <img src="chess.png" />
            </div>

        <div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Welcome to ChessMaster
    </h1>
            <br />
            <br />
            
            <p className="text-lg pl-24 text-black-300">
      Play, Strategize, and Master the Game of Kings.
    </p>
    <br />
    <button onClick={() => {
        navigate("/game")
    }}   className=" ml-50  mt-10  bg-purple-600 hover:bg-blue-700 text-purple-400 font-bold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105">
      Start Your Game
    </button>

        </div>
       
        </div>
    </div>
}