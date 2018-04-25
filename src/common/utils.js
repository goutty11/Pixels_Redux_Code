const updateCloudinaryUrlForSize = (url) => url.split("image/upload").join("image/upload/c_scale,h_350,w_550");

const updateUserProfilePic = (profile_pic) => profile_pic.split("image/upload").join("image/upload/c_scale,h_55,w_50");

module.exports = {
    updateCloudinaryUrlForSize,
    updateUserProfilePic
};