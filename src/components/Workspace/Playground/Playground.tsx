// components/Playground.tsx

import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import ReactCodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorFooter from './EditorFooter';

interface PlaygroundProps {
  
}

const Playground: React.FC<PlaygroundProps> = () => {
  return (
    <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
        <PreferenceNav />
        <Split className='h-[calc(100vh-94px)]' direction="vertical" sizes={[60, 40]} minSize={60}>
            <div className='w-full overflow-auto'>
                <ReactCodeMirror 
                    value='const a = 1;'
                    theme={vscodeDark}
                    extensions={[javascript()]}
                    style={{fontSize: 16}}/>
            </div>
            <div className='w-full p-5 overflow-auto'>
                
                {/* Test case heading */}
                <div className='flex h-10 items-center space-x-6'>
                    <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                        <div className='text-sm font-medium leading-5 text-white'>Test cases</div>
                        <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white'/>
                    </div>
                </div>

                {/* Test case body */}
                <div className='flex'>
                    {/* Case 1 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex
                            bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                Case 1
                            </div>
                        </div>
                    </div>

                    {/* Case 2 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex
                            bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                Case 2
                            </div>
                        </div>
                    </div>

                    {/* Case 3 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex
                            bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                Case 3
                            </div>
                        </div>
                    </div>
                </div>
                <div className='font-semibold my-4'>
                    <p className='text-sm font-medium mt-4 text-white'>Input: </p>
                    <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent
                        text-white mt-2'>
                            nums: 
                    </div>
                    <p className='text-sm font-medium mt-4 text-white'>Output: </p>
                    <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent
                        text-white mt-2'></div>
                </div>
            </div>
        </Split>
        <EditorFooter />
    </div>
  );
};

export default Playground;