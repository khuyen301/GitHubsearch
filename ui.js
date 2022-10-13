//ui
class Ui {
    render(profile, repos){
        //xóa main cũ đi
        let _main = document.querySelector("main");
        if (_main) {
            _main.remove();
        }

        //chuẩn bị cardString
        let cardString = repos.reduce((result, current) =>{
            return result += `
            <div class="mb-3 p-2 card">
                <a href="${current.html_url}" class="mb-3 fs-4">${current.name}</a>
                <p class="mb-3">${current.description}</p>
                <div class="mb-3">
                    <span class="badge bg-primary">${current.language}</span>
                    <span class="badge bg-info">${current.stargazers_count}</span>
                    <span class="badge bg-success">${current.forks_count}</span>
                </div>
            </div>
            `
        }, "")

        //chuẩn bị main mới
        const main = document.createElement("main");
        main.innerHTML = `
        <div class="container">
            <div class="row">
                <!-- bên trái -->
                <div class="col-4">
                    <figure>
                        <img src="${profile.avatar_url}"; 
                            style="height: 150px; 
                                    width: 150px; 
                                    object-fit: cover">
                    </figure>
                    <h1 class="fs-3">${profile.login}</h1>
                    <p>${profile.bio}</p>
                    <a href="${profile.html_url}" target="_blank" class="btn btn-primary">view profile</a>
                    <div class="mb-3">
                        <span class="badge bg-primary">following: ${profile.following}</span>
                        <span class="badge bg-info">repos: ${profile.public_repos}</span>
                        <span class="badge bg-success">follower: ${profile.followers} </span>
                    </div>

                    <ul class="list-group">
                        <li class="list-group-item">website: <a href="${profile.blog}">${profile.blog}</a></li>
                        <li class="list-group-item">location: ${profile.location}</li>
                        <li class="list-group-item">createAt: ${profile.created_at}</li>
                        <li class="list-group-item">twitter: ${profile.twitter_username}</li>
                    </ul>
                </div>
                <!-- bên phải -->
                <div class="col-8">
                    <h1 class="fs-2">repositories</h1>
                    ${cardString}
                </div>
            </div>
    </div>
        `;
        
    document.body.insertBefore(main, document.querySelector("footer"));
    }
    //tạo method thông báo
    alert(message, type = "sucess") {
        const alertNode = document.createElement("div");
        alertNode.innerHTML = message;
        alertNode.className = `alert alert-${type}`;
        document.querySelector("#notification").appendChild(alertNode);
        setTimeout(() => {
            alertNode.remove();
        }, 2000);
    }
}