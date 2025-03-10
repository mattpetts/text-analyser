export default function PercentageBar( { percentage } ) {
  return (
    <div className='w-full h-2 rounded bg-gray-700 light:bg-gray-100'>
        <div style={{ width: `${ percentage }%` }} className={`rounded h-2 bg-gradient-to-r from-blue-300 to-blue-500 transition-all duration-200`}></div>
    </div>
  )
}
