// Code YouTubeDebugger Component Here
import React,{Component} from 'react'

export default class YouTubeDebugger extends Component {
    state={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    changeBitrate=()=>{
        this.setState(previousState =>{return {
            settings: {...previousState.settings,
                bitrate: 12}
            }
        })
    }

    changeResolution=()=>{
        this.setState(previousState =>{
            return {
                settings: {...previousState.settings,
                    video: {...previousState.settings.video,
                        resolution:'720p'
                    }
                }
            }
        })
    }


    render(){
        return(
            <div>
            <button onClick={this.changeBitrate} className="bitrate">bitrate</button>
            <button onClick={this.changeResolution} className="resolution">resolution</button>
            </div>
        )   
    }

}