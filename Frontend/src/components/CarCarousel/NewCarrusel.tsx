// import { useState } from "react";
// export default function NewCarrusel() {
//   interface Slide {
//     image: string;
//     title: string;
//     description: string;
//   }
//   const images: Slide[] = [
//     {
//       image: "src/assets/ImagenesCarros/AudiA5.png",
//       title: "Slide 1",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       image: "src/assets/ImagenesCarros/NissanVersa.png",
//       title: "Slide 2",
//       description:
//         "Nunc accumsan, nisl id facilisis hendrerit, neque augue ultricies.",
//     },
//     {
//       image: "src/assets/ImagenesCarros/ToyotaCorolla.png",
//       title: "Slide 3",
//       description:
//         "Duis eget eros aliquam, ultricies leo a, aliquam erat volutpat.",
//     },
//   ];
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [selectedImage, setselectedImage] = useState(images[0]);
// //   const [rigthImage, setRigthImage] = useState({})


//   const selectNewImages = (_index: number, images: Slide[], next = true) => {
//     const condition = next
//       ? selectedIndex < images.length - 1
//       : selectedIndex > 0;
//     const nextIndex = next
//       ? condition
//         ? selectedIndex + 1
//         : 0
//       : condition
//       ? selectedIndex - 1
//       : images.length - 1;
//     setselectedImage(images[nextIndex]);
//     setSelectedIndex(nextIndex);
//   };

//   const previus = () => {
//     selectNewImages(selectedIndex, images, false);
    
//   };
//   const next = () => {
//     selectNewImages(selectedIndex, images, true);
//   };
//   let indexImageRigth = (
//       _selectIndex: number,
//       _images: Slide[]
//     ): number  => {
//         if (_selectIndex > 0 && _selectIndex < images.length-1) {
//             let index: number = _selectIndex - 1;
//             console.log(index);
            
//             return index;
//         } else {
//           console.log("index else = 0" );
          
//             return 0;
//         }
//     };
//   const sladeRigth: Slide = images[indexImageRigth(selectedIndex,images)];
    
//   return (
//     <>
//       {/* <div className="relative w-full h-full overflow-hidden flex"> */}
//       {/* <div className="flex flex-col w-full h-full "> */}
//       <div className="flex align-middle justify-center">
//         <div className="flex align-middle items-center">
//           <div>
//             <img
//               className="w-[297.44px] h-[202.91px] justify-center "
//               src={images[selectedIndex].image}
//               alt="image"
//             />
//           </div>
//           <button onClick={previus}>
//             <svg
//               className="rotate-180"
//               width="36"
//               height="50"
//               viewBox="0 0 36 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M34.2977 27.2964L10.9227 48.264C9.30703 49.7133 6.69453 49.7133 5.09609 48.264L1.21172 44.7797C-0.403906 43.3305 -0.403906 40.987 1.21172 39.5532L17.7805 24.6909L1.21172 9.82857C-0.403906 8.37933 -0.403906 6.0359 1.21172 4.60208L5.07891 1.08692C6.69453 -0.362308 9.30703 -0.362308 10.9055 1.08692L34.2805 22.0545C35.9133 23.5038 35.9133 25.8472 34.2977 27.2964Z"
//                 fill="#707070"
//               />
//             </svg>
//           </button>
//           <img
//             className="w-[445px] h-[365.05px] justify-center "
//             src={images[selectedIndex + 1].image}
//             alt="image"
//           />
//           <button onClick={next}>
//             <svg
//               width="36"
//               height="50"
//               viewBox="0 0 36 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M34.2977 27.2964L10.9227 48.264C9.30703 49.7133 6.69453 49.7133 5.09609 48.264L1.21172 44.7797C-0.403906 43.3305 -0.403906 40.987 1.21172 39.5532L17.7805 24.6909L1.21172 9.82857C-0.403906 8.37933 -0.403906 6.0359 1.21172 4.60208L5.07891 1.08692C6.69453 -0.362308 9.30703 -0.362308 10.9055 1.08692L34.2805 22.0545C35.9133 23.5038 35.9133 25.8472 34.2977 27.2964Z"
//                 fill="#707070"
//               />
//             </svg>
//           </button>
//           <img
//             className="w-[297.44px] h-[202.91px] justify-center "
//             src={sladeRigth.image}
//             alt="image"
//           />
//         </div>
//       </div>
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// }
