import * as React from 'react';
require('./ui-banner.scss');

export interface UiBannerProps extends React.Props<any> {
    items: {apiUrl:string, fields: Array<string> };
}


export class Banner extends React.Component<UiBannerProps>{
    state:any = {
        bannerVisible:false,
        apiData:[]
    }
    constructor(props:UiBannerProps){
        super(props)
    }
    setBanner = () => {
        this.setState({
        bannerVisible:false,
        })
    }
    async componentDidMount(){
        fetch(this.props.items.apiUrl)
        .then(response => response.json())
        .then(data => this.setState({apiData:data,bannerVisible:true}));
    
    }
    render(){
    return (
        <div className='ui_banner' style={{visibility: this.state.bannerVisible? "visible": "hidden"}} >
            <button className='ui_banner__close' aria-hidden='true' onClick={this.setBanner}>
                <span>
                    <i className='argo-icon-close' aria-hidden='true'/>
                </span>
            </button>
            <div className="ui_banner__text">
            {this.props.items.fields.map(item => (
            <div key={item}><a className="ui_banner__items" href='#'>{this.state.apiData[item]}</a></div>
            ))}
            </div>
        </div>
        );
    }
}