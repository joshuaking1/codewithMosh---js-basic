function isLandscape(width, height) {
    return (width > height) ? width : height
}

console.log(isLandscape(500,80))