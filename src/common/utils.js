const updateCloudinaryUrlForSize = (url) => url.split("image/upload").join("image/upload/c_scale,h_550");

module.exports = {
    updateCloudinaryUrlForSize
}