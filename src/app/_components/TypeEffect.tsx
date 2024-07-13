"use client"
import { Typewriter } from "react-simple-typewriter";
function TypeEffect(){
    return(
        <div className="text-5xl text-white  text-bold w-3/4 leading-relaxed text-center">
        <Typewriter
            words={[
                'Welcome to the Future of Reading!',
                'Discover Thousands of Books at Your Fingertips.',
                'Join Our Community of Avid Readers and Learners.',
                'Unlock Endless Knowledge and Entertainment.',
                'Explore, Learn, and Grow with Us!',
                'Your Next Favorite Book is Just a Click Away.'
              ]}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </div>
    )
}
export {TypeEffect}
