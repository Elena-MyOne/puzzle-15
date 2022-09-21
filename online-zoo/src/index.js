import './styles/style.scss'

// import json from './assets/json.json'  //for json files import
// import xml from './assets/data.xml'  //for xml files import

// import Post from "@models/Post"; //js file example
// import WebpackLogo from './assets/webpack-logo' //js image example

// const post = new Post('Webpack Post Title', WebpackLogo)


//dynamic import lodash
import('lodash').then(({default: lodash}) => {  
  console.log('lodash: ', lodash.random(0, 100, true))
}) 
