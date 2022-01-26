function dateTimeToStr(datetime) {
    let date = new Date(datetime);

    return date.toLocaleDateString();
}

export { dateTimeToStr };