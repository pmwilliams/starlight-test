import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log('hello world')

const e = React.createElement;

export interface MainProps {
}

export class Main extends React.Component<MainProps> {
    
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
};

const domContainer = document.querySelector('#main_react_container');
ReactDOM.render(e(Main), domContainer);