import "./App.css"
import ChatBot from "npm-chatbot-challenge/src/Chat.jsx";

function App() {

  return (
       <>
          <header className = { `relative  gap-10 h-[60vh] justify-center bg-mainGlassGradient backdrop-blur
                                 flex flex-col w-full  items-center min-h-screen shadow-boldButtonShadow` } >
             <div className = { `w-full  lg:w-[50%] gap-4 flex flex-col pt-32`  } >
                
                <h1 className = { `text-xl md:text-5xl w-full font-bold` } >
                   Lorem ipsum dolor sit amet,
                </h1 >
                <p className = { `text-xl font-light` } >
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   
                </p >
              
             </div >
             <div className = { ` relative w-full  h-64 flex  justify-end lg:scale[110]` } >
                <img
                     src = { "/images/avatar.png" }
                     alt = { "avatar" }
                     
                     className = { `w-full lg:ltr:object-right object-center h-full lg:rtl:object-left
                          object-contain` }
                />
                <div className = { `absolute ltr:right-0  rtl:left-0 w-[90%] h-full opacity-25 bg-gradientRadialBackgroundBack` } />
             </div >
          
          </header >
          <ChatBot
               greetingMessage = "👋 Hello rvice. How can I assist you today?"
               position = "bottom-right" />
       
       </>
  )
}

export default App
