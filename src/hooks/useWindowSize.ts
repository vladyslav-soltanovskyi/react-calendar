import { useEffect, useState } from 'react';

const getWindowSizes = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})

export const useWindowSize = () => {
	const [ windowSize, setWindowSize ] = useState(getWindowSizes());
	const resizeHandler = () => setWindowSize(getWindowSizes());

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	return windowSize;
}