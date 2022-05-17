export const setTheme = (themeJSON) => {
    Object.keys(themeJSON).forEach(key =>{
        const cssVar = `--${key}`
        const cssValue = themeJSON[key]
        document.body.style.setProperty(cssVar, cssValue)
    })
}