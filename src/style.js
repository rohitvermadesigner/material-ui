import { createTheme } from '@mui/material/styles';

const useStyle = createTheme((theme)=>({
    container:{
        backgroundColor: theme.palette.background.paper,
    },
    btn : { marginTop:'200px'}
}))

export default useStyle;