import * as React from 'react';

import { AppContext} from '../App'

export default function Context () {

    const details = React.useContext(AppContext)

    return (
        <div>
        {details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h4>FW: {details.framework}</h4>
                <h4>Projects: {details.projects}</h4>
            </div>
        )}
        </div>
  );
}
