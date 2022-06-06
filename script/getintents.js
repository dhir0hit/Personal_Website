class Brain {
    Json = json;
    Question = " ";
    result = []
    Reply = "Sorry, Couldn't understand your question";

    constructor(question) {
        this.Question = question;
    }

    Run() {
        for (let intent of this.Json.intents) {


            let intentPatterns = Array();

            for (let pattern of intent.patterns) {
                for (let patternElements of pattern.split(" ")) {
                    intentPatterns.push(patternElements)
                }
            }

            let count = 0;

            for (let string of this.Question.split(" ")) {
                if(intentPatterns.includes(string)) { count++ }
            }

            let currentTagCompatibility = [intent.tag, count]
            this.result.push(currentTagCompatibility)
        }
    }

    FindReply() {
        let GreatestNumber = 0;
        let GreatestNumberTag = "";
        for (let resultElement of this.result) {
            if (GreatestNumber < resultElement[1]) {
                GreatestNumber = resultElement[1];
                GreatestNumberTag = resultElement[0];
            }
        }

        for (let intent of this.Json.intents) {
            if(intent.tag === GreatestNumberTag) {
                this.Reply = intent.responses[Math.floor(Math.random() * intent.responses.length)];
            }
        }
    }
}

json = {"intents":  [
    {
        "tag": "greetings",
        "patterns": ["hello", "hey", "hi", "good day", "what's up?", "how is it going", "Is anyone there?", "greetings", "good morning", "good afternoon", "good evening", "morning", "afternoon", "evening", "yo!", "What's up?", "Sup", "heyy", "hiya!", "ahoy!", ""],
        "responses": ["Hello!", "Hey", "What can I do for you?", "Hi there, how can I help?"]
    },
    {
        "tag": "greeting1",
        "patterns": ["howdy!", "how are you", "how do you do?", "how have you been?", "how's it going?", "are you ok?", "what's the craic?", "what's sizzling?", "what's going on?", "whazzup?", "what are you up to?", "how are things going?", "Sup!"],
        "responses": ["I'm great, How about you?", "I'm great, thank you for asking. How about you?", "I'm feeling quite fine, thanks, and you?", "Fine and you?", "Thanks for asking! I'm excellent. How about you?", "I'm fine, thanks. Hope you are also well"]
    },
    {
        "tag": "greeting2",
        "patterns": ["I'm great, How about you?", "I'm great, thank you for asking. How about you?", "I'm feeling quite fine, thanks, and you?", "Fine and you?", "Thanks for asking! I'm excellent. How about you?", "I'm fine, thanks. Hope you are also well"],
        "responses": ["Nice to hear that", "It's great to see you", "good to see you"]
    },
    {
        "tag": "goodbye",
        "patterns": ["Bye", "See you later", "Goodbye"],
        "responses": ["See you later", "Have a nice day", "Bye! Come back again"]
    },
    {"tag": "thanks",
        "patterns": ["Thanks", "Thank you", "That's helpful", "Thanks for the help"],
        "responses": ["Happy to help!", "Any time!", "My pleasure", "You're most welcome!"]
    },
    {"tag": "about",
        "patterns": ["Who are you?", "What are you?", "Who you are?" ],
        "responses": ["I'm Eir, your bot assistant", "I'm Eir, an Artificial Intelligent bot", "I'm Eir"]
    },
    {"tag": "name",
        "patterns": ["what is your name", "what should I call you", "whats your name?"],
        "responses": ["You can call me Eir.", "I'm Eir!", "Just call me as Eir"]
    },
    {"tag": "help",
        "patterns": ["Could you help me?", "give me a hand please", "Can you help?", "What can you do for me?", "I need a support", "I need a help", "support me please"],
        "responses": ["Tell me how can assist you", "Tell me your problem to assist you", "Yes Sure, How can I support you"]
    },
    {
        "tag": "age",
        "patterns": ["how old are you", "what is your age", "how old are you"],
        "responses": ["1", "1 years!"]
    },
    {"tag": "complaint",
        "patterns": ["have a complaint", "I want to raise a complaint", "there is a complaint about a service"],
        "responses": ["Please provide us your complaint in order to assist you", "Please mention your complaint, we will reach you and sorry for any inconvenience caused"]
    }
]}
