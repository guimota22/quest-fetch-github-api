const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                <h3>Seguidores: ${user.followers}</h3>
                                <h3>Seguindo: ${user.following}</h3>
                            </div>
                        </div>`

        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `<li class="listRepositories">
                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                        <div class="infoRepositorie">
                                            <ul>
                                                <li class="symbols">🍴${repo.forks}</li>
                                                <li class="symbols">⭐${repo.stargazers_count}</li>
                                                <li class="symbols">👀${repo.watchers_count}</li>
                                                <li class="symbols">🧑‍🏫${repo.language}</li>
                                            </ul>
                                        </div>
                                </li>`;
        });

        let eventsItens = '';
        user.events.forEach(event => {
            let commitMessage = event.payload.commits && event.payload.commits.length > 0 ? event.payload.commits[0].message : 'Nenhum commit disponível';
            eventsItens += `<li>
                                <a href="" target="_blank">${event.repo.name}</a><span> -${commitMessage}</span>
                           </li>`;
        });

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`;
        }

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`;
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
}

export { screen };
