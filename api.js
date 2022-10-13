//api
class Api {
    constructor(){
        this.client_id = "7678bd8c73e95c124323";
        this.client_secret = "2812f581af6a388a3a7e30d5a2b455e991a1472a"
    }
    async getInfor(username) {
        const [profile, repos] = await Promise.all([
            fetch(
                `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
                ).then((response) => {
                    if (response.ok){
                        return response.json();
                    } else {
                        throw new Error(response.statusText);
                    }
                }),     
                fetch(
                    `https://api.github.com/users/${username}/repos?client_secret=${this.client_secret}`
                    ).then((response) => {
                        if (response.ok){
                            return response.json();
                        } else {
                            throw new Error(response.statusText);
                        }
                    }),
        ]);
        
        return {
            profile,
            repos,
        };
    }
}

//test code
// let http = new Api();
// http.getInfor("khuyen301")
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
