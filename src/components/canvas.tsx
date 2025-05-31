/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { IconCheck } from '../components/ui/icons';
import * as Tooltip from '@radix-ui/react-tooltip'; // Import Radix Tooltip
import { useCallback, useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const colorList = ['#82BC31'];

export default function Canvas() {
  const [color, setColor] = useState('#82BC31');
  const canvasRef = useRef(null);

  const handleClear = useCallback(() => {
    //@ts-ignore
    canvasRef.current.clearCanvas();
  }, []);

  return (
    <>
      <ReactSketchCanvas
        ref={canvasRef}
        canvasColor="transparent"
        style={{
          position: 'fixed',
          top: '58px',
          zIndex: 10,
        }}
        strokeWidth={4}
        strokeColor={color}
        className="relative"
      />
      <div className="absolute top-[50%] right-4 z-20 rounded-full bg-accent p-2">
        <div className="flex flex-col space-y-2">
          {colorList.map((data, key) => (
            <Tooltip.Provider key={key}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button
                    onClick={() => setColor(data)}
                    className="size-7 rounded-full"
                    style={{ backgroundColor: data }}
                    aria-label="Change brush color"
                  >
                    {data === color && <IconCheck className="m-auto size-5" />}
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="left"
                  align="center"
                  className="bg-transparent text-white border border-[#82BC31] p-2 rounded-md shadow-md text-sm md:text-base"
                >
                  <div>Click and draw something</div>
                  <Tooltip.Arrow className="fill-gray-700" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={handleClear}
                  className="size-7 rounded-full bg-border"
                  aria-label="Clear doodle"
                >
                  <FaTrash className="m-auto size-4" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="left"
                align="center"
                className="bg-transparent text-white border border-[#82BC31] p-2 rounded-md shadow-md text-sm md:text-base"
              >
                <div>Clear the canvas</div>
                <Tooltip.Arrow className="fill-gray-700" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>
    </>
  );
}
