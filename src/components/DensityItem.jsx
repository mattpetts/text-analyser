import PercentageBar from "./PercentageBar";

export default function DensityItem( { char } ) {
    return (
        <li className='py-5 flex items-center justify-start'>
            <div className="w-2 mr-5">
                <p className='mr-5'>{ char.key.toUpperCase() }</p>
            </div>
            <PercentageBar percentage={ char.percentage } />
            <div className='ml-5 flex'>
                <p className="mr-1">{ char.val }</p>
                <p>({ char.percentage }%)</p>
            </div>
        </li>
    )
}
