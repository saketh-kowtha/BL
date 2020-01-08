read -p "Enter Name of project : " project

echo Created Project Folder
mkdir $project
cd $project
echo Initilized package.json
npm init -y

echo Installing React and React-Dom
npm install react react-dom --save

#git init
#touch .gitignore

echo "node_modules\ndist" > .gitignore


mkdir src
cd src 
touch index.js index.css index.html

cat <<EOF > index.html
<!DOCTYPE html>
<html>
    <head>
        <title>
            React App
        </title>
    </head>
    <body>
        <div id="root"></div>
    </body>

</html>
EOF

cat <<EOF > index.js
import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

class App extends React. Component{

    render(){

        return(

            <div>Welcome To React</div>

        )

    }

}

ReactDOM.render(<App />, document.getElementById('root'))
EOF

npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin


cat <<EOF > ../webpack.config.js
var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {

    entry : './src/index.js',

    output : {

        path : path.resolve(__dirname , 'dist'),

        filename: 'index_bundle.js'

    },

    module : {

        rules : [

            {test : /\.(js)$/, use:'babel-loader'},

            {test : /\.css$/, use:['style-loader', 'css-loader']}

        ]

    },

    mode:'development',

    plugins : [

        new HtmlWebpackPlugin ({

            template : 'src/index.html'

        })

    ]
}
EOF

echo '
Add This in package.json
  "babel":{
    "presets" : [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },

  "scripts": {
    "start": "webpack-dev-server --open",
    "create": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
'
