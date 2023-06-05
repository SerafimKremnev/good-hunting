import { useEffect } from 'react'

function remResize () {
  const defaultWidth = 300
  const maxWidth = 425
  const defaultFontSize = 10

  const widthWidth = document.documentElement.clientWidth;

  const htmlEl = document.querySelector('html') as HTMLElement;

  if ((widthWidth > defaultWidth && widthWidth < maxWidth) && htmlEl) {
    const diff = widthWidth - defaultWidth
    const percent = diff / (defaultWidth / 100) / 100
    htmlEl.style.fontSize = `${defaultFontSize + defaultFontSize * percent}px`
  } else {
    htmlEl.style.fontSize = '10px'
  }
}

export const useRemResize = () => {
  useEffect(() => {
    remResize();
    window.addEventListener('resize', remResize)

    return () => {
      window.removeEventListener('resize', remResize)
    }
  }, []);
}
