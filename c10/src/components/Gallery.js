import React from "react";
import ImagePopup from "./ImagePopup";
import { connect } from "react-redux";
import { FetchPhotos } from "../actions/GalleryActions";

class Gallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: ""
        }
    }

    componentDidMount() {
        this.props.dispatch(FetchPhotos());
    }

    OpenImagePopup = (url) => {
        this.setState({
            url: url 
        })
    }

    CloseImagePopup = () => {
        this.setState({
            url: ""
        })
    }

    render() {

        const Loading = () => {
            return <h2>Loading...</h2>
        }

        return(
            <div id="gallery">
                <ul>
                    {
                        this.props.photosLoading ? <Loading /> :
                        this.props.photos
                        .slice(0, 100)
                        .map(photo => {
                            return (
                                <li onClick={() => this.OpenImagePopup(photo.url)} key={photo.id}>
                                    <img src={photo.thumbnailUrl} alt={photo.title} />
                                </li>
                            )
                        })
                    }
                </ul>

                {this.state.url !== "" ? 
                <ImagePopup 
                    url={this.state.url} 
                    CloseImagePopup={this.CloseImagePopup} 
                /> : 
                null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.GalleryReducer.photos,
        photosLoading: state.GalleryReducer.loading,
        photosError: state.GalleryReducer.error
    }
}

export default connect(mapStateToProps, null)(Gallery);