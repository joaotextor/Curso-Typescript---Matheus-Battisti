import * as React from 'react';

export interface IStateProps {
}

export default function State (props: IStateProps) {
    const [text, setText] = React.useState<string | null>("Testando o hook")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
    }
  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}
