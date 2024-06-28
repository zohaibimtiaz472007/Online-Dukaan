// /* eslint-disable react/prop-types */
// import React from 'react';
// import {
//     Button,
//     Dialog,
//     DialogBody,
// } from "@material-tailwind/react";

// const BuyNowModal = ({ addressInfo = {}, setAddressInfo, buyNowFunction }) => {
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => setOpen(!open);

//     return (
//         <>
//             <Button
//                 type="button"
//                 onClick={handleOpen}
//                 className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
//             >
//                 Buy now
//             </Button>
//             <Dialog open={open} handler={handleOpen} className="bg-pink-50">
//                 <DialogBody className="">
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="name"
//                             value={addressInfo.name || ''}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     name: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your name'
//                             className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="address"
//                             value={addressInfo.address || ''}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     address: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your address'
//                             className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="number"
//                             name="pincode"
//                             value={addressInfo.pincode || ''}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     pincode: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your pincode'
//                             className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             value={addressInfo.mobileNumber || ''}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     mobileNumber: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your mobile number'
//                             className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
//                         />
//                     </div>

//                     <div className="">
//                         <Button
//                             type="button"
//                             onClick={() => {
//                                 handleOpen();
//                                 buyNowFunction();
//                             }}
//                             className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
//                         >
//                             Buy now
//                         </Button>
//                     </div>
//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }

// export default BuyNowModal;

import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo = {}, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-5 py-3 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 border border-transparent dark:border-gray-700 hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
      >
        Buy now
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-white rounded-3xl shadow-2xl p-6"
      >
        <DialogBody className="p-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              value={addressInfo.name || ""}
              placeholder="Enter your name"
              className="bg-white border border-gray-300 px-4 py-2 w-full rounded-lg outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              value={addressInfo.address || ""}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Enter your address"
              className="bg-white border border-gray-300 px-4 py-2 w-full rounded-lg outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode || ""}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Enter your pincode"
              className="bg-white border border-gray-300 px-4 py-2 w-full rounded-lg outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber || ""}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Enter your mobile number"
              className="bg-white border border-gray-300 px-4 py-2 w-full rounded-lg outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <Button
              type="button"
              // onClick={handleOpen}
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-5 py-3 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 border border-transparent dark:border-gray-700 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
            >
              Confirm Purchase
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
