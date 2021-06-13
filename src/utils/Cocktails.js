// let allCocktail = {};

// var Airtable = require('airtable');
// var base = new Airtable({ apiKey: 'keySukFkhBF2vtuT7' })
//     .base('appwBcx85bj9Itozu');

// const table = base('Design projects');
// const getRecords = async () => {
//     const records = await table.select().firstPage();

    
    
    
    
    // allCocktail = records.map((detail, index) => {
    //     let cocktail = detail.fields || {};

    //     return {
    //         id: cocktail.id || '',
    //         name: cocktail.name || '',
    //         image: (cocktail.images[0] || '').url || '',
    //         materials: cocktail.materials || '',
    //         reciper: cocktail.reciper || '',
    //         sense: cocktail.sense || [],
    //     }
    // });

//     // console.warn('yeaaaaahhhhh');
//     // console.warn('yeaaaaahhhhh');
//     // console.warn('yeaaaaahhhhh');

//     //console.log(allCocktail);



    
// }

// getRecords();


// setTimeout(function() {
//     getRecords();
// }, 5000)





const Cocktails = [{
        id: '1',
        name: 'mojito',
        image: 'https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg',
        materials: ['50 ml White Rum', '8 Mint leaves', '12 1/2 ml Sugar Syrup', '25 ml Lime Juice', '2 Mint sprigs'],
        reciper: 'Ahh Mojito. We know you’re a hot weather drink, but we like making you all year round. In summer, we want something refreshing, and you’re the first that springs to mind. And in winter, we say we need to make use of all the mint in the flourishing mint bush. Really, making one of you doesn’t even make a dent in even a tiny mint plant. We just need any half hearted excuse to make you!! ',
        sense: ['fresh', 'soft'],
    }, {
        id: '2',
        name: 'mai tai',
        image: 'https://www.liquor.com/thmb/bMJ2wMlf0W1QMnmwhS3k_TjV6pc=/735x0/mai-tai-720x720-primary-e09e24f1cacd4b3896f5aa32ba51dcdd.jpg',
        materials: ['11/2 ounces white rum', '3/4 ounce orange curaçao', '3/4 ounce lime juice, freshly squeezed', '1/2 ounce orgeat', '1/2 ounce dark rum', 'Garnish: lime wheel', 'Garnish: mint sprig'],
        reciper: 'The Mai Tai is one of the most famous Tiki drinks in the world. Composed of rum, orange curaçao, fresh lime juice and orgeat (a nuanced almond syrup), it’s held sway over cocktail enthusiasts and Tiki aficionados for decades. It even enjoyed a star turn in the Elvis film “Blue Hawaii.”Victor “Trader Vic” Bergeron is often credited with inventing the drink at his Trader Vic’s bar in the 1940s, though it’s likely that Donn Beach laid the groundwork for the famous recipe during the 1930s at his Don the Beachcomber bar. The original Trader Vic’s recipe featured Jamaica’s J. Wray & Nephew rum. Once Bergeron ran out of his supply, he moved to blending rums in an attempt to create a similar flavor profile. While the Mai Tai was created as a way to showcase the flavors of good-quality rum, it took a wrong turn over the decades as bartenders employed bottled juices and mixers. Those yielded neon-colored or overly sweet cocktails. Fortunately, a renewed interest in Tiki cocktails has returned the Mai Tai to prominence as a fresh, balanced, rum-forward cocktail. Today’s bartenders continue the tradition of blending rums, aiming to find the optimal combination of flavor, depth and complexity. Some barkeeps utilize a crisp white rum alongside a dark overproof rum. Others play with high-ester Jamaican rums and grassy rhum agricole. There isn’t one right answer, but it’s helpful to consider four traits when creating your own rum blend: ABV, age, production methods and the raw materials used to make the rum. Find harmony in the details, and you might create the next great Mai Tai. Once the drink is shaken and served over ice (crushed is best), it’s time for the garnish. Go wild, if you’re feeling creative. Some Mai Tais feature everything from pineapple wedges to cherries on top. But if you’d like to keep the presentation cool and classic, a lime wheel and mint spring are a fine choice. And as for the name: Supposedly, the first person to try the cocktail was said to cry out “Mai Tai!” which means “the best—out of this world” in Tahitian.',
        sense: ['fresh', 'soft', 'light'],
    }, {
        id: '3',
        name: 'caipirinha',
        image: 'https://i3p2k7k6.stackpathcdn.com/wp-content/uploads/2017/05/caipirinha_cover-for-web-700x875.jpg',
        materials: ['2 ounces cachaça', '1 lime, cut into wedges', '2 teaspoons sugar', 'Garnish: lime wheel'],
        reciper: 'Chances are high you encountered Brazil’s national drink, the Caipirinha, if you’ve traveled to the South American country. Refreshing and easy to make, the cocktail contains fresh lime juice, sugar and cachaça—a spirit as central to Brazilian identity as samba, soccer and carnival. Cachaça is also the country’s national spirit, inextricably tying this drink to its home. First made in the 1500s, cachaça is similar to rum, but it has a flavor all its own. Most rums are distilled from molasses, a byproduct of sugarcane processing, while cachaça is distilled from the fermented juice of sugar cane. This important difference yields a distinct spirit that is characterized by its funky, grassy flavors, which set the Caipirinha apart from other sweet-and-sour cocktails like the Daiquiri. It’s unclear exactly when the Caipirinha first appeared, but many historians believe it was served in the early 20th century as a remedy for illness. Others say it was invented in the 19th century by Brazilian farmers as a way to showcase local sugarcane. Regardless of how or when it was born, drinkers have gravitated toward its pleasing flavors and heady effects ever since. The Caipirinha is easy to make and can be constructed right in the glass, but its build instructions are exacting. Lime juice and simple syrup won’t get the job done: The drink specifically calls for lime wedges and finely granulated sugar. Muddling the limes with abrasive sugar helps to release not only the fruit’s juice, but also the rich, aromatic oils from the peel. The classic Caipirinha is not a cocktail that requires improvement—it’s delicious as is. But that’s never kept bartenders from experimenting and tweaking the original recipe. The most common variation is the Caipiroska, which is simply made with vodka in place of cachaça. Other variations call for muddling fruits like raspberry or pineapple with the lime. Whichever route you go, the Caipirinha is refreshing and flavorful, with a unique ability to bring you straight to the tropics, no matter where you’re drinking.',
        sense: ['fresh', 'soft', 'sugary'],
    }, {
        id: '4',
        name: 'Bourbon Old Fashioned',
        image: 'https://global.jimbeam.com/sites/default/files/jb_drink/crafted_old_fashioned_20150620_L.jpg?crc=b5d9a073',
        materials: ['2 ounces bourbon', '3 dashes Angostura bitters', '1/2 teaspoon sugar', '1 teaspoon water', 'Garnish: orange peel'],
        reciper: 'When you get right down to it, the Bourbon Old Fashioned is little more than a slug of whiskey, seasoned and sweetened. Yet for all of its suave simplicity, the drink remains as relevant today as it was when it first captured drinkers’ hearts 200 years ago. If you’re a history buff, you could draw a straight line connecting this drink to the first recorded definition of the cocktail category in general (circa 1806), which called for spirits, sugar, water and bitters. The Old Fashioned hits all those marks, with whiskey, sugar, water and aromatic bitters. You could also skip the history lesson and simply make the drink. Do the latter if you’re already thirsty. Start by using good bourbon, the rule being that if you wouldn’t sip it by itself it has no place at the helm of a Bourbon Old Fashioned. (There are other whiskey drinks for masking subpar booze—this isn’t one of them.) From there, the cocktail-minded seem to break into two camps: simple syrup or muddled sugar. While a barspoon of syrup can cut your prep time in half, it robs the drink of some of the weight and texture that provides its deep appeal. If you want to make the drink like they did back in the 19th century, granulated sugar or a sugar cube is the way to go. If you want to make the cocktail with more of a modern twist, opt for simple syrup. (Although what’s the big rush? The Bourbon Old Fashioned isn’t going anywhere.) Just know that simple syrup adds a bit more water to your drink, so you may need to adjust your ice and stirring accordingly. Once you’ve mastered the Bourbon Old Fashioned, you can also try making the cocktail with rye whiskey, which results in a slightly spicier drink. Or you can use rum, brandy or any number of spirits—after all, the Old Fashioned is more of a template than an exact science. But there’s something about the bourbon-spiked version that drinkers have been coming back to for decades, so why mess with perfection?',
        sense: ['smooth', 'spicy'],
    }, {
        id: '5',
        name: 'Tequila Sunrise',
        image: 'https://i.pinimg.com/736x/ba/25/db/ba25dbe5d8af90ee6633e4933ddd3fff.jpg',
        materials: ['2 ounces blanco tequila', '4 ounces orange juice, freshly squeezed', '1/4 ounce grenadine', 'Garnish: orange slice', 'Garnish: cherry'],
        reciper: 'The Tequila Sunrise cocktail, with its bright striations of color, evokes a summer sunrise. This classic drink has only three ingredients—tequila, grenadine and orange juice—and is served unmixed to preserve the color of each layer. The Tequila Sunrise was created in the early 1970s by Bobby Lozoff and Billy Rice at the Trident bar in Sausalito, California. The cocktail achieved notoriety after Mick Jagger tasted it at a party to kick off The Rolling Stones’ 1972 tour. The band began ordering it at stops across the country, and even dubbed the tour “the cocaine and Tequila Sunrise tour,” which helped to propel the drink’s popularity. In 1973, Jose Cuervo put the recipe on the back of its tequila bottles, and that same year, the Eagles released a song called “Tequila Sunrise” on their “Desperado” album. These infusions into popular culture resulted in the drink going mainstream, and it has been a part of the cocktail canon ever since. The Tequila Sunrise is very easy to make, but it must be constructed precisely in order to achieve the desired sunrise look. Tequila and then orange juice (fresh is best) are added to a highball glass filled with ice. Grenadine is applied last, but due to its density, it sinks to the bottom, creating a red layer at the base of the glass. If you want to spruce up the drink, skip the bottled bright-red grenadine available on store shelves and try making your own. It’s an easy exercise that’s worth the effort, as it imbues the cocktail with a richer flavor. You don’t have to be a rock star to enjoy this tequila cocktail. It’s sweet, refreshing and delicious, so mix one whenever the mood strikes. But putting on a Rolling Stones or Eagles record will really complete that ’70s vibe.',
        sense: ['sweet'],
    }, {
        id: '6',
        name: 'Pisco Sour',
        image: 'https://i.pinimg.com/originals/39/49/35/394935da3554fa141bd7f69fb84baf9d.jpg',
        materials: ['2 ounces pisco', '1 ounce lime juice, freshly squeezed', '1/2 ounce simple syrup', '1 egg white', 'Garnish: Angostura bitters'],
        reciper: 'Chile and Peru bicker fiercely over the Pisco Sour’s origin (and that of pisco, too), but by most accounts, the drink’s genesis is tied to a United States citizen. Expat bartender Victor Morris is believed to have concocted the frothy, smooth cocktail at his Lima bar around 1915 or perhaps the early 1920s. Blending pisco, lime juice, egg white and Angostura bitters, the Pisco Sour is earthy, sweet and tart—a cocktail worth fighting over. Pisco is a grape-distilled spirit that was first made in the 16th century. Piscos vary in style and grape variety, with different expressions ranging in flavor from dry and earthy to floral and fruity. The Pisco Sour doesn’t call for a particular pisco, so enterprising drinkers can experiment to find which they prefer. Spirit, citrus, sugar and egg white are the core ingredients in a good sour, including the popular Whiskey Sour. But one small difference that’s become emblematic of the Pisco Sour is its inclusion of Angostura bitters. The aromatic bitters, which are usually applied as a garnish, add color and fragrance to the cocktail. Those bitters sit on the drink’s fluffy head, a trait achieved by dry-shaking the cocktail. That means shaking it first without ice to incorporate the liquid ingredients with the egg white before shaking it again with ice to provide chill and dilution. The result is a delicious cocktail with a silky mouthfeel that can provide refreshment whether you’re hiking in the Andes or drinking on the beach.',
        sense: ['sour'],
    }, {
        id: '7',
        name: 'New Year’s Sparkler',
        image: 'https://www.kitchentreaty.com/wp-content/uploads/2009/12/cranberry-lime-champagne-co-1-700x980.jpg',
        materials: ['1 ounce berry-flavored vodka', '3 1/2 ounces Champagne, to top', '1 1/2 ounces pomegranate or cranberry juice', 'Garnish: skewered raspberries'],
        reciper: 'New Year’s Eve is perhaps the most iconic of drinking holidays. While St. Patrick’s Day is notorious for general over-inebriation, Derby Day is famed for its midday Mint Juleps and the winter holidays feature mulled wine, Eggnog and other cold-weather drinks, New Year’s Eve brings a particular level of class and sophistication to drinking. This is, of course, largely to do with the signature drink of the holiday: Champagne. Not everyone has an appreciation for the bubbly French wines, though. Others prefer to toast the end of the year in style with brightly colored bubbly drinks. The New Year’s Sparkler is such a drink; it’s a breeze to make and can be adjusted to individual tastes. The sparkling concoction starts with a berry-flavored vodka. Before the boom of craft vodka labels, this would have meant turning to one of a few big-name brands. Today a number of quality brands produce vodkas flavored with real fruits—Wild Roots, in Portland, Oregon, for instance has a number of berry-infused vodkas, including raspberry, marionberry and cranberry. Each bottle is made with more than a pound of berries, most of which is harvested locally. Other brands with quality fruit vodkas include Ciroc, Finlandia and even Grey Goose, which has a strawberry and lemongrass vodka. Of course, infusing vodka at home is also an option. This gives you control over what type of berries and how much you want to use. While you can use modern devices like sous vide to do so, there’s always the option to add berries to a vodka and let sit in a cool, dark space for a day or two. However you select your berry vodka, the next step is to add pomegranate, cranberry juice or a mix of the two. As with selecting any juice, the level of sweetness is up to you, but it’s always best to avoid ones with artificial flavorings and sweeteners. The last bit of the New Year’s Sparkler is the most important: the wine. Since you’ll be mixing it with fruit vodka and juice, don’t use one that’s too pricey (save the cru and grower Champagne for drinking on their own). Or select another kind of sparkling wine, like an affordable prosecco or cava. Just be sure, again, to avoid anything overly sweet—or else the drink could end up a cloying mess.',
        sense: ['sweet']
    }
];

// console.log(Cocktails);
// console.log(allCocktail);

// setTimeout(function() {
//     console.log(allCocktail);
// }, 1000)

export default Cocktails;
// export default allCocktail;