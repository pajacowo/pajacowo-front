import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
   status: {
      danger: "#e53e3e",
   },
   palette: {
      primary: {
         main: "#371A9F",
         darker: "#053e85",
      },
      neutral: {
         main: "#64748B",
         contrastText: "#fff",
      },
      secondary: {
        main: "#EBCE4B",
      }
   },
});
