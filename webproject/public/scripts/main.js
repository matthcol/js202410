function set_my_tag_background(color){
    console.log('change my-tag(s) color to:', color)
    const tags = document.getElementsByTagName('my-tag')
    Array.from(tags)
        .forEach(element => {
            element.style.backgroundColor = color
        });
}