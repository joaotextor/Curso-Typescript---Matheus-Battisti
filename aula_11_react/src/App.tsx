import * as React from 'react';

//~Importação de componentes
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'
import State from './components/State'
import Context from './components/Context'

type textOrNull = string | null

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = React.createContext<IAppContext | null>(null)

function App() {

  //~Variáveis

  const name: string = "João"
  const age: number = 30
  const isWorking: boolean = true

  //~Funções

  const userGreeting = (user: string): string => {
    return `Olá, ${user}`
  }

  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  }

  const myText:textOrNull = "Algum texto"
  let mySecondText:textOrNull = null

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
        <h1>React com TypeScript</h1>
        <h2>Nome: {name}</h2>
        <span>Idade: {age}</span>
        {isWorking && (<p>Está trabalhando!</p>)}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo Componente com Props"/>
        <Destructuring
          title="Primeiro Post"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          comentsQty={10}
          tags={["ts", "js", "react"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo Post"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          comentsQty={10}
          tags={["next", "js", "react"]}
          category={Category.JS}
        />
        <State/>
        {
          myText && <p>Tem texto na variável</p> 
        }
        {
          mySecondText && <p>Tem texto na variável</p> 
        }
    </div>
    <Context/>
  </AppContext.Provider>
  )
}

export default App;
