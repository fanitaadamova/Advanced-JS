class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isInArray = false;
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!")
        }

        for (const obj of this.listOfArticles) {
            if (obj.articleModel === articleModel && obj.articleName === articleName) {
                obj.quantity += Number(quantity);
                isInArray = true;
            }
        }

        if (!isInArray) {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        for (const obj of this.guests) {
            if (obj.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }

        let obj = {
            guestName,
            points: 0,
            purchaseArticle: 0
        }

        switch (personality) {
            case 'Vip': obj.points = 500; break;
            case 'Middle': obj.points = 250; break;
            default: obj.points = 50; break;
        }

        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        const searchedArticle = this.listOfArticles.find(a => a.articleName === articleName);
        if (searchedArticle === undefined || searchedArticle.articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }

        if (searchedArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        
        const searchedGuest = this.guests.find(g => g.guestName === guestName);
        if (searchedGuest === undefined) {
            return 'This guest is not invited.';
        }
        const neededPoints = this.possibleArticles[articleModel.toLocaleLowerCase()];
        if (searchedGuest.points < neededPoints) {
            return 'You need to more points to purchase the article.';
        }

        searchedGuest.points -= neededPoints;
        searchedGuest.purchaseArticle++;
        searchedArticle.quantity--;
        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        const result = [];
        if (criteria === 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        } else if (criteria === 'guest') {
            result.push('Guests information:');
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));
        }

        return result.join('\n');
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


