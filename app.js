//luồng chính

window.addEventListener("DOMContentLoaded", () => {
    document
    .querySelector("#form-search")
    .addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        let http = new Api();
        let ui = new Ui();
        try{
            const {profile, repos} = await http.getInfor(username);
            ui.render(profile,repos);
            ui.alert("thành công ròi");
        }catch(error){
            ui.alert("ko có user đó tồn tại nhen", "danger")
        }
    });
});



