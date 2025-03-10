import { calculatePercentage, trimAndRemoveWhitespace } from "../Utils";
import PercentageBar from "./PercentageBar";

export default function DensityItem( { char, inputVal } ) {
    const percentage = calculatePercentage( char.val, trimAndRemoveWhitespace( inputVal ).length );
    return (
        <li className='py-5 flex items-center justify-start'>
            <div className="w-2 mr-5">
                <p className='mr-5'>{ char.key.toUpperCase() }</p>
            </div>
            <PercentageBar percentage={ percentage } />
            <div className='ml-5 flex'>
                <p className="mr-1">{ char.val }</p>
                <p>({ percentage }%)</p>
            </div>
        </li>
    )
}
