import React from 'react';

export const CarouselGallery = (props) => {
    var images = [];
    props.previewImages.map((image) => {
        images.push(
            <li data-thumb={image} key={image}>
                <img src={image} className="slider-img"></img>
            </li>
        );
    });

    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="item">
                <div>
                    <ul id="image-gallery" className="gallery list-unstyled cS-hidden">
                        {images}
                    </ul>
                </div>
            </div>
        </div>
    )
}
