import React from 'react'
// import ReactDOM from 'react-dom/client';

export default class Status extends React.Component {

    state = {
        loading: true,
        serverInformation: null,
        motd: null,
    }

        async componentDidMount() {
        const url = 'https://api.mcsrvstat.us/2/134.255.231.183:25629';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({serverInformation: data, loading:false, motd:data.motd.html})
        console.log(this.state.serverInformation)
    }
    

    
    render() {
        return <div>
            {this.state.loading ? <div>Fetching server information!</div> : <div className='center-text'> {this.state.serverInformation.online ? <div> Server is currently online!  <br/><div> {this.state.serverInformation.players.online} / {this.state.serverInformation.players.max} players currently online! <br /> MOTD : <div> 
                <div dangerouslySetInnerHTML={{__html: this.state.motd}} />
            </div> Minecraft version {this.state.serverInformation.version}  </div> </div> : <div> Server is currenly offline <br /> please try again in a few moments! </div> }  </div>}
        </div>
    };

}
