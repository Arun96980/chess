import { ChessBoard } from "../components/Chessboard"


export const Game = () => {

return <div className="justify-center flex">

<div className="pt-8 max-w-screen-lg f">

<div className="grid grid-cols-6 gap-4">

<div className="col-span-4

bg-red-200">

<ChessBoard />

</div>
<div className="col-span-2

bg-green-200">

<button>Play</button>


</div>

</div>
</div>
</div>
}