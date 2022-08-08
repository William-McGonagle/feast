#!/usr/bin/node

// Import Commands
import Help from "./commands/help.js";
import Build from "./commands/build.js";

function ParseCommandInput(input) {

    const command = input[0] || "";

    switch (command) {

        case 'help':
            Help();
            return;

        case 'build':
            Build();
            return;
            
        default:
            console.error("You must have a command.");
            return;

    }

}

ParseCommandInput(process.argv.slice(2));