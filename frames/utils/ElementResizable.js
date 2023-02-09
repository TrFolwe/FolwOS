function setResizableElement(element) {
    let x = 0;
    let y = 0;

    let w = 0;
    let h = 0;

    const mouseDownHandler = function (e) {
        x = e.clientX;
        y = e.clientY;

        const styles = window.getComputedStyle(element);
        w = parseInt(styles.width, 10);
        h = parseInt(styles.height, 10);

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        element.style.width = `${w + dx}px`;
        element.style.height = `${h + dy}px`;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    element.addEventListener("mousedown", mouseDownHandler)
}