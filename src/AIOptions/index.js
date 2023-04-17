 export const arrayItems = [
    {
        name:'Q&A',
        id:'q&a',
        description:'Answer Questions based on existing Knowledge' ,
        option:{
            model:"text-davinci-003",
            temperature:0,
            max_tokens:100,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        }
    },
    {
        name:'Grammer Correction',
        id:'grammercorrection',
        description:'correct sentences into standard english' ,
        option:{
            model:"text-davinci-003",
            temperature:0,
            max_tokens:50,
            top_p:1.0,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        }  
    },
    {
        name:'Summarize for a second grader',
        id:'summary',
        description:'translate difficult text into simpler concepts'  ,
        option:{
            model:"text-davinci-003",
            temperature:0.7,
            max_tokens:64,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        } 
    },
    {
        name:'English to other languages',
        id:'translate',
        description:'translate english text into French, Spanish and other Golobal languages'  ,
        option:{
            model:"text-davinci-003",
            temperature:0.3,
            max_tokens:100,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        } 
    },
    {
        name:'Movie to Emoji',
        id:'movietoEmoji',
        description:'translate movie titles into emoji',
        option:{
            model:"text-davinci-003",
            temperature:0.8,
            max_tokens:60,
            top_p:1.0,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        }   
    },
    {
        name:'Explain Code',
        id:'explaincode',
        description:'Explain a complicated piece of code' ,
        option:{
            model:"text-davinci-003",
            temperature:0,
            max_tokens:150,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        }  
    },
    {
        name:'JavaScript to Python',
        id:'jstopy',
        description:'translate simple javaScript expressions to Python'   ,
        option:{
            model:"text-davinci-003",
            temperature:0,
            max_tokens:150,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        }
    },
]