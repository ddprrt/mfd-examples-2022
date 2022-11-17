const defaultOptions = {
    src: "./src",
    dest: "./dest",
    override: false
}

function copy(options: Partial<typeof defaultOptions>) {
    let full_options = {...defaultOptions, ...options};
    console.log(full_options)
}

copy({
    override: true
})

//export {}