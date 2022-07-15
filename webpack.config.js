const path = require('path');
//Aquí creamos una cajita que adentro requiere tener la ruta path
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Aquí creamos una cajita que adentro requiere tener el plugin html-webpack-plugin
//const { Template } = require('webpack');
//Aquí creamos una cajita Template adentro requiere tener webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
//Aquí creamos una cajita que adentro requiere tener el plugin mini-css-extrac-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	mode: 'development',
	//Aquí le dices a tu mejor amigo que empaque todo como si fuera para probar
	//Si pones le dices que empaque como si fuera para un cliente
	entry: './src/index.js',
	//Aquí le dices que el punto de entrada de donde debe sacar su guía sería './src/index.js'
	output: {
	//Aquí le empiezas a decir donde te pondrá el paquete final.
		path: path.resolve(__dirname, 'dist'),
		//La ruta para poner debe resolver cual es la ruta principal del proyecto
		//Ahí debe empacar todo en una carpeta llamada "dist"
		filename: 'bundle.js',
		//El nombre el paquete será "bundle.js"
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@container': path.resolve(__dirname, 'src/container'),
		},
		//aquí le decimos que vamos a trabajar con archivos ".js" y ".jsx"
	},
	module: {
	rules: [
		//Aquí le diremos a nuestro mejor amigo que reglas debe seguir a la hora de empacar.
		{
			//Regla 01
			test: /\.(js|jsx)$/, //Aqui dice que si encuentra un archivo .js o .jsx
			exclude: /node_modules/, //Que ese archivo NO este en node_modules
			use: { //utilice lo siguiente para empacar:
				loader: 'babel-loader'// el loader llamado "babel-loader"
			}
		},
		{
			//Regla 02
			test: /\.html$/, //Aquí dice que si encuentra un archivo .html
			use: { //utilice lo siguiente para empacar
				loader: 'html-loader'//el loader llamado: "html-loader"
			}
		},
		{
			//Regla 03
			test: /\.(css|scss)$/, //Aquí dice que si encuentra un archivo .css o .scss
			use: [ //utilice lo siguiente para empacar
				'style-loader', //Loader para empacar estilos llamado "style-loader"
				'css-loader', //Loader para empacar css llamado "css-loader"
				'sass-loader'//Loader para emparcar sass llamado "sass-loader"
			]
	    },
		{
			test: /\.(woff|woff2)$/,
			use: {
			  loader: "url-loader",
			  options: {
				// limit => limite de tamaño
				limit: 10000,
				// Mimetype => tipo de dato
				mimetype: "application/font-woff",
				// name => nombre de salida
				name: "[name].[ext]",
				// outputPath => donde se va a guardar en la carpeta final
				outputPath: "./assets/fonts/",
				publicPath: "./assets/fonts/",
				esModule: false,
			  }
			}
		},
		{
			test: /\.png/,
			type: "asset/resource"
		},
        {
			//Regla 04
            test: /\.svg$/, //Aquí dice que si encuentra un archivo .svg
            use: [ //utilice lo siguiente para empacar
                {
                    loader: 'svg-url-loader', // Loader de llamado "svg-url-loader" con
                    options: { //las siguientes configuraciones:
                        limit: 10000, //un limite de 10000
                    },
                },
            ],
    	}
    ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ]
    },
    plugins: [
		//Aquí vas a poner los plugins y le darás super poderes a tu mejor amigo WeobPack
        new HtmlWebpackPlugin(
            {
                template: './public/index.html', //Usa de plantilla este documento
                filename: './index.html'//Vas a terminar generando un archivo llamado index.htlm
            }
        ),
        new MiniCssExtractPlugin({
				//Aquí le damos el super poder para crear los archivos de css que iran a tu paquete para cliente
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
			  {
				from: path.resolve(__dirname, "src", "assets/fonts"),
				to: "assets/fonts"
			  },
			  {
				from: path.resolve(__dirname, "src", "assets/images"),
				to: "assets/images"
			  },
			  {
				from: path.resolve(__dirname, "src", "assets/Icons"),
				to: "assets/Icons"
			  }
			]
		}),
    ],
		//LO DE ABAJO COPIA Y PEGALO, ES UNA CONFIGURACIÓN PARA DEV SERVER
    devServer: {
        historyApiFallback: true,
    } //MÁS INFO SOBRE ESTA CONFIGURACIÓN EN EL CURSO DE WEBPACK 
}