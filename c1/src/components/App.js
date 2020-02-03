import React from "react";
import { SayHello } from "./SayHello";

export class App extends React.Component {
    render() {
        return(
            <div>
                <SayHello />
                <SayHello />
                <SayHello />
                <SayHello />
                <SayHello />
                
            </div>
        )
    }
}