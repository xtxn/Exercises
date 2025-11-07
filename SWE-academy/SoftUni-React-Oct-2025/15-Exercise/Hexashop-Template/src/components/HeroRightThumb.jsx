export default function HeroRightThumb(props) {
    return (
        <div className="col-lg-6">
            <div className="right-first-image">
                <div className="thumb">
                    <div className="inner-content">
                        <h4>{props.title}</h4>
                        <span>{props.content}</span>
                    </div>
                    <div className="hover-content">
                        <div className="inner">
                            <h4>{props.title}</h4>
                            <p>
                                {props.description}
                            </p>
                            <div className="main-border-button">
                                <a href="#">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <img src={props.imageUrl} />
                </div>
            </div>
        </div>
    )
}