export default function RandomPassword() {

    return Math.floor(Math.random() * Math.pow(2, 128) + Math.random() * Math.pow(2, 64)).toString(16).replace(/[0]+$/g, '');

}