// components/ProblemDescription.tsx

import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";

interface ProblemDescriptionProps {
  
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
    <div className='bg-dark-layer-1'>
      <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
        <div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
          Description
        </div>
      </div>
      <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
        <div className='px-5'>
          <div className='w-full'>
            <div className='flex space-x-4'>
              <div className='flex-1 mr-2 text-lg text-white font-medium'>1. Two Sum</div>
            </div>
            <div className='flex items-center ml-3'>
              <div 
              className='text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize'>
                Easy
              </div>
              <div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-green-s'>
                <BsCheck2Circle />
              </div>
              <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
                <AiFillLike/>
                <span className='text-xs'>120</span>
              </div>
              <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
                <AiFillDislike/>
                <span className='text-xs'>2</span>
              </div>
              <div className='cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] ml-4 text-xl transition-colors duration-200 text-dark-gray-6'>
                <TiStarOutline/>
              </div>
            </div>

            <div className='text-white text-sm'>
              <p className='mt-3'>
                Give an array of integrs <code>nums = [2,7,11,15]</code> and a target <code>target = 9</code>,
                <br />
                return <code>[0,1]</code> <br />
                or <code>[-1,2]</code>. <br />
                You may assume that each input would have <code>exactly one solution</code>. <br />
                You can not use the <code>sorted</code> array. <br />
                
              </p>
            </div>
            
            {/* Example 1 */}
            <div className='mt-4'>
              <div>
                <p className='font-medium text-white'>Example 1: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input:</strong><br />
                    <strong>Output:</strong><br />
                    <strong>Exlpanation:</strong>
                  </pre>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className='mt-4'>
              <div>
                <p className='font-medium text-white'>Example 2: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input:</strong><br />
                    <strong>Output:</strong><br />
                    <strong>Exlpanation:</strong>
                  </pre>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className='mt-4'>
              <div>
                <p className='font-medium text-white'>Example 3: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input:</strong><br />
                    <strong>Output:</strong><br />
                    <strong>Exlpanation:</strong>
                  </pre>
                </div>
              </div>
            </div>

            {/* Example 4 */}
            <div className='mt-4'>
              <div>
                <p className='font-medium text-white'>Example 4: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input:</strong><br />
                    <strong>Output:</strong><br />
                    <strong>Exlpanation:</strong>
                  </pre>
                </div>
              </div>
            </div>

            {/* Example 5 */}
            <div className='mt-4'>
              <div>
                <p className='font-medium text-white'>Example 5: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input:</strong><br />
                    <strong>Output:</strong><br />
                    <strong>Exlpanation:</strong>
                  </pre>
                </div>
              </div>
            </div>

            <div className='my-5'>
              <div className='text-white text-sm font-medium'>Constraints: </div>
              <ul className='text-white ml-5 list-disc'>
                <li className='mt-2'>
                    <code>constraint 1</code>
                 </li>
                 <li className='mt-2'>
                    <code>constraint 2</code>
                 </li>
                 <li className='mt-2'>
                    <code>constraint 3</code>
                 </li>
                 <li className='mt-2 text-sm'>
                  <strong>Only one valid answer exists</strong>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
