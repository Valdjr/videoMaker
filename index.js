const readline = require('readline-sync');
const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = {}
    content.searchTerm = askAndReturnSearch()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearch() {
        return readline.question('Type a Wikipedia search term: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        return prefixes[selectedPrefixIndex];
    }

    // console.log(content)
}

start()