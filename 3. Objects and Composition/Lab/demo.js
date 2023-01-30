function createRect(width, height) {

    const rect = { width, height };

    rect.getArea = () => {
        run(rect.width * rect.height)
    };
    return rect;
}


console.log(createRect(10, 20));




