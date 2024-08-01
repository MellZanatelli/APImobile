import 'react-native-gesture-handler';
import NavigationStack from './src/navigation';
import NavigationTab from './src/navigation';
import { Tela1 } from './src/screens/Tela1'
import { Tela2 } from './src/screens/Tela2'
import { Tela3 } from './src/screens/Tela3'
import { Tela4 } from './src/screens/Tela4'
import { Dispatch, SetStateAction, useState } from 'react'

export interface Page {
  setPagina: Dispatch<SetStateAction<number>>
}

export default function App() {

  const [pagina, setPage] = useState(1)

  switch (pagina) {
    case 1:
      return <Tela1 setPagina={setPage} />
      break
    case 2:
      return <Tela2 setPagina={setPage} />
      break
    case 3:
      return <Tela3 setPagina={setPage} />
      break
    case 4:
      return <Tela4 setPagina={setPage} />
      break
  }

  return (
    <Navigation />
  );

}
