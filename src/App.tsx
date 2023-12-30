import { CssVarsProvider } from '@mui/joy/styles'
import { Sheet } from '@mui/joy'

function App() {
  return (
    <CssVarsProvider>
      <Sheet variant='outlined'>Welcome!</Sheet>
    </CssVarsProvider>
  )
}

export default App
