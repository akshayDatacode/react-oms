import React from 'react'

const Home = () => {

  return (
    <>
      <h1>HOME</h1>
      <div id="aboutus" className='my-5'>
        <h1 className='mt-5'>Aboutus</h1>
        <h2>Lifting State Up
          Currently, each Square component maintains the game’s state. To check for a winner, we’ll maintain the value of each of the 9 squares in one location.

          We may think that Board should just ask each Square for the Square’s state. Although this approach is possible in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, just like we did when we passed a number to each Square.

          To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

          Lifting state into a parent component is common when React components are refactored — let’s take this opportunity to try it out.

          Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:</h2>
      </div>
      <div id="service" className='my-5'>
        <h1 className='mt-5'>service</h1>
        <h2>Lifting State Up
          Currently, each Square component maintains the game’s state. To check for a winner, we’ll maintain the value of each of the 9 squares in one location.

          We may think that Board should just ask each Square for the Square’s state. Although this approach is possible in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, just like we did when we passed a number to each Square.

          To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

          Lifting state into a parent component is common when React components are refactored — let’s take this opportunity to try it out.

          Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:</h2>
      </div>
    </>
  )
}

export default Home