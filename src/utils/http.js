import axios from 'axios'

const get = ({
    url
}) => {
    return new Promise((resolve, reject) => {
        axios({
                url
            })
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const post = ({
    url,
    data
}) => {
    return new Promise((resolve, reject) => {
        axios({
                method: 'post',
                url,
                data,
            })
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })

}

export {
    get,
    post
}