import React from 'react'

export default class Status extends React.Component {

    state = {
        loading: true,
        serverInformation: null
    }

    async componentDidMount() {
        const url = 'https://api.mcsrvstat.us/2/144.217.49.130:25629';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({serverInformation: data, loading:false})
        console.log(this.state.serverInformation)
    }


    render() {
        return <div>
            {this.state.loading ? <div>Fetching server information!</div> : <div className='center-text'> {this.state.serverInformation.online ? <div> Server is currently online!  <br/><div> {this.state.serverInformation.players.online} / {this.state.serverInformation.players.max} players currently online! <br /> MOTD : {this.state.serverInformation.motd.html} <br /> Minecraft version {this.state.serverInformation.version}  </div> </div> : <div> Server is currenly offline <br /> please try again in a few moments! </div> }  </div>}
        </div>
    };
}
