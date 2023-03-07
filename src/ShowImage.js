function ShowImage({ showImage, increaseHeart }) {
    return (
        <li onClick={() => increaseHeart(showImage.id)} className="rel">
            <div>
                <img src={showImage.image1} alt={showImage.id} className="showImage1" />
            </div>
            <div className="abs">
                <img src={showImage.image2} alt={showImage.id} className="showImage2" width={showImage.image2Size + "px"} height={showImage.image2Size + "px"} />
            </div>
        </li>
    );
}
export default ShowImage;