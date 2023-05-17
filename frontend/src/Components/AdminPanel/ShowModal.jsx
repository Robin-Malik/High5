import { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const ShowModal = ({ closeModal, children}) => {
  const [containerToLoad, setContainerToLoad] = useState(null);
  
  useEffect(() => {
    setContainerToLoad(document.getElementById('myPortalModalDiv'));
    if(containerToLoad) {
      console.log(containerToLoad);
    }
    else{
      console.log("No document found");
    }
  }, []);

  return containerToLoad && ReactDOM.createPortal(
    <div class="fixed inset-0 bg-gray-400 bg-opacity-90">
          <div class="fixed inset-0 bg-gray-400 bg-opacity-90" onClick={closeModal}></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full p-8 rounded-md bg-white">
            {children}
          </div>
    </div>, containerToLoad);
};


// const ShowModal = ({ closeModal, children}) => {

//   const [domReady, setDomReady] = useState(false)

//   useEffect(() => {
//     setDomReady(true)
//   })
 

//   return domReady ? ReactDOM.createPortal(
//     <div>
//       <div onClick={closeModal}></div>
//       <div>
//         {children}
//       </div>
//     </div>,
//     document.getElementById(".myPortalModalDiv")
//   ) : null;
// };

export default ShowModal;