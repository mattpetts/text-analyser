import { useState, useEffect } from 'react';
import { getCharacterCount, getWordCount, calculateLetterDensity, calculateReadingTime } from './Utils';

import Card from './components/Card';
import DensityItem from './components/DensityItem';
import Button from './components/Button';

import { FaSun, FaMoon } from "react-icons/fa";
import './main.css';

function App() {

  const [ inputVal, setInputVal ] = useState( '' );
  const [ charactersCount, setCharacterCount ] = useState( [] );
  const [ showMore, setShowMore ] = useState( false );
  const [ darkMode, setDarkMode ] = useState( true );

  useEffect(() => {
    setCharacterCount( [ ...calculateLetterDensity( inputVal ) ] );
  }, [ inputVal ]);

  return (
    <div className={ darkMode ? 'dark' : 'light' }>
      <div className='bg-gray-900 light:bg-white text-white light:text-slate-900 min-h-screen p-5'>
        <div className='w-11/12 md:w-8/12 mx-auto my-10'>
          <div className='flex justify-end'>
            <Button callback={ () => setDarkMode( ! darkMode ) }>{ darkMode ? <FaSun /> : <FaMoon /> }</Button>
          </div>
          <h1 className='font-bold text-5xl text-center mb-10'>Analyze your text</h1>
          <textarea className='bg-gray-700 light:bg-gray-100 w-full p-5 rounded-md mb-5 border light:border-gray-200 border-gray-500 outline-none text-lg' placeholder='Type or paste your text here' cols="30" rows="10" onChange={(e) => setInputVal(e.target.value)}></textarea>

          <div className='flex flex-row flex-wrap justify-between items-start mb-5 gap-5 lg:flex-nowrap lg:flex-row'>
            <Card title="Character Count" value={ getCharacterCount( inputVal ) } colorClass={ 'from-purple-300 to-purple-500' } />
            <Card title="Word Count" value={ getWordCount( inputVal ) } colorClass={ 'from-green-300 to-green-500' } />
            <Card title="Sentence Count" value={ ( inputVal.match( RegExp(`[.?!]`, 'gi') ) || [] ).length } colorClass={ 'from-pink-300 to-pink-500' } />
            <Card title="Reading Time" value={ calculateReadingTime( inputVal ) } colorClass={ 'from-orange-300 to-orange-500' } />
          </div>

          {inputVal.length > 0 && 
            <div>
              <div className='flex justify-between items-center'>
                <h3 className='font-bold text-lg'>Letter Density</h3>
              </div>
              <ul>
                {charactersCount.sort( ( a, b ) => ( b.val - a.val ) ).map(( char, i ) => {
                  if ( ! showMore && i > 4 ) {
                    return;
                  }
                  return <DensityItem char={ char } />
                })}
              </ul>
              { charactersCount.length > 5 && <Button callback={ () => setShowMore( ! showMore ) }>{ showMore ? 'Show Less' : 'Show More'}</Button> }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
