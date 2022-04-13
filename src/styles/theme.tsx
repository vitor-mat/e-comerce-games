interface themeType{
  variant: string;
  colors: {
    main: string;
  }
}

const ligthTheme = {
  variant: "light",
  colors:{
    main: "#F37020"
  }
}

const darkTheme = {
  variant: "dark",
  colors:{
    main: "black"
  }
}

export let theme: themeType = darkTheme

export const setTheme = () => {
  if(theme.variant == "light") return theme = darkTheme
  return theme = ligthTheme
}

setTheme()