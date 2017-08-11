import React, { Component } from 'react';

class Weather extends Component {
    constructor(){
        super();
        this.msg=null;
    }
    componentDidMount(){
        const cityNum=101020100;
        const apiUrl=`/data/cityinfo/${cityNum}.html`;
        fetch(apiUrl).then((response)=>{
            if(response.status!==200){
                throw new Error ('请求失败');
            }
            response.json().then((resJson)=>{
                 this.setState({msg:resJson.weatherinfo});
                 console.log(this.state);
            }).catch((error)=>{
                this.setState({msg:null});
                 console.log(this.state);
            });
        }).catch((error)=>{
            this.setState({msg:null});
        });
    }
    render(){
        return(
            // <h2>上海天气：</h2>
            <iframe scrolling="no" src="http://tianqiapi.com/api.php?style=tt&skin=pitaya" frameBorder="0" width="590" height="98" allowTransparency="true"></iframe>

        );
    }
}

export default Weather;