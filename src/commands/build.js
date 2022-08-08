import Build from '../build/index.js'

export default function RunCommand() {
    
    Build();

}

export function GetName() {

    return `Build`;

}

export function GetCommandText() {

    return `build`;

}