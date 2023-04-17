import React from 'react'

export default function Translate({getResults, setInput, result}) {
  return (
    <div className='translate'>
        <textarea  cols="55" rows="10"
        onChange={(e) => setInput(e.target.value)}

        >

        </textarea>
        <div>
            <button 
            className='action-btn' 
            onClick={getResults}
            >

              Give me a reply</button>

              {/* <h3>{result}</h3> */}
              {result.length > 0 ? <h3>{result}</h3> : ''}

        </div>
    </div>
  )
}
