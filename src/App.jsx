import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {

  const [inputVal, setInputVal] = useState('');
  const [charactersCount, setCharacterCount] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const charsToCheck = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  useEffect(() => {
    setCharacterCount([]);
    {charsToCheck.forEach((c) => {
      const count = (inputVal.match(new RegExp(c, 'gi')) || []).length;
      setCharacterCount( prev => ([ ...prev, { key: c, val: count } ] ) )
    })}
  }, [inputVal]);

  return (
    <>
      <textarea cols="30" rows="10" onChange={(e) => setInputVal(e.target.value)}></textarea>
    
      <Card title="Character Count" value={ inputVal.replace( ' ', '' ).length } />
      <Card title="Word Count" value={ inputVal.split( ' ' ).length } />
      <Card title="Sentence Count" value={ ( inputVal.match( RegExp(`[.?!]`, 'gi') ) || [] ).length } />

      <div>
        <p>Character occurance</p>
        <ul>
          {charactersCount.sort( (a, b) => ( b.val - a.val ) ).map((char, i) => {
            if (! showMore && i > 4 ) {
              return;
            }
            return <li>{`${char.key}: ${char.val} / ${ inputVal.replace( ' ', '' ).length }`}</li>
          })}
        </ul> 
        <button onClick={() => setShowMore( ! showMore )}>{showMore ? 'Show Less' : 'Show More'}</button>
      </div>
    </>
  )
}

export default App
