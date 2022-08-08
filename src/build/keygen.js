import { exec, execSync } from "child_process";

import RandomPassword from "../utility/randomPassword.js";

export default async function GenerateKeys() {

    const dname = [
        [ 'CN', 'William McGonagle' ].join('='),
        [ 'OU', 'William McGonagle' ].join('='),
        [ 'O', 'William McGonagle' ].join('='),
        [ 'L', 'Bridgeport' ].join('='),
        [ 'ST', 'Connecticut' ].join('='),
        [ 'C', 'US' ].join('='),
    ].join(',');

    const javaPath = execSync('/usr/libexec/java_home').toString();
    execSync(`cd ${javaPath}`);
    const command = execSync(`sudo keytool -genkey -v -dname "${dname}" -storepass '${RandomPassword()}' -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`);

    console.log(command.toString());

}
