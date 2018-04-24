const updateCloudinaryUrlForSize = (url) => url.split("image/upload").join("image/upload/c_scale,h_350,w_550");

module.exports = {
    updateCloudinaryUrlForSize
}