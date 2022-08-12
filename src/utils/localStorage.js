export const setThemeToLocalStorage = (theme) => {
  localStorage.setItem('theme', theme)
}
export const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme')
  if(!theme){
    return false
  }
  
  const parsedTheme = JSON.parse(theme)
  return parsedTheme
}
