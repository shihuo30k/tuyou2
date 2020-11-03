module.exports = function() {
    return {
        travels:require('./community/community-youji.json'),
        topic:require('./community/community-topic.json'),
        author:require('./community/community-author.json'),
        qals:require('./community/community-qa.json'),
        inhot:require('./destination/inHot-data.json'),
        subject:require('./destination/subject-data.json'),
        countries:require('./destination/all-countries.json'),
        list: require('./recommend/recommend-data.json'),
        banner: require('./recommend/recommendSwiper.json'),
        jnguide:require('./recommend/JNGuide-data.json'),
        jnlist:require('./recommend/JN-data.json'),
        question:require('./recommend/question.json'),
        section: require('./recommend/SectionData.json'),
        article:require('./destination/ariticle-data.json')
    }
}