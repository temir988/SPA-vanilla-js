import Model from './model.js';
export default {
    async friendsRoute(params) {
        // if (params.id) {
        //     const [friend] = await Model.getUser({ user_ids: params.id, fields: 'photo_100,city,' })
        //     console.log(friend);
        // } else {
        //     const friends = await Model.getFriends({ fields: 'photo_100,bdate' });
        //     console.log(friend);
        // }
        const friends = await Model.getFriends({ fields: 'photo_100,bdate' });
        console.log(friend);

    },
    async newsRoute() {
        const news = await Model.getNews({filters: 'post', count: 20 });
        console.log(news);
    }
};
