export default function Button( props ) {
  return (
    <button className='px-3 py-2 rounded block bg-gradient-to-r from-blue-300 to-blue-500 cursor-pointer font-bold text-black light:text-white' onClick={ props.callback }>
        { props.children }
    </button>
  )
}
