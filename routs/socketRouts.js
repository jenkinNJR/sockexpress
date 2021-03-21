

module.exports=(io)=>{
    io.on('connection', socket => {
        console.log(`socket.id`, socket.id)
    })

    io.on('disconnect', socket => {
        console.log('disconnect', socket.id)
    })
}